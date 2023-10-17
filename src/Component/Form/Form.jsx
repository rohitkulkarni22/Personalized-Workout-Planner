import React, { useState } from 'react'
import Box from '@mui/material/Box';
import {TextField, Select, MenuItem, InputLabel, FormControl, Button, FormControlLabel, FormLabel, RadioGroup, Radio, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';
import { getWorkout } from '../redux/workoutSlice';
import { FitnessPlan } from './FitnessPlan'
import { useNavigate } from 'react-router';

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [plan, setPlan] = useState('specific');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('')
  const [fitnessLevel, setFitnessLevel] = useState('')
  const [targetMuscle, SetTargetMuscle] = useState('')
  const [duration, setDuration] = useState('')

  const [showFrom, setShowForm] = useState(true);
  const [showResponse, setShowResponse] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //API call function
    if (isInputValid()) {
      dispatch(getWorkout({ age, plan, gender, fitnessLevel, targetMuscle, duration }));
      setShowForm(false)
      setShowResponse(true)
    }

  }

  const isInputValid = () => {
    if (!(age >= 20 && age <= 40)) {
      console.log('erro', age);
      alert("Please enter the age between 20 to 40")
      return false;
    }
    else return true;
  }

  return (
    <div>
      {/* Form Starts*/}
      <Box
        sx={{
          display: showFrom ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}

        noValidate
        autoComplete="off"
      >
        <Typography variant='h3' sx={{m:3}}>Your Information</Typography>
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl>
              <FormLabel id="planType">Exercise Type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="planType"
                name="planType"
                defaultValue="specific"
                onChange={(e) => setPlan(e.target.value)}
              >
                <FormControlLabel value="specific" control={<Radio />} label="Specific" />
                <FormControlLabel value="general" control={<Radio />} label="General" />
              </RadioGroup>
            </FormControl>
          </div>

          <div>
            <TextField
              sx={{ m: 1, width: 300 }}
              id="outlined-password-input"
              label="Age"
              type="Number"
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}
            />

          </div>
          <div>
            <FormControl >
              <InputLabel id="Age">Gender</InputLabel>
              <Select
                sx={{ m: 1, width: 300 }}
                labelId="Age"
                id="Age"
                value={gender}
                label="Gender"
                required
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
              </Select>
            </FormControl>

          </div>
          <div>
            <FormControl >
              <InputLabel id="fitnessLevel">Fitness Level</InputLabel>
              <Select
                sx={{ m: 1, width: 300 }}
                labelId="FitnessLevel"
                id="FitnessLevel"
                value={fitnessLevel}
                label="Fitness level"
                required
                onChange={(e) => setFitnessLevel(e.target.value)}
              >
                <MenuItem value={'beginner'}>Beginner</MenuItem>
                <MenuItem value={'intermediate'}>Intermediate</MenuItem>
                <MenuItem value={'advanced'}>Advanced</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl >
              <InputLabel id="targetMuscle">Traget Muscle</InputLabel>
              <Select
                sx={{ m: 1, width: 300 }}
                labelId="targetMuscle"
                id="targetMuscle"
                value={targetMuscle}
                label="Target Muscle"
                required
                onChange={(e) => SetTargetMuscle(e.target.value)}
              >
                <MenuItem value={'upper body'}>Upper-Body</MenuItem>
                <MenuItem value={'lower body'}>Lower-Body</MenuItem>
                <MenuItem value={'full body'}>Full-Body</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl >
              <InputLabel id="duration">Training Duration</InputLabel>
              <Select
                sx={{ m: 1, width: 300 }}
                labelId="duration"
                id="duration"
                value={duration}
                label="Training Duration"
                required
                onChange={(e) => setDuration(e.target.value)}
              >
                <MenuItem value={4}>4 Weeks</MenuItem>
                <MenuItem value={8}>8 Weeks</MenuItem>
                <MenuItem value={16}>16 Weeks</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button onClick={() => navigate("/")} variant='outlined' sx={{ m: 1, width: 150 }} color="inherit">Back</Button>
          <Button type="Submit" variant='contained' sx={{ m: 1, width: 150 }} color="inherit">Next</Button>
        </form>
      </Box>

      {/* Display Result */}
      <Box
        sx={{
          display: showResponse ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        noValidate
        autoComplete="off"
      >
        <FitnessPlan />
      </Box>

    </div>
  )
}

export default Form
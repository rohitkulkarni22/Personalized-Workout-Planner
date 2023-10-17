import { Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const FitnessTable = (schedule) => {
	return (
		< TableContainer >
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="right">Week</StyledTableCell>
						<StyledTableCell align="right">Exercises</StyledTableCell>
						<StyledTableCell align="right">Sets</StyledTableCell>
						<StyledTableCell align="right">Reps</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{schedule.map((row) => (
						<StyledTableRow key={row.week}>
							<StyledTableCell align="left">{row.week}</StyledTableCell>
							<StyledTableCell align="left">{row.exercise.toString()}</StyledTableCell>
							<StyledTableCell align="left">{row.sets}</StyledTableCell>
							<StyledTableCell align="left">{row.reps}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer >
	)
}

const checkData = (data, navigate) => {
	if (data.length === 0) {
		return <>
			<Typography variant='h2' sx={{m:5}}> Oops... Input Data is not valid</Typography>
			<Typography variant='h5' sx={{m:3}}> Try with these:</Typography>
			<Typography variant='h5' sx={{m:3}}> Specific Age:25, Gender: Female, Level:Beginner, Target muscle: Upper, Duration: 4 weeks</Typography>
			<Typography variant='h5' sx={{m:3}}> Or</Typography>
			<Typography variant='h5' sx={{m:3}}> Specific Age:30, Gender: Male, Level:Intermediate, Target muscle: Lower, Duration: 4 weeks</Typography>
			<Typography variant='h5' sx={{m:3}}> Or</Typography>
			<Typography variant='h5' sx={{m:3}}> Specific Age:28, Gender: Male, Level:Advanced, Target muscle: Full body, Duration: 8 weeks</Typography>
			
			<Button onClick={() => navigate("/")} variant='outlined' sx={{ m: 1 }}>Go Home</Button>

		</>
	}
}

export const FitnessPlan = () => {
	const navigate = useNavigate();

	const data = useSelector((state) => {
		console.log(state);
		return state.workout.data;
	});

	return (
		<div>
			<div>{checkData(data, navigate)}
			</div>
			{data?.map((ele) => (
				<div key={ele.id}>
					<Typography variant="h5" sx={{ m: 1, }} >Workout Plan for {ele.duration} Weeks</Typography>
					<Typography variant="h6" sx={{ m: 1, }} >Description: {ele.description}</Typography>
					{FitnessTable(ele.workoutSchedule)}
					<Button onClick={() => navigate("/")} variant='outlined' sx={{ m: 1 }}>Home</Button>
				</div>
			))}

		</div>
	)
};

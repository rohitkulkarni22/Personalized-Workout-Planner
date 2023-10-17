import { Typography, Button, Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/form");
    };

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '100vh'
                }}
            >

                <div class="title">
                    <Typography sx={{ m: 1 }} variant="h1">Personalized Workout Planner</Typography>
                    <Button onClick={handleClick} variant='outlined' size="large" color="inherit" sx={{ m: 1 }}>Get your Personal Plan</Button>
                </div>
            </Box>

        </div>
    )
}

export default Home
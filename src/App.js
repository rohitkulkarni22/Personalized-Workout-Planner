import { useState } from "react";
import Form from "./Component/Form/Form";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Component/Home/Home";
import ButtonAppBar from './Component/Form/DarkMode/AppBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


function App() {
  const[darkMode, setDarkMode] = useState(false);
  const theme=createTheme({
    palette:{
      mode:darkMode?"dark":"light"
    }
  })

  return (
    <div>
    <ButtonAppBar check={darkMode} change={()=>setDarkMode(!darkMode)}/>
    <ThemeProvider theme={theme}>
      <Paper style={{height:"250vh"}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
    </div>
  );
}

export default App;
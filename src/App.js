import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';

import Signup from "./Component/Signup/Signup";
import Login from "./Component/Login/Login";
import Admin from "./Component/Admin-panel/Admin";
import PageNotFound from "./Component/Page-Not-Found/Page-Not-Found";
import Dashboard from "./Component/Admin-panel/Dashboard/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material";
import { deepPurple,lime,pink,deepOrange,teal } from "@mui/material/colors";
import "@fontsource/poppins/500.css";

const App = () =>{
  
  const theme = createTheme({
    palette:{
      primary: deepPurple,
      success:lime,
      error: pink,
    },
    typography : {
      fontFamily: "Poppins"
    }
  })

  const design = (
    <>
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-panel" element={<Admin />}>
             <Route path="modern" element={<Dashboard />} />
             <Route path="*" element={<PageNotFound />} />
        </Route>  
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </ThemeProvider>
    </>
  );
  return design;
}

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';

import Signup from "./Component/Signup/Signup";
import Login from "./Component/Login/Login";
import Admin from "./Component/Admin-panel/Admin";
import PageNotFound from "./Component/Page-Not-Found/Page-Not-Found";
import Dashboard from "./Component/Admin-panel/Dashboard/Dashboard";

const App = () =>{
  const design = (
    <>
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
    </>
  );
  return design;
}

export default App;


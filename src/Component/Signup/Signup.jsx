import { Link } from "react-router-dom";


const Signup =() =>{
    const design = (
        <>
        <h1> Please access the login page from below button</h1>
        <Link to ="/login">Login</Link>
        </>

    );
    return design;
}
export default Signup
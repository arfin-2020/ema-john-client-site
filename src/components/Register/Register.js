import { Link } from "react-router-dom";

const Register = () =>{
    return(
        <div className="App">
            <h2>Register Please.....</h2>
            <form>
                <input type = 'name' placeholder="Enter username" /><br/><br/>
                <input type = 'email' placeholder="Enter Email" /><br/><br/>
                <input type = 'password' placeholder="password" /><br/><br/>
                <input type = 'password' placeholder="re-enter password" /><br/><br/>
                <p>New to ema-jhon? <Link to='/login'>Login</Link></p>
                <button type="submit" className="btn-regular">Register</button>
            </form>
        </div>
    )
}
export default Register;
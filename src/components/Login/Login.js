import { Link } from "react-router-dom";

const Login = () =>{
    return (
        <div className="App">
            <h2>Please Login Here</h2>
            <form>
                <input 
                type = 'email'
                name='email'
                placeholder="Enter your email"
                /><br/><br/>
                <input 
                type = 'password'
                name='password'
                placeholder="Enter your password"
                /><br/><br/>
            </form>
            <p>New to ema-jhon? <Link to='/register'>Register</Link></p>
            <button className="btn-regular">Sign In with Google</button>
        </div>
    )
}

export default Login;
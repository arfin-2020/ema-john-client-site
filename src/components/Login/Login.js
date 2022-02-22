import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () =>{
        const {signInWithGoogle} = useAuth();

    const handleWithGoogle = () =>{
        try{
             signInWithGoogle()
        }catch(error){
            console.log(error)
        }
    }
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
            <button className="btn-regular" onClick={handleWithGoogle}>Sign In with Google</button>
        </div>
    )
}

export default Login;
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../Context/AuthContext";

const Login = () =>{
        const {signInWithGoogle} = useAuth();
        // console.log(currentUser?.name)
        const location = useLocation();
        const history = useHistory();
        const redirect_uri = location.state?.from || '/';
        // console.log('came from', location?.state.from)
    const handleWithGoogle = async() =>{
        try{
            await signInWithGoogle()
            history.push(redirect_uri)
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
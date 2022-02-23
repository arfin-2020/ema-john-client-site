import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = ({children,...rest}) =>{
    const {currentUser} = useAuth()
    return (
        <Route
            {...rest}
            render={({location})=>{
               return currentUser?.name ? (
                    children
                ) : (
                    <Redirect 
                    to={{
                        pathname: '/login',
                        state:{from: location},
                    }}

                    />
                );
            }}
        />
    );
    
    
}

export default PrivateRoute;
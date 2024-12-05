import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
    const { user } = useContext(AuthContext);

    const handleClick = () => {
        console.log("Current user:", user);
    };

    return (
        <div>
            <h1>{user ? `Welcome, ${user.displayName}` : "No user logged in"}</h1>
            <button onClick={handleClick}>Check User</button>
        </div>
    );
};

export default Login;


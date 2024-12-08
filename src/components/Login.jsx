
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from 'sweetalert2'

const Login = () => {
    const { googleSignin, userLogIn, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    userLogIn(email, password)
    .then(res => {
        setUser(res.user);
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
      navigate(location?.state? location.state : '/')
   
    })
    .catch(error => {
        console.log(error.message);
        
    })
    
}

const handleGoogle = e => {
    e.preventDefault();
    googleSignin()
    .then(res => {
        setUser(res.user)
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed in via google successfully"
          });
        navigate(location?.state? location.state : '/')
       
        console.log(res.user);
        
    })
    .catch(error => {
        console.log(error.message);
        
    })
}
    

    return (
        <div className="md:w-8/12 mx-auto">
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    <h1 className="text-center">or</h1>
                    <button onClick={handleGoogle} className="btn btn-primary">Continue With Google</button>
                    <p>Don't have any account? <Link className="underline text-lime-400" to='/signup'>SIgnUp</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;


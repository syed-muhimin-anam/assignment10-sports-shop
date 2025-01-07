
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from 'sweetalert2'
import { Fade } from "react-awesome-reveal";

const Login = () => {
  const { googleSignin, userLogIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
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
        navigate(location?.state ? location.state : '/')

      })
      .catch(error => {
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
          icon: "error",
          title: error.message
        });

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
        navigate(location?.state ? location.state : '/')



      })
      .catch(error => {
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
          icon: "error",
          title: error.message
        });

      })
  }


  return (
    <div className="md:w-8/12 mx-auto pt-28">
      <h1 className="text-4xl font-bold text-center text-[#578a29]">Login</h1>
      <Fade>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Email</span>
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
            <button className="btn bg-[#87c451]">Login</button>
            <h1 className="text-center">or</h1>
            <button onClick={handleGoogle} className="btn bg-[#87c451]">Continue With Google</button>
            <p>Don't have any account? <Link className="underline text-[#578a29]" to='/signup'>Register</Link></p>
          </div>
        </form>
      </Fade>
    </div>
  );
};

export default Login;


import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'



const Signup = () => {
    const {createUser, setUser, updateUserProfile, user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleCreateUser = event => {
        event.preventDefault(); 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
   
              


      if (passwordRegex.test(password)) {
        createUser(email, password)
        .then((res) => {
            const newUser = res.user;
            return updateUserProfile({ displayName: name, photoURL: photo })
                .then(() => {
                    setUser({ ...newUser, displayName: name, photoURL: photo });
                    event.target.reset();
                    navigate(location?.state? location.state : '/')
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
                        title: "Successfully Registered Your account"
                      });
                });
                
        })
        .catch((err) => {
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
                title: err.message
              });
          
        });
      }
      else{
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: 'your password is too weak. please include one uppercase , one lowercase, and 6 char long.'
          });
      }
       

    
        

         
        
    }
    return (
        <div className="md:w-8/12 mx-auto">
             <form onSubmit={handleCreateUser} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                   
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Signup</button>
                    <p>Already have an account? <Link className="underline text-lime-400" to='/login'>Login</Link></p>
                </div>
            </form>
            
        </div>
    );
};

export default Signup;
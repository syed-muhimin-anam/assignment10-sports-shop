import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link } from "react-router-dom";


const Signup = () => {
    const {createUser, setUser, updateUserProfile, user} = useContext(AuthContext);
    const handleCreateUser = event => {
        event.preventDefault(); 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;
      
       
        createUser(email, password)
        .then((res) => {
            const newUser = res.user;
            return updateUserProfile({ displayName: name, photoURL: photo })
                .then(() => {
                    setUser({ ...newUser, displayName: name, photoURL: photo });
                    event.target.reset();
                    console.log("User created and updated:", newUser);
                });
        })
        .catch((err) => {
            console.error("Signup error:", err.message);
        });
    
        

        
        
    }
    return (
        <div>
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
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const AddEquipment = () => {
    const { user } = useContext(AuthContext);
    const handleAddEquipment = event => {
        event.preventDefault();
        const photo = event.target.photo.value;
        const item = event.target.item.value;
        const category = event.target.category.value;
        const description = event.target.description.value;
        const rating = event.target.rating.value;
        const price = event.target.price.value;
        const customization = event.target.customization.value;
        const time = event.target.time.value;
        const stock = event.target.stock.value;
        const userName = event.target.userName.value;
        const userEmail = event.target.userEmail.value;
        const equipmentData = {
            photo,
            item,
            category,
            description,
            rating,
            price,
            customization,
            time,
            stock,
            userName,
            userEmail
        }
       fetch('http://localhost:5000/equipments', {
        method: 'POST',
        headers: {
             'content-type': 'application/json'
        },
        body: JSON.stringify(equipmentData)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        
       })
    }
    return (
        <div>
            <h1>Add Equipment</h1>
            <form className="card-body" onSubmit={handleAddEquipment}>
                {/* photo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                </div>
                {/* item name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Item name</span>
                    </label>
                    <input type="text" placeholder="photo url" name="item" className="input input-bordered" required />
                </div>
                {/* Categoryname */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category Name</span>
                    </label>
                    <input type="text" placeholder="photo url" name="category" className="input input-bordered" required />
                </div>
                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="photo url" name="description" className="input input-bordered" required />
                </div>
                {/* Price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="photo url" name="price" className="input input-bordered" required />
                </div>
                {/* Rating */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="photo url" name="rating" className="input input-bordered" required />
                </div>
                {/* Customization  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Customization </span>
                    </label>
                    <input type="text" placeholder="photo url" name="customization" className="input input-bordered" required />
                </div>
                {/* Processing Time */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Processing Time</span>
                    </label>
                    <input type="text" placeholder="photo url" name="time" className="input input-bordered" required />
                </div>
                {/* Stock Status */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock Status</span>
                    </label>
                    <input type="text" placeholder="photo url" name="stock" className="input input-bordered" required />
                </div>



                {/* photo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name="userName" className="input input-bordered" readOnly />
                </div>
                {/* photo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name="userEmail" className="input input-bordered" readOnly />

                </div>


                {/* add equipment */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Equipment</button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipment;
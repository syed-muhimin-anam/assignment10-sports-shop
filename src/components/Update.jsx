import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const { user } = useContext(AuthContext);
    const loadedEquipment = useLoaderData();
    const handleUpdateEquipment = event => {
        event.preventDefault();
        const photo = event.target.photo.value === '' ? loadedEquipment.photo: event.target.photo.value;
        const item = event.target.item.value === '' ? loadedEquipment.item: event.target.item.value;
        const category = event.target.category.value  === '' ? loadedEquipment.category: event.target.category.value;
        const description = event.target.description.value  === '' ? loadedEquipment.description: event.target.description.value;
        const rating = event.target.rating.value === '' ? loadedEquipment.rating: event.target.rating.value;
        const price = event.target.price.value === '' ? loadedEquipment.price: event.target.price.value;
        const customization = event.target.customization.value === '' ? loadedEquipment.customization: event.target.customization.value;
        const time = event.target.time.value === '' ? loadedEquipment.time: event.target.time.value;
        const stock = event.target.stock.value === '' ? loadedEquipment.stock: event.target.stock.value;
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
        console.log(equipmentData)
    
       fetch(`http://localhost:5000/equipments/${loadedEquipment._id}`, {
        method: 'PATCH',
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
            <div>
            <h1>{loadedEquipment.item}</h1>
            <h1>{loadedEquipment.category}</h1>
            <h1>{loadedEquipment.price}</h1>
            <h1>{loadedEquipment.rating}</h1>
            <h1>{loadedEquipment.time}</h1>
            <h1>{loadedEquipment.description}</h1>
        </div>
            <h1>Update Equipment</h1>
            <form className="card-body" onSubmit={handleUpdateEquipment}>
                {/* photo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder={loadedEquipment.photo} name="photo" className="input input-bordered"  />
                </div>
                {/* item name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Item name</span>
                    </label>
                    <input type="text" placeholder={loadedEquipment.item} name="item" className="input input-bordered"  />
                </div>
                {/* Categoryname */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category Name</span>
                    </label>
                    <input type="text" placeholder={loadedEquipment.category} name="category" className="input input-bordered"  />
                </div>
                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder={loadedEquipment.description} name="description" className="input input-bordered"  />
                </div>
                {/* Price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder={loadedEquipment.price} name="price" className="input input-bordered"  />
                </div>
                {/* Rating */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder={loadedEquipment.rating} name="rating" className="input input-bordered"  />
                </div>
                {/* Customization  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Customization </span>
                    </label>
                    <input type="text" placeholder={loadedEquipment.customization} name="customization" className="input input-bordered"  />
                </div>
                {/* Processing Time */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Processing Time</span>
                    </label>
                    <input type="text" placeholder={loadedEquipment.time} name="time" className="input input-bordered"  />
                </div>
                {/* Stock Status */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock Status</span>
                    </label>
                    <input type="text" placeholder={loadedEquipment.stock} name="stock" className="input input-bordered"  />
                </div>



                {/* user email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name="userEmail" className="input input-bordered" readOnly />
                </div>
                {/* user name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name="userName" className="input input-bordered" readOnly />

                </div>


                {/* add equipment */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Equipment</button>
                </div>
            </form>
        </div>
    );
};

export default Update;
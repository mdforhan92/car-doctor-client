import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const BookService = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleToBook = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        //!send data( data collect kore booking server e patabo)
        
        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Added Successfully',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        })

    }
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Book Service : <span className="text-orange-600 font-bold">{title}</span></h2>
            
            <div className="card-body">

               <form onSubmit={handleToBook}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" placeholder="Date" name="date" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Ammount</span>
                    </label>
                    <input type="text" name="" defaultValue={'$' + price} className="input input-bordered" />
                </div>
                
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-warning btn-block text-white bg-yellow-600" type="submit" value="Order Confirm" />
                </div>
               </form>
            </div>
            </div>
    );
};

export default BookService;
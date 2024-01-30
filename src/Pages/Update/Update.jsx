import { useLoaderData } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import TopTitle from '../Shared/TopTitle/TopTitle';
import Swal from 'sweetalert2'
import {  useState } from 'react';


const Update = () => {
    const coffee = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState('');
   

    
    const { name, chef, price, quantity, photoUrl, supplier,  _id, category } = coffee;
    console.log(coffee);
    const handleUpdateCoffee = (e) => {

        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const photoUrl = form.photoUrl.value;
        const supplier = form.supplier.value;
        

        const coffeeInfo = { name, chef, price, quantity, photoUrl, supplier, category: selectedCategory };
        console.log(coffeeInfo);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-1-pi.vercel.app/coffees/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(coffeeInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // After successful update, scroll to the top of the page
                        window.location.reload();
                    })
                Swal.fire({
                    title: "Updated!",
                    text: "Your file has been Updated.",
                    icon: "success"
                });
            }
        });



    }
    return (
        <>
            <div className=" addCoffee w-full mb-24 ">
                <TopTitle></TopTitle>
                <Header></Header>

                <form className="bg-[#F4F3F0] w-4/5 mx-auto pt-6 p-6 " onSubmit={handleUpdateCoffee}>
                    <div className="text-center">
                        <h1 className=" text-3xl font-bold  font-rancho  text-[#374151]">Update Editing Coffee Details</h1>
                        <p className="text-sm">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <div className="md:flex  flex-wrap font-bold">
                        <div className="md:basis-2/4 pl-2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Coffee Name</span>

                                </div>
                                <input type="text" defaultValue={name} placeholder="Coffee Name" name='name' className="input input-bordered w-full " />

                            </label>
                        </div>
                        <div className="md:basis-2/4 pl-2 ">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Price</span>

                                </div>
                                <input type="text" defaultValue={price} name='price' placeholder="Enter Coffee chef" className="input input-bordered w-full" />

                            </label>
                        </div>
                        <div className="md:basis-2/4 pl-2 ">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Chef</span>

                                </div>
                                <input type="text" defaultValue={chef} name='chef' placeholder="Enter Coffee chef" className="input input-bordered w-full" />

                            </label>
                        </div>
                        <div className="md:basis-2/4 pl-2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Available Quantity</span>

                                </div>
                                <input type="text" defaultValue={quantity} name='quantity' placeholder="Enter Available Quantity" className="input input-bordered w-full " />

                            </label>
                        </div>

                        <div className="md:basis-2/4 pl-2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Supplier</span>

                                </div>
                                <input type="text" defaultValue={supplier} name='supplier' placeholder="Enter Coffee Supplier" className="input input-bordered w-full " />

                            </label>
                        </div>
                        <div className="md:basis-2/4 pl-2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Category</span>

                                </div>
                                {/* <input type="text" defaultValue={category} name='category' placeholder="Enter Coffee Category" className="input input-bordered w-full " /> */}

                                <select name='category' className="select select-bordered w-full " defaultValue={category}  onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option disabled selected>Which type?</option>
                                    <option>Turkey</option>
                                    <option>Local</option>
                                    <option>Foreign</option>
                                    <option>Sylhety</option>
                                </select>
                            </label>
                        </div>
                        <div className="w-full pl-2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Photo</span>

                                </div>
                                <input type="text" defaultValue={photoUrl} name='photoUrl' placeholder="Enter Photo Url" className="input input-bordered w-full " />

                            </label>
                        </div>
                        <button className="btn font-rancho bg-[#D2B48C] grow my-4 w-full text-2xl" >Update Coffee Details</button>

                    </div>
                </form>


            </div>
            <Footer></Footer>
        </>
    );
};

export default Update;
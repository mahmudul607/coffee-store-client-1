import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import TopTitle from '../Shared/TopTitle/TopTitle';
import './AddCoffee.css';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = (e) => {

        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const photoUrl = form.photoUrl.value;
        const supplier = form.supplier.value;
        const category = form.category.value;

        const coffeeInfo = {name, chef, price, quantity, photoUrl, supplier, category};
        console.log(coffeeInfo);

        fetch('https://coffee-store-server-1-two.vercel.app/coffees',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(coffeeInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })

            }
        })

    }
    return (
        <>
        <div className=" addCoffee w-full mb-24 ">
            <TopTitle></TopTitle>
            <Header></Header>

            <form className="bg-[#F4F3F0] w-4/5 mx-auto pt-6 p-6" onSubmit={handleAddCoffee}>
            <div className="text-center">
                <h1 className=" text-3xl font-bold  font-rancho  text-[#374151]">Add New Coffee</h1>
                <p className="text-sm">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
               <div className="md:flex  flex-wrap font-bold">
               <div className="md:basis-2/4 pl-2">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Coffee Name</span>
                          
                        </div>
                        <input type="text" placeholder="Coffee Name" name='name' className="input input-bordered w-full " />
                        
                    </label>
                </div>
                <div  className="md:basis-2/4 pl-2 ">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price</span>
                          
                        </div>
                        <input type="text" name='price' placeholder="Enter Coffee chef" className="input input-bordered w-full" />
                        
                    </label>
                </div>
                <div  className="md:basis-2/4 pl-2 ">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Chef</span>
                          
                        </div>
                        <input type="text" name='chef' placeholder="Enter Coffee chef" className="input input-bordered w-full" />
                        
                    </label>
                </div>
                <div  className="md:basis-2/4 pl-2">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                          
                        </div>
                        <input type="text" name='quantity' placeholder="Enter Available Quantity" className="input input-bordered w-full " />
                        
                    </label>
                </div>
                
                <div  className="md:basis-2/4 pl-2">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                          
                        </div>
                        <input type="text" name='supplier' placeholder="Enter Coffee Supplier" className="input input-bordered w-full " />
                        
                    </label>
                </div>
                <div  className="md:basis-2/4 pl-2">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category</span>
                          
                        </div>
                        <input type="text" name='category' placeholder="Enter Coffee Category" className="input input-bordered w-full " />
                        
                    </label>
                </div>
                <div  className="w-full pl-2">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Photo</span>
                          
                        </div>
                        <input type="text" name='photoUrl' placeholder="Enter Photo Url" className="input input-bordered w-full " />
                        
                    </label>
                </div>
                <button className="btn font-rancho bg-[#D2B48C] grow my-4 w-full text-2xl" >Add Coffee</button>
                
               </div>
            </form>

            
        </div>
        <Footer></Footer>
        </>
    );
};

export default AddCoffee;
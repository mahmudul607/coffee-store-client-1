import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import TopTitle from '../Shared/TopTitle/TopTitle';

const Update = () => {
    return (
        <div className=''>
        <div className=" addCoffee w-full mb-24 ">
            <TopTitle></TopTitle>
            <Header></Header>

            <form className="bg-[#F4F3F0] w-4/5 mx-auto pt-6 p-6 ">
            <div className="text-center">
                <h1 className=" text-3xl font-bold  font-rancho  text-[#374151]">Update Editing Coffee Details</h1>
                <p className="text-sm">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
               <div className="flex  flex-wrap font-bold">
               <div className="basis-2/4 pl-2">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Coffee Name</span>
                          
                        </div>
                        <input type="text" placeholder="Coffee Name" className="input input-bordered w-full " />
                        
                    </label>
                </div>
                <div  className="basis-2/4 pl-2 ">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Chef</span>
                          
                        </div>
                        <input type="text" placeholder="Enter Coffee chef" className="input input-bordered w-full" />
                        
                    </label>
                </div>
                <div  className="basis-2/4 pl-2">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                          
                        </div>
                        <input type="text" placeholder="Enter Available Quantity" className="input input-bordered w-full " />
                        
                    </label>
                </div>
                <div  className="basis-2/4 pl-2">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Photo</span>
                          
                        </div>
                        <input type="text" placeholder="Enter Photo Url" className="input input-bordered w-full " />
                        
                    </label>
                </div>
                <div  className="basis-2/4 pl-2">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                          
                        </div>
                        <input type="text" placeholder="Enter Coffee Supplier" className="input input-bordered w-full " />
                        
                    </label>
                </div>
                <div  className="basis-2/4 pl-2">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category</span>
                          
                        </div>
                        <input type="text" placeholder="Enter Coffee Category" className="input input-bordered w-full " />
                        
                    </label>
                </div>
                <button className="btn font-rancho bg-[#D2B48C] grow my-4 w-full text-2xl" >Update Coffee Details</button>
                
               </div>
            </form>

            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Update;
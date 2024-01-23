
import Banner from "../Banner/Banner";
import TopTitle from "../Shared/TopTitle/TopTitle";
import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'
import { RiCupLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import Coffees from "../Shared/Coffees/Coffees";
import cup1 from '../../assets/images/cups/Rectangle 9.png'
import cup2 from '../../assets/images/cups/Rectangle 10.png'
import cup3 from '../../assets/images/cups/Rectangle 11.png'
import cup4 from '../../assets/images/cups/Rectangle 12.png'
import cup5 from '../../assets/images/cups/Rectangle 13.png'
import cup6 from '../../assets/images/cups/Rectangle 14.png'
import cup7 from '../../assets/images/cups/Rectangle 15.png'
import cup8 from '../../assets/images/cups/Rectangle 16.png'
import './Home.css'
import Footer from "../Shared/Footer/Footer";


const Home = () => {
    const coffees = useLoaderData();

    // const data =[
    //    'name' , 'address'
    // ]
    return (
        <div>
            <TopTitle></TopTitle>
            <Banner></Banner>
            {/* Our Commitment Section */}
            <div className="our_commitment text-black bg-[#ECEAE3]">
                <div className="w-4/5 mx-auto">
                    <ul className="flex gap-4  p-16 ">
                        <li>
                            <img src={icon1} alt="" />
                            <span className="title font-rancho text-2xl pb-2">Awesome Aroma</span>
                            <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                        </li>
                        <li>
                            <img src={icon2} alt="" />
                            <span className="title font-rancho text-2xl pb-2">High Quality</span>
                            <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                        </li>
                        <li>
                            <img src={icon3} alt="" />
                            <span className="title font-rancho text-2xl pb-2">Pure Grades</span>
                            <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                        </li>
                        <li>
                            <img src={icon4} alt="" />
                            <span className="title font-rancho text-2xl pb-2">Proper Roasting</span>
                            <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                        </li>
                       
                    </ul>
                </div>


            </div>

            {/* Our Popular Products */}
            <div className="popular_products ">
                <div className="title_area text-center p-16">
                    <p>---Sip & Savor ---</p>
                    <h1 className="text-3xl font-rancho text-[#111010]">Our Popular Products</h1>
                    <Link to={'/addcoffee'}><button className="btn btn-outline text-black bg-[#E3B577]">Add Coffee <span><RiCupLine/></span></button></Link>
                </div>
                <div className="w-4/5 mx-auto grid grid-cols-2 gap-4 ">
                    {
                        coffees.map(coffee => <Coffees coffee={coffee} key={coffee._id}></Coffees>)
                    }
                </div>
            </div>

            {/* Follow Us in Instagram */}

            <div className="instagram_section  gap-2 text-center pt-36 ">
                <h4 className="font-rancho">Follow Us Now</h4>
                <h1 className="text-4xl font-rancho text-[#080808] pb-8">Follow on Instagram</h1>

                <div className="grid grid-cols-4 w-4/5 mx-auto">
                    <img src={cup1} alt="" />
                    <img src={cup2} alt="" />
                    <img src={cup3} alt="" />
                    <img src={cup4} alt="" />
                    <img src={cup5} alt="" />
                    <img src={cup6} alt="" />
                    <img src={cup7} alt="" />
                    <img src={cup8} alt="" />
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;
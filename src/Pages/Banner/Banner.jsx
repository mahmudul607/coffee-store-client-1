import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="home_banner text-white h-[70vh]">
            <div className=' lg:absolute md:w-2/6 w-10/12 md:right-36 lg:top-44 md:top-20 ms:left-2  '>
               
                <h2 className='font-rancho text-2xl '>Would you like a Cup of Delicious Coffee?</h2>
                <p className='text-sm'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <Link to={'/uu'} className='btn text-black bg-[#eed3b0] mt-6' >Lear more</Link>
                
            </div>
        </div>
    );
};

export default Banner;
import './Banner.css'

const Banner = () => {
    return (
        <div className="home_banner">
            <div className=' absolute md:w-2/6 w-9/12 md:right-36 top-44 ms:left-2  '>
               
                <h2 className='font-rancho text-2xl '>Would you like a Cup of Delicious Coffee?</h2>
                <p className='text-sm'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn text-black bg-[#eed3b0] mt-6' >Lear more</button>
                
            </div>
        </div>
    );
};

export default Banner;
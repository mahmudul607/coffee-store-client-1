import logo from '../../../assets/images/more/logo1.png';
import './TopTitle.css'
const TopTitle = () => {
    return (
        <div className="topTitle text-white  ">
           <div className='w-1/2  m-auto text-center flex align-middle justify-center'>
           <img className='h-16 pt-2' src={logo} alt="" />
            <div>
                <h2 className='p-6 font-rancho text-4xl'>
                    Coffee Shop
                </h2>
            </div>
           </div>
        </div>
    );
};

export default TopTitle;
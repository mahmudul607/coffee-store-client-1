
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import quickPath from '../../../assets/quickpath.png';


const Sbanner = ({title, path}) => {

    return (
        <div className="relative home_banner text-white h-[150px]">
            
        <div className='flex w-full items-center h-full justify-center '>
           
        <div className=" ">
                    <h1 className="text-4xl font-bold">{title}</h1>

                </div>
          
        </div>
        <div className='w-full absolute  flex bottom-0 justify-center'>
        <img className='h-16'  src={quickPath} alt="" />
        <ul className='flex absolute top-1/2 text-black'>
            <li><Link className=' font-bold' to={'/'}>Home / </Link></li>
            <li className='ml-2'> { path}</li>
          </ul>
        </div>
          
       
        
    </div>
    );
};

Sbanner.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    
};

export default Sbanner;
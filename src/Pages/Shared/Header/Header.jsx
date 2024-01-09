import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex h-16 align-middle py-2 font-rancho"> 
          
                <Link to={'/'} className="flex  gap-2 w-4/5 mx-auto "><FaArrowLeft className="mt-1"/>Back to Home</Link>
            
        </div>
    );
};

export default Header;
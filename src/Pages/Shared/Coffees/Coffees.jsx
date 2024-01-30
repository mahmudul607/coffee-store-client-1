import { FaRegEye, FaPencil } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, } from "react-router-dom";

import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";






const Coffees = ({coffee, handleDelete}) => {
    const {user} = useContext(AuthContext);

    console.log(user)

  

    
 
    const {name, price, chef, photoUrl, _id} = coffee;
    


    
   
    return (
        <div className="card card-side bg-[#F5F4F1] w-full">
            <figure className="w-3/6"><img  src={photoUrl} alt="photo" /></figure>
            <div className=" flex p-6 w-full">
                <div className="w-full">
                <p><span className="font-bold">Name: </span>{name}</p>
                <p><span className="font-bold">Chef: </span>{chef}</p>
                <p><span className="font-bold">Price: </span>{price}</p>
                </div>
                <div className="card-actions grid w-1/4  justify-end">
                    <Link to={`/view/${_id}`} ><span className="btn grid w-12 text-2xl bg-[#D2B48C] text-white"><FaRegEye className=""/></span></Link>
                    <Link to={`update/${_id}`} ><button className="btn grid w-12 text-2xl bg-[#3C393B] text-white"><FaPencil /></button></Link>
                    <button onClick={()=>handleDelete(coffee._id)} className="btn grid w-12 text-2xl bg-[#EA4744] text-white"><MdOutlineDeleteOutline/></button>
                </div>
            </div>
        </div>
    );
};

Coffees.propTypes = {
    
    coffee: PropTypes.object,
    handleDelete:PropTypes.func.isRequired,
}

export default Coffees;
import { FaRegEye, FaPencil } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Coffees = () => {
    return (
        <div className="card card-side bg-[#F5F4F1] w-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
            <div className=" flex p-6 w-full">
                <div className="w-full">
                <p><span className="font-bold">Name: </span>madjfeio</p>
                <p><span className="font-bold">Chef: </span>ffdajheiorf</p>
                <p><span className="font-bold">Price: </span>01797692607</p>
                </div>
                <div className="card-actions grid w-1/4  justify-end">
                    <Link to={'/view'}><button className="btn grid w-12 text-2xl bg-[#D2B48C] text-white"><FaRegEye className=""/></button></Link>
                    <Link to={'/update'}><button className="btn grid w-12 text-2xl bg-[#3C393B] text-white"><FaPencil /></button></Link>
                    <Link to={'/delete'}><button className="btn grid w-12 text-2xl bg-[#EA4744] text-white"><MdOutlineDeleteOutline/></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Coffees;
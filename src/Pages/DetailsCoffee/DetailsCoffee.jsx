import { useLoaderData } from "react-router-dom";
import TopTitle from "../Shared/TopTitle/TopTitle";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";


const DetailsCoffee = () => {
    const coffee = useLoaderData();
    const { name, price, category, chef, supplier, photoUrl, quantity } = coffee;
    return (
        <>
        <TopTitle></TopTitle>
        <Header></Header>

            <div className="card card-side bg-[#F5F4F1] w-4/5 mx-auto p-6">
                <figure className="w-3/6"><img src={photoUrl} alt="photo" /></figure>
                <div className=" flex p-6 w-full">
                    <div className="w-full">
                        <p><span className="font-bold">Name: </span>{name}</p>
                        <p><span className="font-bold">Chef: </span>{chef}</p>
                        <p><span className="font-bold">Price: </span>{price}</p>
                        <p><span className="font-bold">Quantity: </span>{quantity}</p>
                        <p><span className="font-bold">Supplier: </span>{supplier}</p>
                        <p><span className="font-bold">Category: </span>{category}</p>

                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione praesentium, pariatur assumenda architecto explicabo vero similique, deserunt vitae eos provident neque qui, minima quam animi quidem at dolorum incidunt. Cupiditate.
                    </p>

                </div>
            </div>

            <Footer></Footer>

        </>

    );
};

export default DetailsCoffee;
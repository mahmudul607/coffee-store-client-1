import { useRouteError } from "react-router-dom";
import errorimg from "../../assets/images/404/404.gif";
import TopTitle from "../Shared/TopTitle/TopTitle";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <TopTitle></TopTitle>
            <Header></Header>
            <div className=" flex text-center justify-center w-full">

            <img src={errorimg} alt="" />
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default ErrorPage;
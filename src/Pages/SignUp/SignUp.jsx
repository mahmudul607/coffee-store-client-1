import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Sbanner from "../Shared/Sbanner/Sbanner";
import Footer from "../Shared/Footer/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import {  updateProfile } from "firebase/auth";


const SignUp = () => {
    const { createUser, sendVerificationEmail, handleLogout } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState(null)
    const navigate = useNavigate();

    const handleSignUp = (e) => {


        e.preventDefault();

        const form = e.target;
        const name = e.target.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const checker = e.target.checker.checked;
        // const userInfo = {email, password}

        setRegisterError(null);
        if (!checker) {
            setRegisterError("Please see our terms and conditions");
            return;


        }
        if (password.length < 6) {
            setRegisterError("Password length must be at least 6 characters")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError("At least one password character must be Uppercase");
            return;
        }
        // console.log(userInfo);

        createUser(email, password, name)
            .then((result) => {
                console.log(result.user)

                updateProfile(result.user, {
                    displayName: name, photoURL: "https://i.ibb.co/ygth6MP/1mh.png"
                })
                    .then(() => {
                        console.log('profile updated')
                    })


                sendVerificationEmail(result.user)
                    .then(() => {
                        // Email verification sent!
                        // ...
                        Swal.fire({
                            title: "Verification Email sent successfully",

                            showClass: {
                                popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                                popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                        });
                    });

                    
                axios.post('http://localhost:5000/signup', result.user)
                    .then(res => {
                        console.log(res.data);
                        setRegisterError('user created successfully')
                        handleLogout();
                        navigate('/login');

                    })

            })
            .catch(err => {
                console.error(err.message);
            })


    }
    if(registerError){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: registerError,
            // footer: '<a href="#">Why do I have this issue?</a>'
            });

    }
       

    return (
        <>

            <Sbanner
                title={'Sign Up For Better Experience'}
                path={'signup'}
            ></Sbanner>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-3/6 flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                       
                    </div>
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="flex">
                                <input className="mr-2" type="checkBox" name="check" id="checker" />
                                <label htmlFor="checker" className=""> Agree With Our <a href="#">Terms and Conditions</a></label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                                <Link to={'/login'} className="pt-4">Already have an Account? <span className="font-bold">Login</span></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SignUp;
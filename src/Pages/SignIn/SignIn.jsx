

import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import Footer from '../Shared/Footer/Footer';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Swal from 'sweetalert2';
import TopTitle from '../Shared/TopTitle/TopTitle';
import Header from '../Shared/Header/Header';




const SignIn = () => {
    const { loginUser, loginGoogle, handleLogout } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(null)


    // Login Functionality
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setLoginError(null);
        loginUser(email, password)
            .then(result => {
                if (result.user.emailVerified) {
                    
                    
                            navigate(location?.state ? location.state : '/')
                     
                    setLoginError('success')
                }
                else {
                    setLoginError('Check your email and verify your Account')
                    handleLogout();
                }
              

            })
            
            .catch(err => {
                setLoginError(err.message);
            })
    }

    const handleLoginWithGoogle = () => {
        loginGoogle()
            .then(result => {
                if (result.user.emailVerified) {
                    setLoginError('success')
                }
                else {
                    setLoginError('Check your email and verify your Account')
                }
                setLoginError('success');

                axios.post('http://localhost:5000/jwt')
                    .then(res => {
                        if (res.data.success) {
                            navigate(location?.state ? location.state : '/')
                        }
                    })
            })
            .catch(err => {
                setLoginError(err.message);
            })
    }

    if (loginError == 'success') {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your are logged in successfully",
            showConfirmButton: false,
            timer: 1500
        });

    }
    else if(loginError) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: loginError,
            // footer: '<a href="#">Why do I have this issue?</a>'
        });

    }

    return (
        <>
            {/* <Sbanner
                title={' Login here to get our special Facilities'}
                path={'Login'}
            ></Sbanner> */}
            <TopTitle></TopTitle>
            <Header></Header>

            <div className="hero min-h-screen ">
                <div className="hero-content w-3/6 flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">LogIn now!</h1>

                    </div>
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <Link to={'/signup'} className="pt-4">If you New in here? please <span className="font-bold">SignUp</span></Link>
                            </div>
                        </form>
                        <div >
                            <ul className='flex text-center justify-center w-full gap-6 pb-6'>
                                <button onClick={handleLoginWithGoogle} ><FcGoogle className='h-14 w-14 rounded text-4xl border border-[#FF3811]'></FcGoogle></button>
                                <button><FaFacebookSquare className='h-14 w-14 rounded text-4xl border border-[#FF3811]'></FaFacebookSquare></button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>

    );
};

export default SignIn;
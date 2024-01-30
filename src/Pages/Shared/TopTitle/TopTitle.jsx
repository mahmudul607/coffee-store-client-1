import { useContext, useState } from 'react';
import logo from '../../../assets/images/more/logo1.png';
import './TopTitle.css'
import { AuthContext } from '../../../AuthProvider/AuthProvider';

import { Link} from 'react-router-dom';
import Swal from 'sweetalert2';


const TopTitle = () => {
    const { user, handleLogout} = useContext(AuthContext);
    const [loginError, setLoginError] = useState(null)
    
    console.log(user)

    // 
    // const {loginUser} = useContext(AuthContext)

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         loginUser(email, password)
//             .then(res => {
//                 if (res.user.emailVerified) {
//                     setLoginError('success')
//                 }
//                 else {
//                     setLoginError('Check your email and verify your Account')
//                 }
//                 setLoginError('success');
//                 axios.post('https://coffee-store-server-1-pi.vercel.app/jwt', { withCredentials: true })
//                     .then(res => {
//                         console.log(res.data.success)
//                         if (res.data.success) {
//                             navigate(location?.state ? location.state : '/')
//                         }
//                     })
//             })
//             .catch(err => {
//                 setLoginError(err.message);
//             })
//     }
// const handleLoginWithGoogle=() => {

//     loginGoogle()
//     .then(result=>{
//         if (result.user.emailVerified) {
//             setLoginError('success')
//         }
//         else {
//             setLoginError('Check your email and verify your Account')
//         }
//         setLoginError('success');

//         axios.post('https://coffee-store-server-1-pi.vercel.app/jwt')
//             .then(res => {
//                 if (res.data.success) {
//                     navigate(location?.state ? location.state : '/')
//                 }
//             })
//     })
//     .catch(err => {
//         setLoginError(err.message);
//     })

// }

// logged Out

const handleUserLogout = () => {
    handleLogout()
    .then(() => {
        setLoginError('Logged out successfully');
    })
}

if (loginError) {
    Swal.fire({
        position: "center",
        icon: "success",
        title: loginError,
        showConfirmButton: false,
        timer: 1500
    });

}


    return (
        <div className="topTitle text-white  ">
            <div className='w-full  m-auto text-center flex align-middle justify-center'>
                <div className='lg:w-5/6 w-1/2 flex lg:justify-center justify-start'>
                    <img className=' h-20 pt-2 ' src={logo} alt="" />
                    <div className=''>
                        <h2 className=' font-rancho text-4xl  pt-4'>
                            Coffee Shop
                        </h2>
                    </div>
                </div>
                <div className='flex justify-end pt-4'>
                    {
                        user ?

                            <div className="dropdown dropdown-end ">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-left text-black bg-base-100 rounded-box w-52">

                                    <li className='font-bold'> {user.displayName} </li>
                                    <li> {user.email} </li>
                                    <li>Settings</li>
                                    <li className='' onClick={handleUserLogout}><a>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <>
                            <Link className='btn btn-outline border border-[#FF3811] text-white font-bold ' to={'/login'}>Login</Link>
                                {/* < button className="btn" onClick={signInModal}>Login</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black">
                                    <div className="modal-box max-h-full">
                                      
                                        <div className="hero ">
                                            <div className="hero-content  flex-col ">
                                                <div className="text-center ">
                                                    <h1 className="text-5xl font-bold pb-2">LogIn now!</h1>

                                                </div>
                                               
                                                <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                                                <div >
                                                        <ul className='flex text-center justify-center w-full gap-6'>
                                                            <button onClick={handleLoginWithGoogle} ><FcGoogle className='h-14 w-14 rounded text-4xl border border-[#FF3811]'></FcGoogle></button>
                                                            <button><FaFacebookSquare className='h-14 w-14 rounded text-4xl border border-[#FF3811]'></FaFacebookSquare></button>
                                                        </ul>
                                                    </div>
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
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        

                                    </div>



                                </dialog> */}
                            </>

                    }
                </div>
            </div>
        </div >
    );
};

export default TopTitle;
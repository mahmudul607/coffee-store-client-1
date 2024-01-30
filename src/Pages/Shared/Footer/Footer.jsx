import logo1 from '../../../assets/images/more/logo1.png'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './Footer.css'
import axios from 'axios';
import Swal from 'sweetalert2';
const Footer = () => {


    const handleCustomerMessage =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
      
        const messageInfo = {
            name,
            email,
            message
        }
        axios.post('https://coffee-store-server-1-pi.vercel.app/messages', messageInfo)
        .then(result=>{
            console.log(result.data)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Message Send",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        })
        .catch(err=>{
            console.log(err.message)
        })


    }
    return (
        <footer className="footer p-10 bg-neutral   text-[#331A15]">
            <div className="md:w-4/5 mx-auto md:flex ms:text-center">
                <aside className='md:w-1/2 w-full'>
                    <img className='h-16' src={logo1} alt="" />

                    <p><span className='text-3xl font-rancho'>Coffee Shop.</span><br />Providing reliable tech since 1992</p>

                    <nav>
                        <header className="footer-title">Social</header>
                        <div className="flex  gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a>
                                <FaInstagram className='h-7 w-7' />
                            </a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </nav>
                    <div className='pt-6'>
                        <h4 className='font-rancho text-2xl'>Get in Touch</h4>
                        <ul className='footerUl'>
                            <li>
                                <FaPhoneAlt />
                                <span>01797692607</span>
                            </li>
                            <li>
                                <MdEmail />
                                <span>mahmudul.cse.eng@gmail.com</span>
                            </li>
                            <li>
                                <FaLocationDot />
                                <span>Uttara Model Town, sector-13</span>
                            </li>
                        </ul>
                    </div>
                </aside>
                <aside className='md:w-1/2 w-full mb-2'>
                    <div className="hero  ">
                        <div className="w-full">
                            <div className="card  w-full   bg-base-100 p-4">
                                <h2 className='text-2xl font-rancho text-black'>Connect With Us</h2>
                                <form className="card-body w-full" onSubmit={handleCustomerMessage}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" className="input input-bordered w-full" name='name' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                                      
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Message</span>
                                        </label>
                                        <textarea className="textarea textarea-ghost" placeholder="Message" name='message'></textarea>
                                      
                                    </div>
                                    <div className=" mt-6">
                                        <button className="btn  btn-outline">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </aside>

            </div>
            <div className='copyright w-4/5 mx-auto h-8 text-center text-white'>
                <p className='w-1/2 mx-auto pt-2 font-rancho'>Copyright MS-Tech & Coffee Shop ! All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {


        e.preventDefault();

        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const userInfo = {email, password}

        // console.log(userInfo);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err.message);
            })


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-3/6 flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>

                </div>
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp}>
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                            <Link className="pt-4">Already have an Account? <span className="font-bold">Login</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
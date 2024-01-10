import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SignIn = () => {
    const {loginUser} = useContext(AuthContext)

    const handleLogin = (e) => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;

            loginUser(email, password)
            .then(result =>{
                alert('user loggedIn successfully')
                console.log(result)
            })
            .catch(err =>{
                alert(err.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
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
                            <Link className="pt-4">If you New in here? please <span className="font-bold">SignUp</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
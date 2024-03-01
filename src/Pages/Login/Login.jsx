import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";



const Login = () => {
  const { signin,user,googleLogin } = useContext(AuthContext)
  const [loginErr, setLoginErr] = useState('')
  const [loginSuccess,setLoginSuccess] = useState('')
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
  
    signin(email, password)
      .then(res => {
        console.log(res.user)
        if (user) {
          setLoginSuccess(' login succsessfully')
        }
        else {
          alert('please login')
        }
      })
      .catch(err => {
        console.log(err)
        setLoginErr(err.message)
    })
  }
   const handleGoogleLogin = () => {
     googleLogin()
       .then((res) => {
         console.log(res);
       })
       .catch((err) => {
         console.log(err);
       });
   };
  
    return (
      <div className="mx-auto">
        <h1 className="text-center text-blue-300 text-2xl font-bold m-8">
         Sign-In
        </h1>
        <form
          onSubmit={handleLoginSubmit}
          className="card-body  md:w-[450px] mx-auto bg-sky-200 shadow-2xl rounded-xl"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-4">
            <button className="btn bg-yellow-500 text-xl text-white">
              Login
            </button>
          </div>
          <h1>
            Dont have an account ! please register before{" "}
            <Link to={"/register"} className="text-indigo-400 font-bold">
              {" "}
              Sign Up
            </Link>
          </h1>
          <h1 className=" text-center"> Or</h1>
          <div className="form-control ">
            <button className="btn bg-yellow-500 text-xl text-white">
              Login With Facebook
            </button>
          </div>
          <div className="form-control ">
            <button
              onClick={handleGoogleLogin}
              className="btn bg-yellow-500 text-xl text-white"
            >
              Login With Google
            </button>
          </div>
        </form>
        {loginErr && <p>{loginErr}</p>}
        {loginSuccess && <p> {loginSuccess}</p>}
      </div>
    );
};

export default Login;
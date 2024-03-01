import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;
    console.log(email,password,confirm_password)

    // Validation
    if (password.length < 6) {
      toast.error('Password must be at least six characters');
      return;
    }
    if (password !== confirm_password) {
      toast.error('Passwords do not match');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('your password should have at least one upper case character')
      return
    }

    
      // Create a new user
    createUser(email, password)
    .then(res => {
      console.log(res.user)
        toast.success('Registration successful');

    })
    
      .catch(error => {
       console.error("Registration error:", error.message);
       toast.error(error.message);
     })
   
     


    
  };

  return (
    <div className="mx-6">
      <h1 className="text-center text-blue-300 text-2xl font-bold m-8">
        Sign-Up
      </h1>

      <form
        onSubmit={handleRegisterSubmit}
        className="card-body md:w-[450px] mx-auto bg-sky-200 shadow-2xl rounded-xl "
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
          <span
            className="flex justify-end -mt-8 mr-4 text-2xl"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
          </span>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirm_password"
            placeholder="Confirm Password"
            className="input input-bordered"
            required
          />
          <span
            className="flex justify-end -mt-8 mr-4 text-2xl"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
          </span>
        </div>
        <div className="form-control mt-3">
         
            
            <button
              className="btn bg-yellow-500 text-xl text-white"
              type="submit"
            >
              Signup
            </button>
          
        </div>
        <h1 className="text-center">
          Already have an account?{" "}
          <Link className="text-indigo-400 font-bold" to={"/login"}>
            Login
          </Link>
        </h1>

        <h1 className="text-center">Or</h1>
        <div className="form-control ">
          <button className="btn bg-yellow-500 text-xl text-white">
            Login With Facebook
          </button>
        </div>
        <div className="form-control mt-3">
          <button className="btn bg-yellow-500 text-xl text-white">
            Login With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

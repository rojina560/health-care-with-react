import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";



const Navbar = () => {
  const { logOut, user } = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
    .then()
      .catch(err => {
      console.log(err)
    })
  }
    const navlinks = (
      <nav className="space-x-4 ">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-pink-600 underline " : ""
          }
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          to={"/addservices"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-pink-600 underline " : ""
          }
        >
          Services
        </NavLink>
        <NavLink
          to={"/doctors"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-pink-600 underline " : ""
          }
        >
          Doctors
        </NavLink>
      </nav>
    );
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navlinks}
              </ul>
            </div>

            <a className="btn btn-ghost text-xl">Health-Care</a>
          </div>
          <div className="navbar-center hidden lg:flex  ">
            <ul
              className="menu menu-horizontal px-4  text-xl
            font-semibold "
            >
              {navlinks}
            </ul>
          </div>

          <div className=" navbar end flex justify-end gap-2 ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            {user ? (
              <Link onClick={handleLogout} className="btn">
                Sign Out
              </Link>
            ) : (
              <Link to={"/login"} className="btn">
                Sign In
              </Link>
            )}
          
          </div>
        </div>
      </div>
    );
};

export default Navbar;
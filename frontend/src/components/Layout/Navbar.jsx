// import React, { useContext, useState } from "react";
// import { Context } from "../../main";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthorized, setIsAuthorized, user } = useContext(Context);
//   const navigateTo = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:4000/api/v1/user/logout",
//         {
//           withCredentials: true,
//         }
//       );
//       toast.success(response.data.message);
//       setIsAuthorized(false);
//       navigateTo("/login");
//     } catch (error) {
//       toast.error(error.response.data.message), setIsAuthorized(true);
//     }
//   };

//   return (
//     <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
//       <div className="container">
//         <div className="logo">
//           <img src="/careerconnect-white.png" alt="logo" />
//         </div>
//         <ul className={!show ? "menu" : "show-menu menu"}>
//           <li>
//             <Link to={"/"} onClick={() => setShow(false)}>
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link to={"/job/getall"} onClick={() => setShow(false)}>
//               ALL JOBS
//             </Link>
//           </li>
//           <li>
//             <Link to={"/applications/me"} onClick={() => setShow(false)}>
//               {user && user.role === "Employer"
//                 ? "APPLICANT'S APPLICATIONS"
//                 : "MY APPLICATIONS"}
//             </Link>
//           </li>
//           {user && user.role === "Employer" ? (
//             <>
//               <li>
//                 <Link to={"/job/post"} onClick={() => setShow(false)}>
//                   POST NEW JOB
//                 </Link>
//               </li>
//               <li>
//                 <Link to={"/job/me"} onClick={() => setShow(false)}>
//                   VIEW YOUR JOBS
//                 </Link>
//               </li>
//             </>
//           ) : null}

//           <button onClick={handleLogout}>LOGOUT</button>
//         </ul>
//         <div className="hamburger" onClick={() => setShow(!show)}>
//           {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

 const handleLogout = async () => {
  try {
    const response = await axios.get(
      "https://careerconnect-stm.onrender.com/api/v1/user/logout",
      { withCredentials: true }
    );
    toast.success(response.data.message);
    setIsAuthorized(false);
    navigateTo("/login");
  } catch (error) {
    toast.error(error.response?.data?.message || "Logout failed");
    setIsAuthorized(true);
  }
};


  return (
    <>
      <style>
        {`
          .navbar {
            background-color: #111;
            color: white;
            padding: 12px 20px;
            position: relative;
          }

          .navbar.hidden {
            display: none;
          }

          .navbar-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .navbar-logo {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .navbar-logo img {
            height: 40px;
          }

          .navbar-logo span {
            font-size: 18px;
            font-weight: bold;
            color: #fff;
          }

          .navbar-menu {
            display: flex;
            list-style: none;
            gap: 20px;
            align-items: center;
          }

          .navbar-menu li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
          }

          .navbar-menu li a:hover {
            color: #00dfc4;
          }

          .navbar-menu li button {
            background-color: #00dfc4;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
          }

          .navbar-menu li button:hover {
            background-color: #00b3a6;
          }

          .navbar-toggle {
            display: none;
            color: white;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .navbar-menu {
              position: absolute;
              top: 60px;
              left: 0;
              right: 0;
              flex-direction: column;
              background-color: #222;
              padding: 20px;
              gap: 15px;
              display: none;
            }

            .navbar-menu.active {
              display: flex;
            }

            .navbar-toggle {
              display: block;
            }
          }
        `}
      </style>

      <nav className={`navbar ${isAuthorized ? "" : "hidden"}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src="/careerconnect-white.png" alt="logo" />
            <span>CareerConnect</span>
          </div>

          <ul className={`navbar-menu ${show ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setShow(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/job/getall" onClick={() => setShow(false)}>
                All Jobs
              </Link>
            </li>
            <li>
              <Link to="/applications/me" onClick={() => setShow(false)}>
                {user?.role === "Employer"
                  ? "Applicant's Applications"
                  : "My Applications"}
              </Link>
            </li>
            {user?.role === "Employer" && (
              <>
                <li>
                  <Link to="/job/post" onClick={() => setShow(false)}>
                    Post New Job
                  </Link>
                </li>
                <li>
                  <Link to="/job/me" onClick={() => setShow(false)}>
                    Your Jobs
                  </Link>
                </li>
              </>
            )}
            <li>
              <button
                onClick={() => {
                  setShow(false);
                  handleLogout();
                }}
              >
                Logout
              </button>
            </li>
          </ul>

          <div className="navbar-toggle" onClick={() => setShow(!show)}>
            {show ? (
              <AiOutlineClose size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Header() {
  const nav = useNavigate();
  const sidebar = useRef();
  const location = useLocation();
  const currentPathname = location.pathname;
  const showSidebar = () => {
    sidebar.current.classList.add("show-sidebar");
  };
  const hideSidebar = () => {
    sidebar.current.classList.remove("show-sidebar");
  };
  var isLogin = sessionStorage.getItem("isLogin");

  const logout = () => {
    sessionStorage.clear();
    nav("/login");
    setTimeout(() => {
      toast.success("Logout Successful");
    }, 500);
  };
  useEffect(() => {
    hideSidebar();
  }, [currentPathname]);
  return (
    <>
      <ToastContainer />
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Header desktop --> */}
        <div className="wrap-menu-header gradient1 trans-0-4">
          <div className="container-md-fluid mt-4 px-md-5">
            {/* <div className="container h-full"> */}
            <div className="wrap_header mx-auto mx-md-0 trans-0-3">
              {/* <!-- Logo --> */}
              <div className="logo">
                <Link to="/">
                  <h2 className="text-light">
                    Grab <span className="text-danger">Your</span> Meal
                  </h2>
                </Link>
              </div>

              {/* <!-- Menu --> */}
              <div className="wrap_menu p-l-45 p-l-0-xl">
                <nav className="menu">
                  <ul className="main_menu">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "text-danger " : ""
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "text-danger " : ""
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/view-meals"
                        className={({ isActive }) =>
                          isActive ? "text-danger " : ""
                        }
                      >
                        Meals
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/view-pricing-details"
                        className={({ isActive }) =>
                          isActive ? "text-danger " : ""
                        }
                      >
                        Pricing Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/custom-bookings "
                        className={({ isActive }) =>
                          isActive ? "text-danger " : ""
                        }
                      >
                        Custom Bookings
                      </NavLink>
                    </li>
                    {/* <li>
                      <Link to="/register">Register</Link>
                    </li> */}
                    <li>
                      {isLogin ? (
                        <>
                          <div className="dropdown menu">
                            <NavLink
                              className={({ isActive }) =>
                                isActive
                                  ? "text-danger dropdown-toggle text-light"
                                  : "dropdown-toggle text-light"
                              }
                              // className=" dropdown-toggle text-light"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              User Section
                            </NavLink>
                            <ul className="dropdown-menu">
                              <li>
                                <NavLink
                                  // className="dropdown-item"
                                  className={({ isActive }) =>
                                    isActive
                                      ? "text-danger dropdown-item"
                                      : "dropdown-item"
                                  }
                                  to={"/profile"}
                                >
                                  Profile
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  // className="dropdown-item"
                                  to={"/viewbookings"}
                                  className={({ isActive }) =>
                                    isActive
                                      ? "text-danger dropdown-item"
                                      : "dropdown-item"
                                  }
                                >
                                  View Bookings
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  // className="dropdown-item"
                                  to={"/viewcustombookings"}
                                  className={({ isActive }) =>
                                    isActive
                                      ? "text-danger dropdown-item"
                                      : "dropdown-item"
                                  }
                                >
                                  View Custom Bookings
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <NavLink
                          to="/register"
                          className={({ isActive }) =>
                            isActive ? "text-danger" : ""
                          }
                        >
                          Register
                        </NavLink>
                      )}
                    </li>

                    <li>
                      {isLogin ? (
                        <>
                          <a href="#" onClick={logout}>
                            LOGOUT
                          </a>
                        </>
                      ) : (
                        <NavLink to="/login">Login</NavLink>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
              <button
                className="btn-show-sidebar m-l-33 trans-0-4 d-block d-lg-none"
                onClick={() => {
                  showSidebar();
                }}
              ></button>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Sidebar --> */}
      <aside className="sidebar trans-0-4" ref={sidebar}>
        {/* <!-- Button Hide sidebar --> */}
        <button
          className="btn-hide-sidebar ti-close color0-hov trans-0-4"
          onClick={() => {
            hideSidebar();
          }}
        ></button>

        {/* <!-- - --> */}
        <ul className="menu-sidebar p-t-95 p-b-70">
          <li className="t-center m-b-13">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-danger txt19" : "txt19"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="t-center m-b-13">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-danger txt19" : "txt19"
              }
            >
              About
            </NavLink>
          </li>
          <li className="t-center m-b-13">
            <NavLink
              to="/view-meals"
              className={({ isActive }) =>
                isActive ? "text-danger txt19" : "txt19"
              }
            >
              Meals
            </NavLink>
          </li>
          <li className="t-center m-b-13">
            <NavLink
              to="/view-pricing-details"
              className={({ isActive }) =>
                isActive ? "text-danger txt19" : "txt19"
              }
            >
              Pricings
            </NavLink>
          </li>
          <li className="t-center m-b-13">
            <NavLink
              to="/custom-bookings"
              className={({ isActive }) =>
                isActive ? "text-danger txt19" : "txt19"
              }
            >
              Custom Bookings
            </NavLink>
          </li>
          <li className="t-center m-b-13">
            {isLogin ? (
              <>
                <div className="dropdown menu">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? " dropdown-toggle txt19"
                        : "dropdown-toggle txt19"
                    }
                    // className=" dropdown-toggle text-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User Section
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        // className="dropdown-item"
                        className={({ isActive }) =>
                          isActive
                            ? "text-danger dropdown-item"
                            : "dropdown-item"
                        }
                        to={"/profile"}
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        // className="dropdown-item"
                        to={"/viewbookings"}
                        className={({ isActive }) =>
                          isActive
                            ? "text-danger dropdown-item"
                            : "dropdown-item"
                        }
                      >
                        View Bookings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        // className="dropdown-item"
                        to={"/viewcustombookings"}
                        className={({ isActive }) =>
                          isActive
                            ? "text-danger dropdown-item"
                            : "dropdown-item"
                        }
                      >
                        View Custom Bookings
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-danger txt19" : "txt19"
                }
              >
                Register
              </NavLink>
            )}
          </li>

          <li className="t-center m-b-13">
            {isLogin ? (
              <>
                <a href="#" className="txt19" onClick={logout}>
                  LOGOUT
                </a>
              </>
            ) : (
              <NavLink to="/login" className="txt19">
                Login
              </NavLink>
            )}
          </li>
        </ul>

        {/* <!-- - --> */}
      </aside>
    </>
  );
}

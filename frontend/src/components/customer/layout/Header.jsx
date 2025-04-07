import { useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Header() {
  const nav = useNavigate();
  const sidebar = useRef();
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
  return (
    <>
      <ToastContainer />
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Header desktop --> */}
        <div className="wrap-menu-header gradient1 trans-0-4">
          <div className="container-fluid mt-4 px-5">
            {/* <div className="container h-full"> */}
            <div className="wrap_header trans-0-3">
              {/* <!-- Logo --> */}
              <div className="logo">
                <a href="#">
                  <h1 className="text-light">
                    Grab <span className="text-danger">Your</span> Meal
                  </h1>
                </a>
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
                    {/* <li>
                      <Link to="/login">Login</Link>
                    </li> */}
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

              {/* <!-- Social --> */}
              {/* <div className="social flex-w flex-l-m p-r-20">
                <a href="#">
                  <i className="fa fa-tripadvisor" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook m-l-21" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter m-l-21" aria-hidden="true"></i>
                </a>

                <button
                  className="btn-show-sidebar m-l-33 trans-0-4"
                  onClick={() => {
                    showSidebar();
                  }}
                ></button>
              </div> */}
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
            <a href="index.html" className="txt19">
              Home
            </a>
          </li>

          <li className="t-center m-b-13">
            <a href="menu.html" className="txt19">
              Menu
            </a>
          </li>

          <li className="t-center m-b-13">
            <a href="gallery.html" className="txt19">
              Gallery
            </a>
          </li>

          <li className="t-center m-b-13">
            <a href="about.html" className="txt19">
              About
            </a>
          </li>

          <li className="t-center m-b-13">
            <a href="blog.html" className="txt19">
              Blog
            </a>
          </li>

          <li className="t-center m-b-33">
            <a href="contact.html" className="txt19">
              Contact
            </a>
          </li>

          <li className="t-center">
            {/* <!-- Button3 --> */}
            <a
              href="reservation.html"
              className="btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto"
            >
              Reservation
            </a>
          </li>
        </ul>

        {/* <!-- - --> */}
        <div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">
          {/* <!-- - --> */}
          <h4 className="txt20 m-b-33">Gallery</h4>

          {/* <!-- Gallery --> */}
          <div className="wrap-gallery-sidebar flex-w">
            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="assets/images/photo-gallery-01.jpg"
              data-lightbox="gallery-footer"
            >
              <img
                src="assets/images/photo-gallery-thumb-01.jpg"
                alt="GALLERY"
              />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="assets/images/photo-gallery-02.jpg"
              data-lightbox="gallery-footer"
            >
              <img
                src="assets/images/photo-gallery-thumb-02.jpg"
                alt="GALLERY"
              />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="assets/images/photo-gallery-03.jpg"
              data-lightbox="gallery-footer"
            >
              <img
                src="assets/images/photo-gallery-thumb-03.jpg"
                alt="GALLERY"
              />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="assets/images/photo-gallery-05.jpg"
              data-lightbox="gallery-footer"
            >
              <img
                src="assets/images/photo-gallery-thumb-05.jpg"
                alt="GALLERY"
              />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="assets/images/photo-gallery-06.jpg"
              data-lightbox="gallery-footer"
            >
              <img
                src="assets/images/photo-gallery-thumb-06.jpg"
                alt="GALLERY"
              />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="assets/images/photo-gallery-07.jpg"
              data-lightbox="gallery-footer"
            >
              <img
                src="assets/images/photo-gallery-thumb-07.jpg"
                alt="GALLERY"
              />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="assets/images/photo-gallery-09.jpg"
              data-lightbox="gallery-footer"
            >
              <img
                src="assets/images/photo-gallery-thumb-09.jpg"
                alt="GALLERY"
              />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="assets/images/photo-gallery-10.jpg"
              data-lightbox="gallery-footer"
            >
              <img
                src="assets/images/photo-gallery-thumb-10.jpg"
                alt="GALLERY"
              />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="assets/images/photo-gallery-11.jpg"
              data-lightbox="gallery-footer"
            >
              <img
                src="assets/images/photo-gallery-thumb-11.jpg"
                alt="GALLERY"
              />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

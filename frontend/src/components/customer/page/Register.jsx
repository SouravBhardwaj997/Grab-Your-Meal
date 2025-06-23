import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ClockLoader } from "react-spinners";
import axios from "axios";
export default function Register() {
  <ToastContainer />;

  const nav = useNavigate();
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [contact, setContact] = useState("");
  var [password, setPassword] = useState("");
  var [address, setaddress] = useState("");
  var [loading, setloading] = useState(false);

  var spinnerObj = {
    margin: "50px auto",
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const userData = await axios.post(
        "/api/user/register",
        {
          name,
          email,
          contact,
          password,
          address,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success("Account Created Successfully");
      setTimeout(() => {
        nav("/login");
      }, 1000);
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setloading(false);
    }
  };

  return (
    <>
      <section
        className="bg-title-page flex-column p-t-250 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(assets/images/bg-title-page-02.jpg)" }}
      >
        <h2 className="tit6 t-center">Register</h2>
        <nav>
          <ol className="main_menu d-flex justify-content-center">
            <li className="breadcrumb-item mx-0">
              <Link to="/" className="px-0 mx-0">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item px-0 mx-0">
              <Link to="/register" className="text-white px-0">
                Register
              </Link>
            </li>
          </ol>
        </nav>
      </section>
      <ClockLoader
        color="red"
        loading={loading}
        cssOverride={spinnerObj}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* <!-- register form --> */}

      <section
        className={`section-contact bg1-pattern p-t-0 p-b-113 ${
          loading && "d-none"
        }`}
      >
        <div>
          <div className="container">
            <h3 className="fs-40 text-danger t-center p-b-12 p-t-75 fs-20">
              Create a new account
            </h3>
            <h3 className="tit7 t-center p-b-62 p-t-35">
              Already have account?
              <Link className="tit7 text-danger" to="/login">
                Login Now.
              </Link>
            </h3>

            <form
              onSubmit={registerSubmit}
              className="wrap-form-reservation size22 m-l-r-auto"
            >
              <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                  {/* <!-- Name --> */}
                  <span className="txt9">Name</span>

                  <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-5">
                  {/* <!-- Email --> */}
                  <span className="txt9">Email</span>

                  <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-5">
                  {/* <!-- Phone --> */}
                  <span className="txt9">Contact</span>

                  <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="number"
                      name="Contact"
                      placeholder="contact"
                      value={contact}
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  {/* <!-- Phone --> */}
                  <span className="txt9">Password</span>

                  <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="password"
                      name="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="col-10">
                  {/* <!-- Message --> */}
                  <span className="txt9">Address</span>
                  <textarea
                    className="bo-rad-10 size35 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-3"
                    name="message"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="wrap-btn-booking flex-c-m m-t-13">
                {/* <!-- Button3 --> */}
                <button
                  type="submit"
                  className="btn3 flex-c-m size36 txt11 trans-0-4"
                >
                  Register
                </button>
              </div>
            </form>

            <div className="row p-t-135">
              <div className="col-sm-8 col-md-4 col-lg-4 m-l-r-auto p-t-30">
                <div className="dis-flex m-l-23">
                  <div className="p-r-40 p-t-6">
                    <img
                      src="assets/images/icons/map-icon.png"
                      alt="IMG-ICON"
                    />
                  </div>

                  <div className="flex-col-l">
                    <span className="txt5 p-b-10">Location</span>

                    <span className="txt23 size38">
                      2nd floor, golden complex, Phagwara, Punjab
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-sm-8 col-md-3 col-lg-4 m-l-r-auto p-t-30">
                <div className="dis-flex m-l-23">
                  <div className="p-r-40 p-t-6">
                    <img
                      src="assets/images/icons/phone-icon.png"
                      alt="IMG-ICON"
                    />
                  </div>

                  <div className="flex-col-l">
                    <span className="txt5 p-b-10">Call Us</span>

                    <span className="txt23 size38">+91-77400-70943 </span>
                  </div>
                </div>
              </div>

              <div className="col-sm-8 col-md-5 col-lg-4 m-l-r-auto p-t-30">
                <div className="dis-flex m-l-23">
                  <div className="p-r-40 p-t-6">
                    <img
                      src="assets/images/icons/clock-icon.png"
                      alt="IMG-ICON"
                    />
                  </div>

                  <div className="flex-col-l">
                    <span className="txt5 p-b-10">Opening Hours</span>

                    <span className="txt23 size38">
                      09:30 AM – 11:00 PM <br />
                      Every Day
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

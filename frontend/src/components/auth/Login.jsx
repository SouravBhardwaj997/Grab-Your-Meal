import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ClockLoader } from "react-spinners";
import axios from "axios";

export default function Login() {
  const nav = useNavigate();
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [loading, setloading] = useState(false);

  var spinnerObj = {
    margin: "50px auto",
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const loginSubmit = async (e) => {
    e.preventDefault();

    setloading(true);
    try {
      const userData = await axios.post(
        "/api/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (userData.data.user.role == "admin") {
        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("user", JSON.stringify(userData.data));
        sessionStorage.setItem("userRole", userData.data.user.role);
        nav("/admin/dashboard");
        setTimeout(() => {
          toast.success("Welcome Admin");
        }, 700);
      } else if (userData.data.user.role == "customer") {
        if (userData.data.user.status) {
          sessionStorage.setItem("isLogin", true);
          sessionStorage.setItem("userId", userData.data.user.id);
          sessionStorage.setItem("user", JSON.stringify(userData.data.user));
          sessionStorage.setItem("userRole", userData.data.user.role);
          nav("/");
          setTimeout(() => {
            toast.success("Welcome " + userData.data.user.name);
          }, 700);
        } else {
          toast.error("In-active account, Contact Admin");
        }
      } else {
        toast.error("Invalid Credentials");
      }
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setloading(false);
    }
  };

  return (
    <>
      {/* title of page */}
      <ToastContainer />
      <section
        className="bg-title-page flex-column p-t-160 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(assets/images/bg-title-page-02.jpg)" }}
      >
        <div className="text-center text-white fs-70">
          <b>GRAB YOUR MEAL</b>
        </div>
        <h2 className="tit6 t-center">login</h2>
        <nav>
          <ol class="main_menu d-flex justify-content-center">
            <li class="breadcrumb-item mx-0">
              <Link to="/" className="px-0 mx-0">
                Home
              </Link>
            </li>
            <li class="breadcrumb-item px-0 mx-0">
              <Link to="/login" className="text-white px-0">
                Login
              </Link>
            </li>
          </ol>
        </nav>
      </section>
      <ClockLoader
        color="#ff0000"
        loading={loading}
        cssOverride={spinnerObj}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <section
        className={`section-contact bg1-pattern p-t-0 p-b-113 ${
          loading && "d-none"
        }`}
      >
        <div>
          <div className="container">
            <h3 className="fs-40 text-danger t-center p-b-12 p-t-75 fs-20">
              Login here to enjoy the food.......
            </h3>
            <h3 className="tit11 t-center p-b-62 p-t-35">
              Don't have account?{" "}
              <Link className="tit11 text-danger fs-25" to="/register">
                Register Now.
              </Link>
            </h3>

            <form
              className="wrap-form-reservation size22 m-l-r-auto"
              onSubmit={loginSubmit}
            >
              <div className="row">
                <div className="col-md-4"></div>

                <div className="col-md-4">
                  <span className="txt9">Email</span>

                  <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      id="email"
                      type="text"
                      name="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4"></div>
              </div>
              <div className="row">
                <div className="col-md-4"></div>

                <div className="col-md-4">
                  <span className="txt9">password</span>

                  <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      id="password"
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
                <div className="col-md-4"></div>
              </div>
              <div className="row">
                <div className="col-md-4"></div>

                <div className="col-md-4">
                  <div className="wrap-btn-booking flex-c-m m-t-13">
                    <button
                      type="submit"
                      className="btn3 flex-c-m size36 txt11 trans-0-4"
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

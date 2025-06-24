import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useEffect, useState } from "react";
import axios from "axios";

import { API_BASE_URL } from "../../../config/api";
export default function Home() {
  var [meals, setmeals] = useState([]);
  useEffect(() => {
    getAllmeals();
  }, []);

  const getAllmeals = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/meals`, {
        withCredentials: true,
      });
      console.log(response);
      setmeals(response.data.meals);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      {/* banners starts */}
      <ToastContainer />
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="assets/images/master-slides-01.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="div1 fixed-top mt-5 py-5">
                <h1 class="pt-5 fs-60 mt-5 welcome-heading">Welcome to</h1>
                <span class=" d-block mb-3 sub-heading">
                  <b>GRAB YOUR MEAL</b>
                </span>
                <Link to="/view-meals">
                  <button
                    class="bg-white text-danger  p-1 fs-21 px-4 py-2 mb-5"
                    style={{ borderRadius: "15px" }}
                  >
                    Look Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/master-slides-02.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="div1 fixed-top mt-5 py-5">
                <h1 class="pt-5 fs-60 mt-5 welcome-heading">Welcome to</h1>
                <span class="d-block mb-3 sub-heading">
                  <b>GRAB YOUR MEAL</b>
                </span>
                <Link to="/view-meals">
                  <button
                    type="submit"
                    class="bg-white text-danger  p-1 fs-21 px-4 py-2 mb-5"
                    style={{ borderRadius: "15px" }}
                  >
                    Look Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/master-slides-03.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="div1 fixed-top mt-5 py-5">
                <h1 class="pt-5 fs-60 mt-5 welcome-heading">Welcome to</h1>
                <span class=" d-block mb-3 sub-heading">
                  <b>GRAB YOUR MEAL</b>
                </span>
                <Link to="/view-meals">
                  <button
                    class="bg-white text-danger  p-1 fs-21 px-4 py-2 mb-5"
                    style={{ borderRadius: "15px" }}
                  >
                    Look Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
      {/* banner end */}

      {/* <!-- Welcome */}
      <section className="section-welcome bg1-pattern p-t-120 p-b-105">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-t-45 p-b-30">
              <div className="wrap-text-welcome t-center">
                <span className="tit2 t-center">Food Service</span>

                <h3 className="tit3 t-center m-b-35 m-t-5">Welcome</h3>

                <p className="t-center m-b-22 size3 m-l-r-auto">
                  Rediscover the joy of eating with GRAB YOUR Meal – where every
                  bite feels like a warm hug from home
                </p>
                {/* 
                <a href="about.html" className="txt4">
                  Our Story
                  <i
                    className="fa fa-long-arrow-right m-l-10"
                    aria-hidden="true"
                  ></i>
                </a> */}
              </div>
            </div>

            <div className="col-md-6 p-b-30">
              <div className="wrap-pic-welcome size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                <img src="assets/images/our-story-01.jpg" alt="IMG-OUR" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-intro">
        <div
          className="header-intro parallax100 t-center p-t-135 p-b-158"
          style={{ backgroundImage: "url(assets/images/bg-intro-01.jpg)" }}
        >
          <span className="tit2 p-l-15 p-r-15">Discover</span>

          <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3">GRAB YOUR MEAL</h3>
        </div>

        <div className="content-intro bg-white p-t-77 p-b-133">
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-t-30">
                {/* <!-- Block1 - */}
                <div className="blo1">
                  <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                    <a href="#">
                      <img src="assets/images/intro-01.jpg" alt="IMG-INTRO" />
                    </a>
                  </div>

                  <div className="wrap-text-blo1 p-t-35">
                    <a href="#">
                      <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                        Home Delivery
                      </h4>
                    </a>

                    <p className="m-b-20">We provide you home delivery</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 p-t-30">
                {/* <!-- Block1  */}
                <div className="blo1">
                  <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                    <a href="#">
                      <img src="assets/images/intro-02.jpg" alt="IMG-INTRO" />
                    </a>
                  </div>

                  <div className="wrap-text-blo1 p-t-35">
                    <a href="#">
                      <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                        Delicious Food
                      </h4>
                    </a>

                    <p className="m-b-20">
                      We provide you best hygenic food here
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 p-t-30">
                {/* <!-- Block1  */}
                <div className="blo1">
                  <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                    <a href="#">
                      <img
                        src="assets/images/avatar-04.jpg"
                        alt="IMG-INTRO"
                        height={215}
                      />
                    </a>
                  </div>

                  <div className="wrap-text-blo1 p-t-35">
                    <a href="#">
                      <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                        Best Chefs
                      </h4>
                    </a>

                    <p className="m-b-20">We provide you our best chefs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our menu */}
      <section className="section-ourmenu bg2-pattern p-t-115 p-b-120">
        <div className="container">
          <div className="title-section-ourmenu t-center m-b-22">
            <span className="tit2 t-center">Discover</span>

            <h3 className="tit5 t-center m-t-2">Our Menu</h3>
          </div>

          <section class="section-mainmenu p-t-110 p-b-70 bg1-pattern">
            <div class="container-fluid">
              <div class="row">
                {meals?.map((el) => (
                  <div
                    class="col-md-10 col-lg-3 p-r-35 p-r-15-lg m-l-r-auto"
                    key={el._id}
                  >
                    <div class="wrap-item-mainmenu ">
                      <h3 class="tit-mainmenu tit10 p-b-25 p-4">{el.type}</h3>

                      <div class="item-mainmenu">
                        <div class="flex-w flex-b  p-2">
                          <span href="#" class="name-item-mainmenu txt21 p-3">
                            Monday: {el.day1}
                          </span>
                          <span href="#" class="name-item-mainmenu txt21 p-3">
                            Tuesday: {el.day2}
                          </span>
                          <span href="#" class="name-item-mainmenu txt21 p-3">
                            Wednesday: {el.day3}
                          </span>
                          <span href="#" class="name-item-mainmenu txt21 p-3">
                            Thursday: {el.day4}
                          </span>
                          <span href="#" class="name-item-mainmenu txt21 p-3">
                            Fridaay: {el.day5}
                          </span>
                          <span href="#" class="name-item-mainmenu txt21 p-3">
                            Saturday: {el.day6}
                          </span>
                          <span href="#" class="name-item-mainmenu txt21 p-3">
                            Sunday: {el.day7}
                          </span>
                        </div>
                        <div class="line-item-mainmenu bg3-pattern"></div>
                        <h6 className="text-center">Price/Day</h6>
                        <div class="price-item-mainmenu txt22 text-center">
                          Rs. {el.pricePerDay}
                        </div>
                        <span class="info-item-mainmenu txt23"></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="bg2-pattern  p-b-110 t-center p-l-15 p-r-15">
        <span className="tit2 t-center">Healthy Food Service</span>

        {/* <h3 className="tit3 t-center m-b-35 m-t-5">Our Story</h3> */}
        <h3 className="tit3 t-center m-b-35 m-t-5">About Us</h3>

        <p className="t-center size32 m-l-r-auto">
          We, GRAB YOUR Meal Tiffin Services, situated at Phagwara, Punjab,
          offer pre-planned meal packages that a customer can customize to their
          liking. It is our endeavor to make sure that you enjoy homely cooked
          food at very affordable rates and hassle-free packages. We offer a
          wide array of meal options in vegetarian and non-vegetarian sections.
          Each option is not just finger-licking good but highly nutritious and
          prepared under very hygienic conditions
        </p>
      </section>
      {/* <!-- Delicious & Romantic */}
      <section className="bg1-pattern p-t-120 p-b-105">
        <div className="container">
          {/* <!-- Delicious  */}
          <div className="row">
            <div className="col-md-6 p-t-45 p-b-30">
              <div className="wrap-text-delicious t-center">
                <span className="tit2 t-center">Delicious</span>

                <h3 className="tit3 t-center m-b-35 m-t-5">RECIPES</h3>

                <p className="t-justify m-b-22 size3 m-l-r-auto">
                  Whether you're enjoying a quiet lunch at your desk or sharing
                  a feast with loved ones, our goal is to bring a smile to your
                  face with every bite.
                </p>
              </div>
            </div>

            <div className="col-md-6 p-b-30">
              <div className="wrap-pic-delicious size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                <img src="assets/images/our-story-01.jpg" alt="IMG-OUR" />
              </div>
            </div>
          </div>

          {/* <!-- Romantic  */}
          <div className="row p-t-170">
            <div className="col-md-6 p-b-30">
              <div className="wrap-pic-romantic size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                <img src="assets/images/our-story-02.jpg" alt="IMG-OUR" />
              </div>
            </div>

            <div className="col-md-6 p-t-45 p-b-30">
              <div className="wrap-text-romantic t-center">
                <span className="tit2 t-center">Delivered with </span>

                <h3 className="tit3 t-center m-b-35 m-t-5">Love</h3>

                <p className="t-center m-b-22 size3 m-l-r-auto">
                  We understand that life can get busy, but that doesn’t mean
                  you should compromise on quality meals. With every tiffin, we
                  promise a culinary experience that not only satisfies your
                  hunger but also comforts your soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

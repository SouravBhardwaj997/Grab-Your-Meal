import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import axios from "axios";

export default function ViewPricingDetails() {
  const params = useParams();
  const id = params.id;
  var nav = useNavigate();
  var [loading, setloading] = useState(true);

  var [pricings, setpricings] = useState([]);
  var spinnerObj = {
    margin: "50px auto",
  };

  useEffect(() => {
    getAllpricings();
  }, []);
  const getAllpricings = async () => {
    try {
      const response = await axios.get("/api/admin/pricing", {
        withCredentials: true,
      });
      console.log(response);
      setpricings(response.data.pricings);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  return (
    <>
      {/* banner starts */}
      <section
        class="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15 "
        style={{
          backgroundImage: "url('/assets/images/bg-title-page-02.jpg')",
        }}
      >
        <h2 class="tit6 t-center">View Pricing Details</h2>
      </section>
      {/* banner end */}
      <ClockLoader
        color="red"
        loading={loading}
        cssOverride={spinnerObj}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      {/* <!-- Chef --> */}
      <div className={loading && "d-none"}>
        <section class="section-chef bgwhite p-t-115 p-b-95">
          <div class="container t-center">
            <span class="tit2 t-center">See Our</span>

            <h3 class="tit5 t-center m-b-50 m-t-5">Pricing Plans</h3>
            <div class="row">
              {pricings.map((el, index) => (
                <div class="col-md-8 col-lg-4 m-l-r-auto p-b-30">
                  <div class="blo5 pos-relative p-t-60">
                    <div class="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                      <a href="#">
                        <div className="fs-75  bg-white">
                          <b>{index + 1}</b>
                        </div>
                      </a>
                    </div>

                    <div class="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                      <a href="#" class="txt34 dis-block p-b-6">
                        {el.name}
                      </a>

                      <span class="txt34 dis-block t-center txt35 p-b-25">
                        Rs. {el.price}
                      </span>

                      <p class="t-center">{el.description}</p>
                      <div class="wrap-btn-booking flex-c-m m-t-20">
                        <Link
                          to={
                            sessionStorage.getItem("isLogin")
                              ? "/add-bookings/" + el._id
                              : "/login"
                          }
                          onClick={() => {
                            if (!sessionStorage.getItem("isLogin")) {
                              setTimeout(() => {
                                toast.success("Please Login First for Booking");
                              }, 500);
                            }
                          }}
                        >
                          <button
                            type="submit"
                            class="btn3 flex-c-m size13 txt11 trans-0-4"
                          >
                            Add Booking
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

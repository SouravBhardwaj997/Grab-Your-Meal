import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import { toast } from "react-toastify";
import axios from "axios";
import {
  initiatePayment,
  verifyPayment,
} from "../../../services/payment.service";

export default function CustomBookings() {
  const nav = useNavigate();
  const [breakfasts, setbreakfasts] = useState("");
  const [lunchs, setlunchs] = useState("");
  const [dinners, setdinners] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [loading, setloading] = useState(false);
  const [days, setDays] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [breakfastPrice, setBreakfastPrice] = useState();
  const [lunchPrice, setLunchPrice] = useState();
  const [dinnerPrice, setDinnerPrice] = useState();
  const [meals, setmeals] = useState([]);

  var spinnerObj = {
    margin: "50px auto",
  };

  const authenticate = sessionStorage.getItem("isLogin");
  useEffect(() => {
    if (!authenticate) {
      nav("/login");
      setTimeout(() => {
        toast.error("Please Login First!!");
      }, 500);
    }
  }, [authenticate, nav]);

  useEffect(() => {
    getAllmeals();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [breakfasts, lunchs, dinners, days, startdate]);

  useEffect(() => {
    if (days && startdate) {
      calculateEndDate();
    }
  }, [days, startdate]);

  const calculateEndDate = () => {
    const startDateObj = new Date(startdate);
    startDateObj.setDate(startDateObj.getDate() + parseInt(days) - 1);
    const calculatedEndDate = startDateObj.toISOString().split("T")[0];
    setenddate(calculatedEndDate);
  };
  const getAllmeals = async () => {
    try {
      const response = await axios.get("/api/admin/meals", {
        params: {
          type: "Bmreakfast",
        },
        withCredentials: true,
      });
      setBreakfastPrice(response.data.meals[0].pricePerDay);
      const response2 = await axios.get("/api/admin/meals", {
        params: {
          type: "Lunch",
        },
        withCredentials: true,
      });
      setLunchPrice(response2.data.meals[0].pricePerDay);
      const response3 = await axios.get("/api/admin/meals", {
        params: {
          type: "Dinner",
        },
        withCredentials: true,
      });
      setDinnerPrice(response3.data.meals[0].pricePerDay);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const calculateTotalPrice = async () => {
    let total = 0;
    console.log(total);
    if (breakfasts) {
      total += breakfasts * breakfastPrice;
    }

    if (lunchs) {
      total += lunchs * lunchPrice;
    }

    if (dinners) {
      total += dinners * dinnerPrice;
    }

    if (days) {
      total *= days;
    }

    setTotalPrice(total);
  };

  const handlePayment = async (orderData, bookingData) => {
    const options = {
      key: orderData.key,
      amount: orderData.amount,
      currency: orderData.currency,
      order_id: orderData.id,
      name: "Dial-a-Meal",
      description: "Custom Food Booking Payment",
      handler: async function (response) {
        try {
          const verificationResponse = await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verificationResponse.success) {
            const bookingResponse = await axios.post(
              "/api/custom-booking",
              {
                ...bookingData,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
              },
              {
                withCredentials: true,
              }
            );

            if (bookingResponse.data.success) {
              toast.success("Booking created successfully!");
              nav("/viewbookings");
            } else {
              toast.error("Failed to create booking");
            }
          } else {
            toast.error("Payment verification failed");
          }
        } catch (err) {
          console.error(err);
          toast.error("Payment verification failed");
        } finally {
          setloading(false);
        }
      },
      modal: {
        ondismiss: function () {
          setloading(false);
          toast.info("Payment cancelled");
        },
      },
      prefill: {
        name: sessionStorage.getItem("userName"),
        email: sessionStorage.getItem("userEmail"),
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setloading(true);
    await calculateTotalPrice();

    try {
      const bookingData = {
        breakfastCount: breakfasts,
        lunchCount: lunchs,
        dinnerCount: dinners,
        dayCount: days,
        startDate: startdate,
        endDate: enddate,
        finalPrice: totalPrice,
      };

      // Initiate payment first
      const orderId = `ORDER_${Date.now()}`;
      const paymentData = await initiatePayment(totalPrice, orderId);

      // Open Razorpay payment form with booking data
      handlePayment(paymentData, bookingData);
    } catch (err) {
      setloading(false);
      toast.error("Something Went Wrong");
      console.log("Error in payment initiation", err);
    }
  };

  return (
    <>
      {/* banner starts */}
      <section
        class="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(assets/images/bg-title-page-02.jpg)" }}
      >
        <h2 class="tit6 t-center">Add Customize Bookings</h2>
      </section>

      {/* banner ends */}
      <ClockLoader
        color="red"
        loading={loading}
        cssOverride={spinnerObj}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      {/* <!-- Reservation --> */}
      <section class="section-reservation bg1-pattern p-t-70 p-b-113">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 p-b-30">
              <div class="t-center">
                <span class="tit2 t-center">Subscribe Now</span>

                <h3 class="tit3 t-center m-b-35 m-t-35">
                  Add Customize Bookings
                </h3>
              </div>
              <div></div>
              <div className="d-flex justify-content-center">
                {meals?.map((el) => (
                  <>
                    <h6 style={{ marginLeft: "5px" }}>
                      {el?.type}: Rs. {el?.priceperday},
                    </h6>
                  </>
                ))}
              </div>
              <form
                onSubmit={handleForm}
                class="wrap-form-reservation size22 m-l-r-auto"
              >
                <div class="row">
                  <div class="col-md-6">
                    {/* <!-- Date --> */}
                    <span class="txt9">Breakfasts</span>

                    <div class="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        class="bo-rad-10 sizefull txt10 p-l-20"
                        type="number"
                        name="breakfasts"
                        placeholder="breakfasts"
                        value={breakfasts}
                        onChange={(e) => {
                          setbreakfasts(e.target.value);
                        }}
                        required
                        min={1}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    {/* <!-- Date --> */}
                    <span class="txt9">Lunchs</span>

                    <div class="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        class="bo-rad-10 sizefull txt10 p-l-20"
                        type="number"
                        name="lunch"
                        placeholder="lunchs"
                        value={lunchs}
                        onChange={(e) => {
                          setlunchs(e.target.value);
                        }}
                        min={1}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    {/* <!-- Name --> */}
                    <span class="txt9">Dinners</span>

                    <div class="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        class="bo-rad-10 sizefull txt10 p-l-20"
                        type="number"
                        name="dinner"
                        placeholder="dinners"
                        value={dinners}
                        onChange={(e) => {
                          setdinners(e.target.value);
                        }}
                        required
                        min={1}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    {/* <!-- Name --> */}
                    <span class="txt9">Days</span>

                    <div class="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        class="bo-rad-10 sizefull txt10 p-l-20"
                        type="number"
                        name="dinner"
                        placeholder="days"
                        value={days}
                        onChange={(e) => {
                          setDays(e.target.value);
                        }}
                        required
                        min={1}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    {/* <!-- Name --> */}
                    <span class="txt9">Total Price</span>

                    <div class="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        class="bo-rad-10 sizefull txt10 p-l-20"
                        type="number"
                        name="dinner"
                        placeholder="total price"
                        value={totalPrice}
                        onChange={(e) => {
                          setTotalPrice(e.target.value);
                        }}
                        required
                        readOnly
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    {/* <!-- Phone --> */}
                    <span class="txt9">Start from</span>

                    <div class="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        class="bo-rad-10 sizefull txt10 p-l-20"
                        type="date"
                        name="Start from"
                        placeholder="Start from"
                        value={startdate}
                        onChange={(e) => {
                          setstartdate(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-12">
                    {/* <!-- Email --> */}
                    <span class="txt9">End At</span>

                    <div class="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        class="bo-rad-10 sizefull txt10 p-l-20"
                        type="date"
                        name="Endat"
                        placeholder="end"
                        value={enddate}
                        onChange={(e) => {
                          setenddate(e.target.value);
                        }}
                        required
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <div class="wrap-btn-booking flex-c-m m-t-6">
                  {/* <!-- Button3 --> */}
                  <button
                    type="submit"
                    class="btn3 flex-c-m size13 txt11 trans-0-4"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="info-reservation flex-w p-t-80">
            <div class="size23 w-full-md p-t-40 p-r-30 p-r-0-md">
              <h4 class="txt5 m-b-18">Reserve by Phone</h4>

              <p class="size25">
                Donec quis euismod purus. Donec feugiat ligula rhoncus, varius
                nisl sed, tincidunt lectus.
                <span class="txt25">Nulla vulputate</span>, lectus vel volutpat
                efficitur, orci
                <span class="txt25">lacus sodales</span>
                sem, sit amet quam:
                <span class="txt24">(001) 345 6889</span>
              </p>
            </div>

            <div class="size24 w-full-md p-t-40">
              <h4 class="txt5 m-b-18">For Event Booking</h4>

              <p class="size26">
                Donec feugiat ligula rhoncus:
                <span class="txt24">(001) 345 6889</span>, varius nisl sed,
                tinci-dunt lectus sodales sem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {
  initiatePayment,
  verifyPayment,
} from "../../../services/payment.service";
import { API_BASE_URL } from "../../../config/api";

export default function AddBookings() {
  var nav = useNavigate();
  var [startdate, setstartdate] = useState("");
  var [loading, setloading] = useState(false);
  var [pricingDetails, setPricingDetails] = useState(null);
  const params = useParams();
  const id = params.id;
  var spinnerObj = {
    margin: "50px auto",
  };

  useEffect(() => {
    fetchPricingDetails();
  }, [id]);

  const fetchPricingDetails = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/admin/pricing/single-pricing/${id}`,
        {
          withCredentials: true,
        }
      );
      setPricingDetails(response.data.pricing);
    } catch (error) {
      console.error("Error fetching pricing details:", error);
      toast.error("Failed to fetch pricing details");
    }
  };

  const handlePayment = async (orderData, bookingData) => {
    const options = {
      key: orderData.key,
      amount: orderData.amount,
      currency: orderData.currency,
      order_id: orderData.id,
      name: "Dial-a-Meal",
      description: "Meal Plan Subscription",
      handler: async function (response) {
        try {
          const verificationResponse = await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verificationResponse.success) {
            const bookingResponse = await axios.post(
              `${API_BASE_URL}/api/booking/${id}`,
              {
                startDate: bookingData.startDate,
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

    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const selectedDate = new Date(startdate);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        toast.error("Start date cannot be in the past");
        setloading(false);
        return;
      }

      // Initiate payment first
      const orderId = `ORDER_${Date.now()}`;
      const paymentData = await initiatePayment(pricingDetails.price, orderId);

      // Open Razorpay payment form with booking data
      handlePayment(paymentData, { startDate: startdate });
    } catch (error) {
      setloading(false);
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      {/* banner starts */}
      <ToastContainer />
      <section
        className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(/assets/images/bg-title-page-02.jpg)" }}
      >
        <h2 className="tit6 t-center">Add Bookings</h2>
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
      <div className={loading && "d-none"}>
        <section className="section-reservation bg1-pattern p-t-70 p-b-113">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-b-30">
                <div className="t-center">
                  <span className="tit2 t-center">Subscribe Now</span>

                  <h3 className="tit3 t-center m-b-35 m-t-35">Add Bookings</h3>
                </div>

                <form
                  onSubmit={handleForm}
                  className="wrap-form-reservation size22 m-l-r-auto"
                >
                  <div className="row">
                    <div className="col-md-4">{/* <!-- Date --> */}</div>

                    <div className="col-md-4">
                      <span className="txt9">Starting Date</span>

                      <div className="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
                        <input
                          className="bo-rad-10 sizefull txt10 p-l-20"
                          type="date"
                          name="Starting date"
                          placeholder="Starting from which date"
                          value={startdate}
                          onChange={(e) => {
                            setstartdate(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="wrap-btn-booking flex-c-m m-t-6">
                    <button
                      type="submit"
                      className="btn3 flex-c-m size13 txt11 trans-0-4"
                    >
                      Subscribe
                    </button>
                    {/* </Link> */}
                  </div>
                </form>
              </div>
            </div>

            <div className="info-reservation flex-w p-t-80">
              <div className="size23 w-full-md p-t-40 p-r-30 p-r-0-md">
                <h4 className="txt5 m-b-18">Reserve by Phone</h4>

                <p className="size25">
                  Donec quis euismod purus. Donec feugiat ligula rhoncus, varius
                  nisl sed, tincidunt lectus.
                  <span className="txt25">Nulla vulputate</span>, lectus vel
                  volutpat efficitur, orci
                  <span className="txt25">lacus sodales</span>
                  sem, sit amet quam:
                  <span className="txt24">(001) 345 6889</span>
                </p>
              </div>

              <div className="size24 w-full-md p-t-40">
                <h4 className="txt5 m-b-18">For Event Booking</h4>

                <p className="size26">
                  Donec feugiat ligula rhoncus:
                  <span className="txt24">(001) 345 6889</span>, varius nisl
                  sed, tinci-dunt lectus sodales sem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

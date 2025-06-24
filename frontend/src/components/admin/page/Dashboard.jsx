// import { collection, getDocs } from "firebase/firestore";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { db } from "../../../Firebase";

export default function Dashboard() {
  const [bookingCount, setBookingCount] = useState(0);
  const [mealCount, setMealCount] = useState(0);
  const [pricingCount, setPricingCount] = useState(0);
  const [customBookCount, setCustomBookCount] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const mealsResponse = await axios.get("/api/admin/meals", {
          withCredentials: true,
        });
        setMealCount(mealsResponse.data.meals.length);
        const pricingResposne = await axios.get("/api/admin/pricing", {
          withCredentials: true,
        });
        setPricingCount(pricingResposne.data.pricings.length);
        const bookingResponse = await axios.get("/api/booking/all-bookings", {
          withCredentials: true,
        });
        setBookingCount(bookingResponse.data.bookings.length);
        const customeBookingResponse = await axios.get(
          "/api/custom-booking/all-bookings",
          {
            withCredentials: true,
          }
        );
        setCustomBookCount(customeBookingResponse.data.bookings.length);
      } catch (error) {
        console.log("Error");
      }
      // try {
      //   const bookingSnapshot = await getDocs(collection(db, 'Bookings'));
      //   setBookingCount(bookingSnapshot.size);
      //   const mealSnapshot = await getDocs(collection(db, 'Meals'));
      //   setMealCount(mealSnapshot.size);
      //   const pricingSnapshot = await getDocs(collection(db, 'Pricings'));
      //   setPricingCount(pricingSnapshot.size);
      //   const custombookSnapshot = await getDocs(collection(db, 'Custombookings'));
      //   setCustomBookCount(custombookSnapshot.size);
      // } catch (error) {
      //   console.error("Error fetching document counts: ", error);
      // }
    };

    fetchCounts();
  }, []);
  return (
    <>
      <section
        className="bg-title-page flex-column p-t-250 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(/assets/images/bg-title-page-03.jpg)" }}
      >
        <h2 className="tit6 t-center">Dashboard</h2>

        <nav>
          <ol className="main_menu d-flex justify-content-center">
            <li className="breadcrumb-item px-0 mx-0">
              <Link to="/admin/dashboard" className="text-white px-0">
                Dashboard
              </Link>
            </li>
          </ol>
        </nav>
      </section>
      <section className="container-fluid section-welcome bg1-pattern p-t-8 p-b-25">
        <div className="d-flex justify-content-center row">
          <div className="flex-sa-m flex-w w-75 m-t-40 ">
            <div
              className="col-md-5 size11 flex-col-c-m p-5"
              style={{ border: "3px solid red" }}
            >
              <img src="/assets/images/icons/iftar.png" height={100} />
              <span className="dis-block t-center txt7 m-b-2 days">
                {mealCount}
              </span>

              <span className="dis-block t-center txt8">MEALS</span>
            </div>

            <div
              className="col-md-5 size11 flex-col-c-m p-5"
              style={{ border: "3px solid red" }}
            >
              <img src="/assets/images/icons/price-tag.png" height={100} />
              <span className="dis-block t-center txt7 m-b-2 hours">
                {pricingCount}
              </span>

              <span className="dis-block t-center txt8">PRICINGS</span>
            </div>

            <div
              className="col-md-5 size11 flex-col-c-m p-5 mt-5"
              style={{ border: "3px solid red" }}
            >
              <img src="/assets/images/icons/checklist.png" height={100} />
              <span className="dis-block t-center txt7 m-b-2 minutes">
                {bookingCount}
              </span>

              <span className="dis-block t-center txt8">BOOKINGS</span>
            </div>

            <div
              className="col-md-5 size11 flex-col-c-m p-5 mt-5"
              style={{ border: "3px solid red" }}
            >
              <img src="/assets/images/icons/book.png" height={100} />
              <span className="dis-block t-center txt7 m-b-2 seconds">
                {customBookCount}
              </span>

              <span className="dis-block t-center txt8">CUSTOM BOOKINGS</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

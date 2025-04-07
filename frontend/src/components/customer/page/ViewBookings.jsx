import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import { toast } from "react-toastify";
// import moment from "moment";

export default function ViewBookings() {
  const nav = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  var spinnerObj = {
    margin: "50px auto",
  };

  useEffect(() => {
    let authenticate = sessionStorage.getItem("isLogin");

    if (!authenticate) {
      nav("/login");
      setLoading(false);

      setTimeout(() => {
        toast.error("Please Login First");
      }, 500);
    }
    getAllBookings();
  }, []);

  const getAllBookings = async () => {
    try {
      const response = await axios.get("/api/booking");
      console.log(response);
      setBookings(response.data.bookings);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <section
        className="bg-title-page flex-column p-t-250 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(/assets/images/bg-title-page-03.jpg)" }}
      >
        <h2 className="tit6 t-center">View Bookings</h2>
        <nav>
          <ol className="main_menu d-flex justify-content-center">
            <li className="breadcrumb-item mx-0">
              <Link to="/admin/dashboard" className="px-0 mx-0">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item px-0 mx-0">
              <Link to="/admin/manage-bookings" className="text-white px-0">
                View Bookings
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
      <div className={loading && "d-none"}>
        <section className="section-welcome bg1-pattern p-t-40 p-b-20">
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-12 p-5">
                {bookings.length === 0 ? (
                  <h3 className="text-center">
                    Currently you don't have any bookings
                  </h3>
                ) : (
                  <table className="table table-bordered table-secondary">
                    <thead>
                      <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Duration (In Months)</th>
                        <th scope="col">Start</th>
                        <th scope="col">End</th>
                        <th scope="col">Pricing</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((i, index) => (
                        <tr key={index}>
                          <td scope="row">{index + 1}</td>
                          <td>{i?.customer.name}</td>
                          <td>{i?.pricing.duration}</td>
                          <td>{i?.startDate}</td>
                          <td>{i?.endDate}</td>
                          <td>Rs. {i?.pricing.price}</td>
                          <td>{i?.status}</td>
                          <td>{i?.createdAt.split("T")[0]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

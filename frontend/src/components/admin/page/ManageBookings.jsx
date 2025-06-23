import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import moment from "moment";
import { toast } from "react-toastify";
import axios from "axios";
export default function ManageBookings() {
  const nav = useNavigate();
  const getDate = (date) => {
    if (date?.toDate) {
      date = date.toDate();
    }
    let finalDate = moment(date).format("MMM Do YY");
    return finalDate;
  };

  const calculateEndDate = (startDate, duration) => {
    if (startDate?.toDate) {
      startDate = startDate.toDate();
    }

    const endDate = moment(startDate)
      .add(duration, "months")
      .format("MMM Do YY");

    return endDate;
  };

  var [bookings, setbookings] = useState([]);
  var [loading, setloading] = useState(true);
  var spinnerObj = {
    margin: "50px auto",
  };

  useEffect(() => {
    getAllBookings();
  }, [loading]);

  const getAllBookings = async () => {
    try {
      const response = await axios.get("/api/booking/all-bookings");
      setbookings(response.data.bookings);
      setloading(false);
      console.log(response.data);
    } catch (error) {
      setloading(false);
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const approveBooking = async (id) => {
    setloading(true);
    try {
      await axios.put(`/api/booking/${id}`, {
        status: "Approved",
      });
      nav("/admin/approvedbookings");
      setTimeout(() => {
        toast.success("Booking Approved successfully!");
      }, 500);
    } catch (error) {
      console.error("Error approving bookings:", error);
      toast.error("Failed to approve the booking.");
    } finally {
      setloading(false);
    }
  };
  const rejectBooking = async (id) => {
    setloading(true);
    try {
      await axios.put(`/api/booking/${id}`, {
        status: "Rejected",
      });
      nav("/admin/rejectedbookings");
      setTimeout(() => {
        toast.success("Booking Approved successfully!");
      }, 500);
    } catch (error) {
      console.error("Error approving bookings:", error);
      toast.error("Failed to approve the booking.");
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <section
        className="bg-title-page flex-column p-t-250 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(/assets/images/bg-title-page-03.jpg)" }}
      >
        <h2 className="tit6 t-center">Manage Bookings</h2>
        <nav>
          <ol class="main_menu d-flex justify-content-center">
            <li class="breadcrumb-item mx-0">
              <Link to="/admin/dashboard" className="px-0 mx-0">
                Dashboard
              </Link>
            </li>
            <li class="breadcrumb-item px-0 mx-0">
              <Link to="/admin/manage-bookings" className="text-white px-0">
                Manage Bookings
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
            <div className="row justify-content-end">
              <div className="col-md-4 d-flex justify-content-around">
                <Link to={"/admin/approvedbookings"}>
                  <button className="btn btn-success">Approved Bookings</button>
                </Link>
                <Link to={"/admin/rejectedbookings"}>
                  <button className="btn btn-danger">Rejected Bookings</button>
                </Link>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 p-5">
                {bookings.length === 0 ? (
                  <>
                    <h3 className="text-center">No Data Available</h3>
                  </>
                ) : (
                  <>
                    <table class="table table-bordered table-secondary">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Duration(In Months)</th>
                          <th scope="col">Start</th>
                          <th scope="col">End</th>
                          <th scope="col">Pricing</th>
                          <th scope="col">Status</th>
                          <th scope="col">Created At</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings?.map((i, index) => (
                          <tr key={index}>
                            <td scope="row">{index + 1}</td>
                            <td>{i?.customer.name}</td>
                            <td>{i?.pricing.duration}</td>
                            <td>{i?.startDate}</td>
                            <td>{i?.endDate}</td>
                            <td>Rs. {i?.pricing.price}</td>
                            <td>{i?.status}</td>
                            <td>{i?.createdAt.split("T")[0]}</td>
                            <td>
                              <button
                                className="btn btn-success m-r-10"
                                onClick={() => approveBooking(i._id)}
                              >
                                <i class="bi bi-check-square-fill fs-25"></i>
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => rejectBooking(i._id)}
                              >
                                <i class="bi bi-x-square-fill fs-25"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
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

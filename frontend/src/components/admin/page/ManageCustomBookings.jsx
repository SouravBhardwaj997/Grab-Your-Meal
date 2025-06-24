import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { API_BASE_URL } from "../../../config/api";
export default function ManageCustomBookings() {
  var [bookings, setbookings] = useState([]);
  var [loading, setloading] = useState(true);
  const nav = useNavigate();
  const getDate = (date) => {
    if (date?.toDate) {
      date = date.toDate();
    }
    let finalDate = moment(date).format("MMM Do YY");
    return finalDate;
  };

  var spinnerObj = {
    margin: "50px auto",
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  const getAllBookings = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/custom-booking/all-bookings`,
        {
          params: {
            status: "Pending",
          },
        }
      );
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
      await axios.put(
        `${API_BASE_URL}/api/custom-booking/${id}`,
        {
          status: "Approved",
        },
        {
          withCredentials: true,
        }
      );
      nav("/admin/approvedcustombookings");
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
      await axios.put(
        `${API_BASE_URL}/api/custom-booking/${id}`,
        {
          status: "Rejected",
        },
        {
          withCredentials: true,
        }
      );
      nav("/admin/rejectedcustombookings");
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
      <ToastContainer />
      <section
        className="bg-title-page flex-column p-t-250 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(/assets/images/bg-title-page-03.jpg)" }}
      >
        <h2 className="tit6 t-center">Manage Custom bookings</h2>
        <nav>
          <ol class="main_menu d-flex justify-content-center">
            <li class="breadcrumb-item mx-0">
              <Link to="/admin/dashboard" className="px-0 mx-0">
                Dashboard
              </Link>
            </li>
            <li class="breadcrumb-item px-0 mx-0">
              <Link
                to="/admin//Manage-Custom-Bookings"
                className="text-white px-0"
              >
                Manage Custom Bookings
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
            <div className="row justify-content-end mb-5">
              <div className="col-md-6 d-flex justify-content-around">
                <Link to={"/admin/approvedcustombookings"}>
                  <button className="btn btn-success">Approved Bookings</button>
                </Link>
                <Link to={"/admin/rejectedcustombookings"}>
                  <button className="btn btn-danger">Rejected Bookings</button>
                </Link>
                <Link to={"/admin/completedcustombookings"}>
                  <button className="btn btn-primary">
                    Completed Bookings
                  </button>
                </Link>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12  p-5">
                {bookings.length === 0 ? (
                  <>
                    <h3 className="text-center">No Data Available</h3>
                  </>
                ) : (
                  <>
                    <table class="table table-bordered table-secondary">
                      <thead>
                        <tr>
                          <th scope="col">Sr No.</th>
                          <th scope="col">CustomerName</th>
                          <th scope="col">Breakfast</th>
                          <th scope="col">Lunch</th>
                          <th scope="col">Dinner</th>
                          <th scope="col">Days</th>
                          <th scope="col">Final Price</th>
                          <th scope="col">Start</th>
                          <th scope="col">End</th>
                          <th scope="col">Status</th>
                          <th scope="col">Created At</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings?.map((el, index) => (
                          <>
                            <tr>
                              <td scope="row">{index + 1}</td>
                              <td>{el?.customer.name}</td>
                              <td>{el?.breakfastCount}</td>
                              <td>{el?.lunchCount}</td>
                              <td>{el?.dinnerCount}</td>
                              <td>{el?.daysCount}</td>
                              <td>Rs. {el?.finalPrice}</td>

                              <td>{el?.startDate}</td>
                              <td>{el?.endDate}</td>
                              <td>{el?.status}</td>
                              <td>{el?.createdAt.split("T")[0]}</td>
                              <td>
                                <button
                                  className="btn btn-success m-r-10 "
                                  onClick={() => approveBooking(el._id)}
                                >
                                  {/* <i class="bi bi-check-circle-fill"></i> */}
                                  <i class="bi bi-check-square-fill fs-25"></i>
                                </button>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => rejectBooking(el._id)}
                                >
                                  <i class="bi bi-x-square-fill fs-25"></i>
                                  {/* <i class="bi bi-pencil-square"></i> */}
                                </button>
                              </td>
                            </tr>
                          </>
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

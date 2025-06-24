import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";
export default function ManageCustomers() {
  var [users, setusers] = useState([]);
  var [loading, setloading] = useState(true);
  var spinnerObj = {
    margin: "50px auto",
  };

  useEffect(() => {
    getAllusers();
  }, [loading]);

  const getAllusers = async () => {
    try {
      const response = await axios.get("/api/user", {
        withCredentials: true,
      });
      setusers(response.data.users);
      setloading(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const blockuser = async (id) => {
    try {
      let confirm = window.confirm(
        "Are you sure you wnat to block this user it?"
      );
      if (confirm) {
        setloading(true);
        const response = await axios.put(
          `/api/user/update-status/${id}`,
          {
            status: false,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        toast.success("User Blocked Succesfully");
        setloading(false);
      }
    } catch (err) {
      console.log("unblocked user", err);
      setloading(false);
      toast.error("Something Went Wrong");
    }
  };
  const unblockuser = async (id) => {
    try {
      let confirm = window.confirm(
        "Are you sure you wnat to block this user it?"
      );
      if (confirm) {
        setloading(true);
        const response = await axios.put(
          `/api/user/update-status/${id}`,
          {
            status: true,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        toast.success("User Unblocked Succesfully");
        setloading(false);
      }
    } catch (err) {
      console.log("unblocked user", err);
      setloading(false);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <>
      <section
        className="bg-title-page flex-column p-t-250 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(/assets/images/bg-title-page-03.jpg)" }}
      >
        <h2 className="tit6 t-center">Manage Customers</h2>
        <nav>
          <ol class="main_menu d-flex justify-content-center">
            <li class="breadcrumb-item mx-0">
              <Link to="/admin/dashboard" className="px-0 mx-0">
                Dashboard
              </Link>
            </li>
            <li class="breadcrumb-item px-0 mx-0">
              <Link to="/admin/manage-customers" className="text-white px-0">
                Manage Customers
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
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <table class="table table-bordered table-secondary">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Address</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((i, index) => (
                      <tr key={index}>
                        <td scope="row">{index + 1}</td>
                        <td>{i?.name}</td>
                        <td>{i?.email}</td>
                        <td>{i?.contact}</td>

                        <td>{i?.address}</td>
                        <td>{i?.createdAt.split("T")[0]}</td>

                        <td>
                          {i?.status ? (
                            <button
                              onClick={() => {
                                blockuser(i?._id);
                              }}
                              className="btn btn-danger m-r-10"
                            >
                              <i class="bi bi-person-fill-slash fs-25"></i>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                unblockuser(i?._id);
                              }}
                              className="btn btn-success"
                            >
                              <i class="bi bi-person-fill-check fs-25"></i>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="col-1"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import moment from "moment";
import { toast } from "react-toastify";
import axios from "axios";
export default function ManagePricing() {
  const getDate = (date) => {
    let finalDate = moment(date.toDate()).format("MMM Do YY");
    return finalDate;
  };

  var nav = useNavigate();
  var [pricings, setpricings] = useState([]);
  var [loading, setloading] = useState(true);
  var spinnerObj = {
    margin: "50px auto",
  };

  useEffect(() => {
    getAllpricings();
  }, [loading]);

  const getAllpricings = async () => {
    try {
      const response = await axios.get("/api/admin/pricing", {
        withCredentials: true,
      });
      setpricings(response.data.pricings);
      console.log(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const deletePricing = async (id) => {
    let confirm = window.confirm("Are you sure you want to delete it?");
    if (confirm) {
      setloading(true);
      try {
        await axios.delete(`/api/admin/pricing/${id}`, {
          withCredentials: true,
        });
        setloading(false);
        toast.success("Pricing Deleted Succesfully");
      } catch (err) {
        console.log("Error in deleting category", err);
        setloading(false);
        toast.error(err.response.data.message);
      }
    }
  };
  return (
    <>
      <section
        className="bg-title-page flex-column p-t-250 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(/assets/images/bg-title-page-03.jpg)" }}
      >
        <h2 className="tit6 t-center">MANAGE PRICING</h2>
        <nav>
          <ol class="main_menu d-flex justify-content-center">
            <li class="breadcrumb-item mx-0">
              <Link to="/admin/dashboard" className="px-0 mx-0">
                Dashboard
              </Link>
            </li>
            <li class="breadcrumb-item px-0 mx-0">
              <Link to="/admin/manage-pricings" className="text-white px-0">
                Manage Pricing
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
            <div className="row p-t-14 p-b-30">
              <div className="col-1"></div>

              <div className="col-8 text-left">
                <h1 className="tit6 text-danger">List of Pricing</h1>
              </div>
              <div className="col-2 text-right">
                <Link to="/admin/Add-Pricing">
                  <button className="btn btn-outline-danger">
                    ADD PRICING
                  </button>
                </Link>
                <div className="col-1"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <table class="table table-bordered table-secondary">
                  <thead>
                    <tr>
                      <th scope="col">Sr No.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Duration(In Months)</th>
                      <th scope="col">Price</th>
                      <th scope="col" width="400px">
                        {" "}
                        Description
                      </th>

                      <th scope="col">Created At</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricings?.map((i, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{i?.name}</td>
                        <td>{i?.duration}</td>
                        <td>Rs. {i?.price}</td>
                        <td>{i?.description}</td>
                        <td>{i?.createdAt.split("T")[0]}</td>

                        <td className="d-flex flex-row">
                          <button
                            className="btn btn-danger m-r-10"
                            onClick={() => {
                              deletePricing(i?._id);
                            }}
                          >
                            <i class="bi bi-trash-fill fs-25"></i>
                          </button>
                          <Link to={"/admin/Update-Pricing/" + i?._id}>
                            {" "}
                            <button className="btn btn-success">
                              <i class="bi bi-pencil-square fs-25"></i>
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

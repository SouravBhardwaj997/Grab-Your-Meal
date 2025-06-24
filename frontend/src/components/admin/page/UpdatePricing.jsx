import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import { toast } from "react-toastify";
export default function UpdatePricing() {
  const params = useParams();
  const id = params.id;
  var nav = useNavigate();
  var [name, setname] = useState("");
  var [duration, setduration] = useState("");
  var [price, setprice] = useState("");
  var [description, setdescription] = useState("");
  var [loading, setloading] = useState(false);
  var spinnerObj = {
    margin: "50px auto",
  };

  useEffect(() => {
    getSinglePricing();
  }, []);
  const getSinglePricing = async () => {
    try {
      const response = await axios(`/api/admin/pricing/single-pricing/${id}`, {
        withCredentials: true,
      });

      setname(response.data.pricing.name);
      setdescription(response.data.pricing.description);
      setprice(response.data.pricing.price);
      setduration(response.data.pricing.duration);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      await axios.put(
        `/api/admin/pricing/${id}`,
        {
          name,
          description,
          duration,
          price,
        },
        {
          withCredentials: true,
        }
      );
      setloading(false);
      nav("/admin/Manage-Pricings");
      setTimeout(() => {
        toast.success("Pricing Updated Successfully");
      }, 700);
    } catch (error) {
      setloading(false);
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      {/* banner starts */}
      <section
        className="bg-title-page flex-column p-t-250 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(/assets/images/bg-title-page-03.jpg)" }}
      >
        <h2 className="tit6 t-center">UPDATE PRICING</h2>
        <nav>
          <ol class="main_menu d-flex justify-content-center">
            <li class="breadcrumb-item mx-0">
              <Link to="/admin/dashboard" className="px-0 mx-0">
                Dashboard
              </Link>
            </li>
            <li class="breadcrumb-item mx-0">
              <Link to="/admin/Manage-Pricings" className="px-0 mx-0">
                Manage Pricing
              </Link>
            </li>
            <li class="breadcrumb-item px-0 mx-0">
              <Link className="text-white px-0">Update Pricing</Link>
            </li>
          </ol>
        </nav>
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
        <section class="section-contact bg1-pattern p-t-2 p-b-70">
          {/* update pricing starts */}
          <div class="container">
            <h3 class="tit7 t-center p-b-52 p-t-50 text-danger">
              UPDATE PRICING
            </h3>

            <form
              onSubmit={handleForm}
              class="wrap-form-reservation size22 m-l-r-auto"
            >
              <div class="row">
                <div class="col-md-4">
                  <span class="txt9">Name</span>

                  <div class="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <span class="txt9">Duration</span>

                  <div class="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Duration"
                      placeholder="Duration"
                      value={duration}
                      onChange={(e) => {
                        setduration(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <span class="txt9">Price</span>

                  <div class="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
                      type="number"
                      name="Price"
                      placeholder="Price"
                      value={price}
                      onChange={(e) => {
                        setprice(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div class="col-12">
                  <span class="txt9">Description</span>
                  <textarea
                    class="bo-rad-10 size35 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-3"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => {
                      setdescription(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="wrap-btn-booking flex-c-m m-t-13">
                {/* <!-- Button3 --> */}
                <button
                  type="submit"
                  className="btn3 flex-c-m size36 txt11 trans-0-4"
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      {/* update pricing ends */}
    </>
  );
}

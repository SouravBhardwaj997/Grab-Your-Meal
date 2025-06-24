import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function AddMeal() {
  var nav = useNavigate("");
  var [type, settype] = useState("");
  var [Monday, setMonday] = useState("");
  var [Tuesday, setTuesday] = useState("");
  var [Wednesday, setWednesday] = useState("");
  var [Thursday, setThursday] = useState("");
  var [Friday, setFriday] = useState("");
  var [Saturday, setSaturday] = useState("");
  var [Sunday, setSunday] = useState("");
  var [priceperday, setpriceperday] = useState("");
  var [loading, setloading] = useState(false);

  var spinnerObj = {
    margin: "50px auto",
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      await axios.post(
        "/api/admin/meals",
        {
          day1: Monday,
          day2: Tuesday,
          day3: Wednesday,
          day4: Thursday,
          day5: Friday,
          day6: Saturday,
          day7: Sunday,
          type,
          pricePerDay: priceperday,
        },
        {
          withCredentials: true,
        }
      );
      setTimeout(() => {
        toast.success("Meal Added");
      }, 700);
      nav("/admin/Manage-Meals");
      setloading(false);
    } catch (err) {
      setloading(false);
      toast.error(err.response.data.message);
      console.log("Error in add meal", err);
    }
  };

  return (
    <>
      {/* banner starts */}
      <section
        className="bg-title-page flex-column p-t-250 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(/assets/images/bg-title-page-03.jpg)" }}
      >
        <h2 className="tit6 t-center">ADD MEAL</h2>
        <nav>
          <ol className="main_menu d-flex justify-content-center">
            <li className="breadcrumb-item mx-0">
              <Link to="/admin/dashboard" className="px-0 mx-0">
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item mx-0">
              <Link to="/admin/manage-meals" className="px-0 mx-0">
                Manage Meals
              </Link>
            </li>
            <li className="breadcrumb-item px-0 mx-0">
              <Link className="text-white px-0">Add Meal</Link>
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
        {/* add meal starts */}
        <section className="section-contact bg1-pattern p-t-2 p-b-70">
          <div className="container">
            <h3 className="tit7 t-center p-b-52 p-t-50 text-danger">
              ADD MEAL
            </h3>

            <form
              onSubmit={handleForm}
              className="wrap-form-reservation size22 m-l-r-auto"
            >
              <div className="row">
                <div className="col-md-4">
                  {/* <!-- Email --> */}
                  <span className="txt9">Type</span>

                  <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <select
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      name="type"
                      placeholder="type of meal"
                      value={type}
                      onChange={(e) => {
                        settype(e.target.value);
                      }}
                      required
                    >
                      <option>Choose type of meal</option>
                      <option>Breakfast</option>
                      <option>Lunch</option>
                      <option>Dinner</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  {/* <!-- Phone --> */}
                  <span className="txt9">Monday</span>

                  <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Monday"
                      placeholder="Monday"
                      value={Monday}
                      onChange={(e) => {
                        setMonday(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  {/* <!-- Name --> */}
                  <span className="txt9">Tuesday</span>

                  <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Tuesday"
                      placeholder="Tuesday"
                      value={Tuesday}
                      onChange={(e) => {
                        setTuesday(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* <!-- Email --> */}
                  <span className="txt9">Wednesday</span>

                  <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Wednesday"
                      placeholder="Wednesday"
                      value={Wednesday}
                      onChange={(e) => {
                        setWednesday(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* <!-- Phone --> */}
                  <span className="txt9">Thursday</span>

                  <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Thursday"
                      placeholder="Thursday"
                      value={Thursday}
                      onChange={(e) => {
                        setThursday(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  {/* <!-- Name --> */}
                  <span className="txt9">Friday</span>

                  <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Friday"
                      placeholder="Friday"
                      value={Friday}
                      onChange={(e) => {
                        setFriday(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* <!-- Email --> */}
                  <span className="txt9">Saturday</span>

                  <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Saturday"
                      placeholder="Saturday"
                      value={Saturday}
                      onChange={(e) => {
                        setSaturday(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* <!-- Phone --> */}
                  <span className="txt9">Sunday</span>

                  <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Sunday"
                      placeholder="Sunday"
                      value={Sunday}
                      onChange={(e) => {
                        setSunday(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  {/* <!-- Name --> */}
                  <span className="txt9">PricePerDay</span>

                  <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      className="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={priceperday}
                      onChange={(e) => {
                        setpriceperday(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="wrap-btn-booking flex-c-m m-t-13">
                <button
                  type="submit"
                  className="btn3 flex-c-m size36 txt11 trans-0-4"
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

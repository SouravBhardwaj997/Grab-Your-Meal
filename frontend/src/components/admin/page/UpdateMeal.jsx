import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";
// import { db } from "../../../Firebase";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function UpdateMeal() {
  const params = useParams();
  const id = params.id;
  var nav = useNavigate("");
  // var [meals, setmeals] = useState([]);

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

  useEffect(() => {
    getSingleMeal();
  }, []);

  const getSingleMeal = async () => {
    try {
      const response = await axios(`/api/admin/meals/single-meal/${id}`, {
        withCredentials: true,
      });
      console.log(response.data.meal);
      setMonday(response.data.meal.day1);
      setTuesday(response.data.meal.day2);
      setWednesday(response.data.meal.day3);
      setThursday(response.data.meal.day4);
      setFriday(response.data.meal.day5);
      setSaturday(response.data.meal.day6);
      setSunday(response.data.meal.day7);
      settype(response.data.meal.type);
      setpriceperday(response.data.meal.pricePerDay);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      await axios.put(
        `/api/admin/meals/${id}`,
        {
          day1: Monday,
          day2: Tuesday,
          day3: Wednesday,
          day4: Thursday,
          day5: Friday,
          day6: Saturday,
          day7: Sunday,
        },
        {
          withCredentials: true,
        }
      );
      setloading(false);
      nav("/admin/manage-meals");
      setTimeout(() => {
        toast.success("Meal Updated Successfully");
      }, 700);
    } catch (error) {
      setloading(false);
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <section
        className="bg-title-page flex-column p-t-250 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(/assets/images/bg-title-page-03.jpg)" }}
      >
        <h2 className="tit6 t-center">UPDATE MEAL</h2>
        <nav>
          <ol class="main_menu d-flex justify-content-center">
            <li class="breadcrumb-item mx-0">
              <Link to="/admin/dashboard" className="px-0 mx-0">
                Dashboard
              </Link>
            </li>
            <li class="breadcrumb-item mx-0">
              <Link to="/admin/manage-meals" className="px-0 mx-0">
                Manage meals
              </Link>
            </li>
            <li class="breadcrumb-item px-0 mx-0">
              <Link className="text-white px-0">Update Meals</Link>
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
      {/* <!-- Contact form --> */}
      <div className={loading && "d-none"}>
        <section class="section-contact bg1-pattern p-t-2 p-b-70">
          <div class="container">
            <form
              onSubmit={handleForm}
              class="wrap-form-reservation size22 m-l-r-auto"
            >
              <h3 class="tit7 t-center p-b-52 p-t-50 text-danger">
                UPDATE MEAL
              </h3>

              <div class="row">
                <div class="col-md-4">
                  {/* <!-- Email --> */}
                  <span class="txt9">Type</span>

                  <div class="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <select
                      class="bo-rad-10 sizefull txt10 p-l-20"
                      name="type"
                      placeholder="type of meal"
                      value={type}
                      onChange={(e) => {
                        settype(e.target.value);
                      }}
                      required
                    >
                      <option value="" disabled>
                        Choose type of meal
                      </option>
                      <option>Breakfast</option>
                      <option>Lunch</option>
                      <option>Dinner</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-4">
                  {/* <!-- Phone --> */}
                  <span class="txt9">Monday</span>

                  <div class="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Monday"
                      placeholder="Monday"
                      value={Monday}
                      onChange={(e) => {
                        setMonday(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  {/* <!-- Name --> */}
                  <span class="txt9">Day 2</span>

                  <div class="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
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

                <div class="col-md-4">
                  {/* <!-- Email --> */}
                  <span class="txt9">Wednesday</span>

                  <div class="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Wednesday"
                      placeholder="Wednesday"
                      value={Wednesday}
                      onChange={(e) => {
                        setWednesday(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  {/* <!-- Phone --> */}
                  <span class="txt9">Thursday</span>

                  <div class="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="Thursday"
                      placeholder="Thursday"
                      value={Thursday}
                      onChange={(e) => {
                        setThursday(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  {/* <!-- Name --> */}
                  <span class="txt9">Friday</span>

                  <div class="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
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

                <div class="col-md-4">
                  {/* <!-- Email --> */}
                  <span class="txt9">Saturday</span>

                  <div class="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
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

                <div class="col-md-4">
                  {/* <!-- Phone --> */}
                  <span class="txt9">Sunday</span>

                  <div class="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
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
                <div class="col-md-4">
                  {/* <!-- Name --> */}
                  <span class="txt9">Price Per Day</span>

                  <div class="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                    <input
                      class="bo-rad-10 sizefull txt10 p-l-20"
                      type="text"
                      name="priceperday"
                      placeholder="Price Per Day"
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
    </>
  );
}

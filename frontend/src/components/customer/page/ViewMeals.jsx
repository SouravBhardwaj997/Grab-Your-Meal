import { useEffect, useState } from "react";
import axios from "axios";
import { ClockLoader } from "react-spinners";
import { API_BASE_URL } from "../../../config/api";
export default function ViewMeals() {
  var [meals, setmeals] = useState([]);
  let [loading, setloading] = useState(true);
  useEffect(() => {
    getAllmeals();
  }, []);
  var spinnerObj = {
    margin: "50px auto",
  };

  const getAllmeals = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/meals`, {
        withCredentials: true,
      });
      console.log(response);
      setmeals(response.data.meals);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  return (
    <>
      {/* // ------banner starts------- */}
      <section
        class="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: " url(assets/images/bg-title-page-01.jpg)" }}
      >
        <h2 class="tit6 t-center">Dial A Meal Menu</h2>
      </section>
      {/* // ---banner ends----- */}

      <ClockLoader
        color="red"
        loading={loading}
        cssOverride={spinnerObj}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* -----menu starts------ */}
      <div className={loading && "d-none"}>
        <section class="section-mainmenu p-t-110 p-b-70 bg1-pattern">
          <div class="container-fluid">
            <div class="row">
              {meals.map((el) => (
                <div
                  class="col-md-10 col-lg-3 p-r-35 p-r-15-lg m-l-r-auto"
                  key={el._id}
                >
                  <div class="wrap-item-mainmenu p-b-22">
                    <h3 class="tit-mainmenu tit10 p-b-25 p-4">{el.type}</h3>

                    <div class="item-mainmenu m-b-36">
                      <div class="flex-w flex-b m-b-3 p-2">
                        <a href="#" class="name-item-mainmenu txt21 p-3">
                          Monday: {el.day1}
                        </a>
                        <a href="#" class="name-item-mainmenu txt21 p-3">
                          Tuesday: {el.day2}
                        </a>
                        <a href="#" class="name-item-mainmenu txt21 p-3">
                          Wednesday: {el.day3}
                        </a>
                        <a href="#" class="name-item-mainmenu txt21 p-3">
                          Thursday: {el.day4}
                        </a>
                        <a href="#" class="name-item-mainmenu txt21 p-3">
                          Fridaay: {el.day5}
                        </a>
                        <a href="#" class="name-item-mainmenu txt21 p-3">
                          Saturday: {el.day6}
                        </a>
                        <a href="#" class="name-item-mainmenu txt21 p-3">
                          Sunday: {el.day7}
                        </a>
                      </div>
                      <div class="line-item-mainmenu bg3-pattern"></div>
                      <h6 className="text-center">Price/Day</h6>
                      <div class="price-item-mainmenu txt22 text-center">
                        Rs. {el.pricePerDay}
                      </div>
                      <span class="info-item-mainmenu txt23"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import "./App.css";
import AdminMaster from "./components/admin/layout/AdminMaster";
import Dashboard from "./components/admin/page/Dashboard";
import ManageCustomers from "./components/admin/page/ManageCustomers";
import ManageMeals from "./components/admin/page/ManageMeals";
import AddMeal from "./components/admin/page/AddMeal";
import ManageBookings from "./components/admin/page/ManageBookings";
import Master from "./components/customer/layout/Master";
import About from "./components/customer/page/About";
import Home from "./components/customer/page/Home";
import Login from "./components/auth/Login";
import Error from "./Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ManagePricings from "./components/admin/page/ManagePricing";
import UpdateMeal from "./components/admin/page/UpdateMeal";
import ManageCustomBookings from "./components/admin/page/ManageCustomBookings";
import AddPricing from "./components/admin/page/AddPricing";
import UpdatePricing from "./components/admin/page/UpdatePricing";
import ViewMeals from "./components/customer/page/ViewMeals";
import ViewPricingDetails from "./components/customer/page/ViewPricingDetails";
import CustomBookings from "./components/customer/page/CustomBookings";
import Register from "./components/customer/page/Register";
import UpdateProfile from "./components/customer/page/UpdateProfile";
import AddBookings from "./components/customer/page/AddBookings";
import ApprovedBookings from "./components/admin/page/ApprovedBookings";
import RejectedBookings from "./components/admin/page/RejectedBookings";
import Profile from "./components/customer/page/Profile.jsx";
import ApprovedCustomBookings from "./components/admin/page/ApprovedCustomBookings";
import RejectedCustomBookings from "./components/admin/page/RejectedCustomBookings";
import CompletedCustomBookings from "./components/admin/page/CompletedCustomBookings";
import ViewBookings from "./components/customer/page/ViewBookings";
import ViewCustomBookings from "./components/customer/page/ViewCustomBookings";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminMaster />}>
            <Route path="/admin/dashboard" element={<Dashboard />}></Route>
            <Route
              path="/admin/Manage-Customers"
              element={<ManageCustomers />}
            />
            <Route path="/admin/Manage-Meals" element={<ManageMeals />}></Route>
            <Route path="/admin/Add-Meal" element={<AddMeal />}></Route>
            <Route
              path="/admin/Update-Meal/:id"
              element={<UpdateMeal />}
            ></Route>
            <Route
              path="/admin/Manage-Pricings"
              element={<ManagePricings />}
            ></Route>
            <Route path="/admin/Add-Pricing" element={<AddPricing />}></Route>
            <Route
              path="/admin/Update-Pricing/:id"
              element={<UpdatePricing />}
            ></Route>
            <Route
              path="/admin/Manage-Custom-Bookings"
              element={<ManageCustomBookings />}
            ></Route>
            <Route
              path="/admin/Manage-Bookings"
              element={<ManageBookings />}
            ></Route>
            <Route
              path="/admin/approvedbookings"
              element={<ApprovedBookings />}
            />
            <Route
              path="/admin/rejectedbookings"
              element={<RejectedBookings />}
            />
            <Route
              path="/admin/approvedcustombookings"
              element={<ApprovedCustomBookings />}
            />
            <Route
              path="/admin/rejectedcustombookings"
              element={<RejectedCustomBookings />}
            />
            <Route
              path="/admin/completedcustombookings"
              element={<CompletedCustomBookings />}
            />
          </Route>

          <Route path="/" element={<Master />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/view-meals" element={<ViewMeals />}></Route>
            <Route
              path="/view-pricing-details"
              element={<ViewPricingDetails />}
            ></Route>
            <Route path="/add-bookings/:id" element={<AddBookings />}></Route>
            <Route path="/custom-bookings" element={<CustomBookings />} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="/update-profile" element={<UpdateProfile />}></Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/viewbookings" element={<ViewBookings />} />
            <Route
              path="/viewcustombookings"
              element={<ViewCustomBookings />}
            />
          </Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

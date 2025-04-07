import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import { Outlet, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ClockLoader } from "react-spinners";
import { useEffect, useState } from "react";

export default function AdminMaster() {
  const nav = useNavigate();
  let authenticate = sessionStorage.getItem("isLogin");
  var [loading, setloading] = useState(true);

  var spinnerObj = {
    margin: "50px auto",
  };

  let role = sessionStorage.getItem("userRole");
  useEffect(() => {
    if (!authenticate || role !== "admin") {
      nav("/login");
      setloading(false);

      setTimeout(() => {
        toast.error("Please Login First");
      }, 500);
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <div className={loading ? "d-hidden" : "d-block"}>
        {/* <ClockLoader
        color="red"
        loading={loading}
        cssOverride={spinnerObj}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
        <AdminHeader />
        <Outlet />
        <AdminFooter />
      </div>
    </>
  );
}

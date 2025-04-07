import { Router } from "express";
import {
  addBooking,
  getUserBookings,
  getAllBookings,
  updateStatusOfBooking,
} from "../controllers/booking.controller.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
const router = Router();

router.get("/", getUserBookings);
router.get("/all-bookings", adminMiddleware, getAllBookings);
router.post("/:id", addBooking);
router.put("/:id", adminMiddleware, updateStatusOfBooking);

export default router;

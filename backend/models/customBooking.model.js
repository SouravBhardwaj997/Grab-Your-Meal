import mongoose, { Schema, model } from "mongoose";

const customBookingSchema = new Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    breakfastCount: {
      type: String,
      require: true,
    },
    lunchCount: {
      type: String,
      require: true,
    },
    dinnerCount: {
      type: String,
      require: true,
    },
    daysCont: {
      type: String,
      require: true,
    },
    startDate: {
      type: String,
      require: true,
    },
    endDate: {
      type: String,
      require: true,
    },
    finalPrice: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const CustomBookings = model("customBooking", customBookingSchema);

export default CustomBookings;

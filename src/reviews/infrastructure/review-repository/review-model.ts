import mongoose, { Schema } from "mongoose";

// interface ReviewSchema extends Document {
//   _id: Schema.Types.ObjectId;
//   business_id: Schema.Types.ObjectId;
//   user_name: string;
//   text: string;
//   rating: number;
// }

const reviewSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  business_id: {
    type: Schema.Types.ObjectId,
    ref: "Businesses",
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
    maxLength: 500,
  },
  rating: {
    type: Number,
    required: true,
  },
});

export const ReviewsModel = mongoose.model("Reviews", reviewSchema);

import mongoose, { Document, Schema } from "mongoose";

interface BusinessSchema extends Document {
  _id: Schema.Types.ObjectId;
  type: string;
  name: string;
  email: string;
  numberOfReviews: number;
  website: string;
  address: string;
  phone: number;
}

const businessSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["online", "physical"],
  },
  name: {
    type: String,
    required: true,
    // maxLength: function (this: BusinessSchema) {
    //     return this.type === 'online' ? 75 : 50
    // }
  },
  email: {
    type: String,
    required: true,
  },
  numberOfReviews: {
    type: Number,
    required: true,
  },
  website: {
    type: String,
    required: function (this: BusinessSchema) {
      return this.type === "online";
    },
  },
  address: {
    type: String,
    required: function (this: BusinessSchema) {
      return this.type === "physical";
    },
  },
  phone: {
    type: Number,
    required: function (this: BusinessSchema) {
      return this.type === "physical";
    },
  },
});

export const BussinessesModel = mongoose.model("Businesses", businessSchema);

import mongoose, { Schema, Document } from "mongoose";

export interface ContactDocument extends Document {
  agencyId: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
  location: string;
  activityLog?: {
    title: string;
    date: Date;
    details?: string;
  }[];
}

const activityLogSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  details: { type: String },
});

const contactSchema = new Schema<ContactDocument>(
  {
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Client's name is required"],
    },
    email: {
      type: String,
      required: [true, "Client's email is required"],
    },
    phone: String,
    location: String,
    activityLog: [activityLogSchema],
  },
  { timestamps: true }
);

const ContactModel =
  mongoose.models.Contact ||
  mongoose.model<ContactDocument>("Contact", contactSchema);

export default ContactModel;

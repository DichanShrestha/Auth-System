import mongoose, { Schema, Document } from "mongoose";
import { ObjectId } from "mongodb";

interface Template extends Document {
  agencyId: ObjectId;
  name: string;
  subject: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

const templateSchema = new Schema<Template>(
  {
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TemplateModel =
  mongoose.models.Template ||
  mongoose.model<Template>("Template", templateSchema);

export default TemplateModel;

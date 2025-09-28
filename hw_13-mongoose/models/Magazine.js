import mongoose from "mongoose";

const magazineSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    issueNumber: { type: Number, default: 1 },
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publisher",
      required: true
    }
  },
  { timestamps: true }
);

const Magazine = mongoose.model("Magazine", magazineSchema);
export default Magazine;

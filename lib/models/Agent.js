import mongoose from "mongoose";

const AgenSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  tone: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Agent = mongoose.models.Agent || mongoose.model("Agent", AgenSchema);

export default Agent;

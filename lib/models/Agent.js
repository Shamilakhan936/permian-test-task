import mongoose from "mongoose";

const AgentSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: false,
  },
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
  },
  tone: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  calendly: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Agent = mongoose.models.Agent || mongoose.model("Agent", AgentSchema);

export default Agent;

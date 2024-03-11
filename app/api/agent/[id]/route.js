import Agent from "../../../../lib/models/Agent";
import { connectToDB } from "../../../../lib/mongodb/mongoose";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const id = params?.id.toString();

    const agents = await Agent.find({ clerkId: id });

    return new Response(JSON.stringify(agents), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to get user", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    const id = params?.id.toString();

    const agents = await Agent.findOneAndDelete({
      _id: id,
    });

    return new Response(JSON.stringify(agents), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to get user", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await connectToDB();
    const data = await req.json();
    const newAgent = await Agent.findOneAndUpdate(
      { clerkId: data.clerkId },
      {
        name: data.name,
        instructions: data.instructions,
        tone: data.tone,
        phoneNumber: data.phoneNumber,
        calendly: data.calendly,
      },
      { new: true, upsert: true }
    );

    await newAgent.save();

    return new Response(JSON.stringify(newAgent), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to create a new Agent", { status: 500 });
  }
};

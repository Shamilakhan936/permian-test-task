import Agent from "../../../../lib/models/Agent";
import { connectToDB } from "../../../../lib/mongodb/mongoose";

export const POST = async (req) => {
  try {
    await connectToDB();
    const data = await req.json();
    const newAgent = await Agent.create({
      clerkId: data.clerkId,
      name: data.name,
      instructions: data.instructions,
      tone: data.tone,
      phoneNumber: data.phoneNumber,
      calendly: data.calendly,
    });

    await newAgent.save();

    return new Response(JSON.stringify(newAgent), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to create a new Agent", { status: 500 });
  }
};

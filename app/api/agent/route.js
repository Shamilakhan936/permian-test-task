import Agent from "../../../lib/models/Agent";
import User from "../../../lib/models/User";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const agents = await Agent.find({});

    return new Response(JSON.stringify(agents), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to get user", { status: 500 });
  }
};

import Agent from "../../../../lib/models/Agent";
import User from "../../../../lib/models/User";
import { connectToDB } from "../../../../lib/mongodb/mongoose";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const user = await User.findOne({ clerkId: params.id })
      .populate("agents")
      .exex();

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to get user", { status: 500 });
  }
};

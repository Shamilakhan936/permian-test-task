import { UserButton } from "@clerk/nextjs";
import { CiMobile1 } from "react-icons/ci";
import { FaTabletScreenButton } from "react-icons/fa6";
import { CiDesktop } from "react-icons/ci";

export default function Home() {
  return (
    <div className="h-screen bg-[#7926c5]">
      <div className="flex items-center p-2 justify-between">
        <UserButton />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none ml-2 focus:shadow-outline-blue">
          Create an agent
        </button>
      </div>

      {/* <div className="bg-white h-[850px] w-[600px] ml-[40rem] rounded-3xl p-10">
        <div>
          <h2 className="text-lg	font-medium	">
            Which device are you designing for
          </h2>
          <div className="bg-[#ebebeb] rounded-md flex mt-4 items-center justify-between">
            <div className=" p-1 px-6 ml-2 bg-white rounded-md flex gap-1 items-center">
              <CiMobile1 className="text-3xl	" />
              <h2>Mobile</h2>
            </div>
            <div className=" p-5  flex gap-1 items-center">
              <FaTabletScreenButton className="text-3xl	" />
              <h2>Tablet</h2>
            </div>
            <div className="p-5  flex gap-1 items-center">
              <CiDesktop className="text-3xl	" />
              <h2>Desktop</h2>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <div className="flex items-center justify-between">
            <h2 className="text-lg	font-medium	">
              Describe your project in plain English
            </h2>
            <h2 className="text-lg	font-medium	border-2 p-2 rounded-xl">
              Try Example
            </h2>
          </div>
          <textarea
            className="bg-[#ebebeb] w-full mt-2 resize-none p-3 h-[120px] outline-none	 rounded-md placeholder:text-black"
            placeholder="An app to discover recipes that taste bad"
          ></textarea>
        </div>

        <div className="mt-7">
          <div className="flex items-center justify-between">
            <h2 className="text-lg	font-medium	">
              Describe a design style, pick keywords , or both
            </h2>
            <h2 className="   text-slate-500	 ">0/300</h2>
          </div>
          <textarea
            className="bg-[#ebebeb] w-full mt-2 resize-none p-3 h-[100px] rounded-md outline-none	placeholder:text-black"
            placeholder="Modern startup aesthetic in the style of Airbnb but more corporate"
          ></textarea>
        </div>
        <h2 className="   text-slate-500 text-left flex items-end	justify-end	">
          0/150
        </h2>
        <div className="flex flex-wrap justify-center gap-4 items-center mt-10 mb-15">
          <button className="rounded-full border p-3 w-f font-medium ">
            Light
          </button>
          <button className="rounded-full border p-2 font-medium">Dark</button>
          <button className="rounded-full border p-2 font-medium">Modern</button>
          <button className="rounded-full border p-2 font-medium">Artsy</button>
          <button className="rounded-full border p-2 font-medium">Techy</button>
          <button className="rounded-full border p-2 font-medium">Young</button>
          <button className="rounded-full border p-2 font-medium">Corporate</button>
          <button className="rounded-full border p-2 font-medium">Formal</button>
          <button className="rounded-full border p-2 font-medium">Elegant</button>
          <button className="rounded-full border p-2 font-medium">
            Hand-drawn
          </button>
        </div>

        <button className="bg-indigo-600		text-white px-6 py-4 rounded-md hover:bg-green focus:outline-none focus:shadow-outline-green mt-10 w-full">
          Generate my project
          <button className=" border px-2 text-violet-700	 font-medium ml-5 bg-white rounded    ">
            Beta
          </button>
        </button>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-6 mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
        <p className="text-gray-500 mb-4 text-center	">
          You have successfully set up your first project! Now, dive into your
          notes and begin analyzing.
        </p>
        <p className="text-gray-700 mb-4 text-center	text-gray-500">
          This is the phone number you can use:
        </p>
        <p className=" font-medium		mb-4">+1 632 882 9920</p>
        <button className="bg-black	text-white px-4 py-2 rounded-md hover:bg-green focus:outline-none focus:shadow-outline-green w-96">
          Start Analyzing
        </button>
      </div> */}
    </div>
  );
}

{
  /* <div className="bg-white h-[850px] w-[600px] ml-[40rem] rounded-3xl p-10">
  <div className="mt-7">
    <h2 className="text-lg font-medium">Name</h2>
    <input
      type="text"
      className="bg-[#ebebeb] w-full mt-2 p-3 outline-none rounded-md placeholder:text-black"
      placeholder="Your Name"
    />
  </div>

  <div className="mt-7">
    <h2 className="text-lg font-medium">Give instructions</h2>
    <textarea
      className="bg-[#ebebeb] w-full mt-2 resize-none p-3 h-[150px] outline-none rounded-md placeholder:text-black"
      placeholder="Enter instructions here..."
    ></textarea>
    <div className="flex items-center justify-end mt-2 text-slate-500">
      0/300
    </div>
  </div>

  <div className="mt-7">
    <h2 className="text-lg font-medium">Select a tone</h2>
    <input
      type="text"
      className="bg-[#ebebeb] w-full mt-2 p-3 outline-none rounded-md placeholder:text-black"
      placeholder="Tone"
    />
  </div>

  <div className="mt-7">
    <h2 className="text-lg font-medium">
      Enter a phone number you'd like your AI to forward the call to
    </h2>
    <input
      type="tel"
      className="bg-[#ebebeb] w-full mt-2 p-3 outline-none rounded-md placeholder:text-black"
      placeholder="Phone Number"
    />
  </div>

  <div className="mt-7">
    <h2 className="text-lg font-medium">Connect your calendar</h2>
    <button className="rounded-full border p-2 font-medium bg-[#ebebeb]">
      Connect to your Calendly
    </button>
    <input
      type="text"
      className="bg-[#ebebeb] w-full mt-2 p-3 outline-none rounded-md placeholder:text-black"
      placeholder="Write any other time you're available"
    />
  </div>

  <button className="bg-indigo-600 text-white px-6 py-4 rounded-md hover:bg-green focus:outline-none focus:shadow-outline-green mt-10 w-full">
    Generate my project
    <button className="border px-2 text-violet-700 font-medium ml-5 bg-white rounded">
      Beta
    </button>
  </button>
</div>; */
}

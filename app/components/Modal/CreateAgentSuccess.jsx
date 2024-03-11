import React from "react";

const CreateAgentSuccess = ({ handleBackdropClick }) => {
  
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="flex justify-center rounded-md flex-col items-center p-4 bg-white w-[400px]">
        <h4 className="font-bold">Congratulations!</h4>
        <p className="my-4">
          You have successfully set up your first project! Now, dive into your
          notes and begin analyzing.
        </p>
        <p>This is the phone number you can use:</p>
        <h6 className="my-4 font-bold"> +1 632 882 9920</h6>
        <button
          className="w-full bg-black text-white p-2 rounded-md"
          type="button"
        >
          Start Analyzing
        </button>
      </div>
    </div>
  );
};

export default CreateAgentSuccess;

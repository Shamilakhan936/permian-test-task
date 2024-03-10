export const AgentModal = ({
  isOpen,
  closeModal,
  formObj,
  setFormObj,
  onGenerate,
}) => {
  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-3xl p-10">
          <div className="flex justify-end">
            <button onClick={closeModal} className="text-gray-500">
              Close
            </button>
          </div>

          {/* Your form inputs */}
          <label htmlFor="name" className="text-md font-medium">
            Name
          </label>
          <input
            id="name"
            className="bg-[#ebebeb] w-full h-8 p-2 rounded-md mt-2"
            value={formObj.name}
            onChange={(e) => setFormObj({ ...formObj, name: e.target.value })}
          />

          <div className="flex items-center justify-between mt-2">
            <h2 className="text-md	font-medium	">Give instructions</h2>
          </div>
          <textarea
            id="instructions"
            className="bg-[#ebebeb] w-full mt-2 resize-none p-2 h-[100px] outline-none rounded-md placeholder:text-gray"
            placeholder=""
            value={formObj.instructions}
            onChange={(e) =>
              setFormObj({ ...formObj, instructions: e.target.value })
            }
          ></textarea>
          <h2 className="   text-slate-500 text-left flex items-end	justify-end	">
            0/150
          </h2>

          <label id="tone" className="text-md	font-medium ">
            Select a tone
          </label>
          <input
            className="bg-[#ebebeb] w-full h-8 p-2 rounded-md mt-2"
            id="tone"
            value={formObj.tone}
            onChange={(e) => setFormObj({ ...formObj, tone: e.target.value })}
          ></input>

          <div className="flex items-center justify-between mt-2">
            <h2 className="text-md font-medium	">Phone Number</h2>
          </div>
          <input
            className="bg-[#ebebeb] w-full h-8 p-2 rounded-md mt-2"
            id="phoneNumber"
            value={formObj.phoneNumber}
            onChange={(e) =>
              setFormObj({ ...formObj, phoneNumber: e.target.value })
            }
          ></input>

          {/* Other form inputs... */}

          <button
            className="bg-indigo-600 text-white px-6 py-4 rounded-md hover:bg-green focus:outline-none focus:shadow-outline-green w-full mt-8"
            onClick={onGenerate}
          >
            Generate
          </button>
        </div>
      </div>
    )
  );
};

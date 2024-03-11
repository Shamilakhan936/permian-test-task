"use client";

import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { AgentModal } from "../components/Modal/AgentModal";
import { AgentTable } from "../components/AgentTable/AgentTable";
import CreateAgentSuccess from "../components/Modal/CreateAgentSuccess";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formObj, setFormObj] = useState({});
  const [isCalendyOpen, setIsCalendyOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setFormObj({
      name: "",
      instructions: "",
      tone: "",
      phoneNumber: "",
      calendly: "",
    });
  };

  const users = [
    {
      id: 1,
      name: "John Doe",
      instructions: "123-456-7890",
      tone: "Tone",
      phoneNumber: "123-456-7890",
    },
    {
      id: 2,
      name: "John Dee",
      instructions: "123 -456-7890",
      tone: "Tone",
      phoneNumber: "123",
    },
    {
      id: 3,
      name: "John Lii",
      instructions: "123",
      tone: "Tone",
      phoneNumber: "123",
    },
    {
      id: 4,
      name: "Jane Smith",
      instructions: "987-654-3210",
      tone: "Tone",
      phoneNumber: "987-654-88",
    },
  ];

  const closeModal = () => {
    setIsModalOpen(false);
    setIsCalendyOpen(false);
  };

  const handleGenerate = () => {
    setFormObj({
      name: "",
      instructions: "",
      tone: "",
      phoneNumber: "",
    });
    setIsModalOpen(false);
    setIsCalendyOpen(false);
  };

  return (
    <div className="h-screen bg-[#7926c5]">
      <div className="flex items-center p-4 justify-end">
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none ml-2 focus:shadow-outline-blue mr-4"
        >
          Create an agent
        </button>
        <UserButton />
      </div>
      <div>
        <div className="container mx-auto p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">User List</h2>
          <AgentTable users={users} />
        </div>
      </div>

      <AgentModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        formObj={formObj}
        setFormObj={setFormObj}
        onGenerate={handleGenerate}
        setIsCalendyOpen={setIsCalendyOpen}
        isCalendyOpen={isCalendyOpen}
      />

      {/* <CreateAgentSuccess /> */}
    </div>
  );
}

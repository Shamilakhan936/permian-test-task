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
  const [edit, setEdit] = useState(false);
  const [agentCreated, setAgentCreated] = useState(false);
  const [users, setUsers] = useState([
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
  ]);

  const openModal = () => {
    setIsModalOpen(true);
    setFormObj({
      name: "",
      instructions: "",
      tone: "",
      phoneNumber: "",
      calendly: "",
    });
    setEdit(false);
    setAgentCreated(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsCalendyOpen(false);
    setEdit(false);
  };
  const handleGenerate = () => {
    if (!edit) {
      const newAgent = {
        id: users.length + 1,
        ...formObj,
      };
      setUsers((prevUsers) => [...prevUsers, newAgent]);
      setIsModalOpen(false);
      setAgentCreated(true);
    } else {
      setUsers((prevUsers) => {
        const updatedUsers = prevUsers.map((user) =>
          user.id === formObj.id ? formObj : user
        );
        setIsModalOpen(false);
        setEdit(false);
        return updatedUsers;
      });
    }
  };

  const handleEditClick = (userData) => {
    setEdit(true);
    setFormObj(userData);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (userData) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userData.id)
    );
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
          <AgentTable
            users={users}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            setEdit={setEdit}
          />
        </div>
      </div>

      <AgentModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        formObj={formObj}
        setFormObj={setFormObj}
        onClick={handleGenerate}
        setIsCalendyOpen={setIsCalendyOpen}
        isCalendyOpen={isCalendyOpen}
        isEdit={edit}
      />
      {agentCreated && (
        <div className="flex justify-center">
          <CreateAgentSuccess />
        </div>
      )}
    </div>
  );
}

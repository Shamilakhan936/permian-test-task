"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { AgentModal } from "../components/Modal/AgentModal";
import { AgentTable } from "../components/AgentTable/AgentTable";
import CreateAgentSuccess from "../components/Modal/CreateAgentSuccess";
import { v4 } from "uuid";

export default function Home() {
  const { user, isLoaded } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formObj, setFormObj] = useState({});
  const [isCalendyOpen, setIsCalendyOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [agentCreated, setAgentCreated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [users, setUsers] = useState([]);

  const createAgent = async () => {
    const response = await fetch(`/api/agent/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clerkId: user.id,
        name: formObj.name,
        instructions: formObj.instructions,
        tone: formObj.tone,
        phoneNumber: formObj.phoneNumber,
        calendly: formObj.calendly,
      }),
    });
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  console.log("user data", userData);

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

  // const createAgent = async () => {
  //   try {
  //     // const newAgent = {
  //     //   name: formObj.name,
  //     //   instructions: formObj.instructions,
  //     //   tone: formObj.tone,
  //     //   phoneNumber: formObj.phoneNumber,
  //     //   calendly: formObj.calendly,
  //     // };
  //     // await createOrUpdateAgent(newAgent);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleGenerate = async () => {
    if (!edit) {
      const newAgent = {
        id: users.length + 1,
        ...formObj,
      };
      setUsers((prevUsers) => [...prevUsers, newAgent]);
      setIsModalOpen(false);
      setAgentCreated(true);
      createAgent();
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
      {users.length > 0 && (
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
      )}

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

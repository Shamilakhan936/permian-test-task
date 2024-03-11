"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { AgentModal } from "../components/Modal/AgentModal";
import { AgentTable } from "../components/AgentTable/AgentTable";
import CreateAgentSuccess from "../components/Modal/CreateAgentSuccess";
import { v4 } from "uuid";

export default function Home() {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formObj, setFormObj] = useState({});
  const [isCalendyOpen, setIsCalendyOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [agentCreated, setAgentCreated] = useState(false);
  const [agents, setAgents] = useState([]);

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
    setAgents([...agents, data]);
  };

  const updateAgent = async (id) => {
    const response = await fetch(`/api/agent/${id}`, {
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
    if (data) {
      setAgents((prevUsers) => {
        const updatedUsers = prevUsers.map((user) =>
          user._id === data._id ? data : user
        );
        return updatedUsers;
      });
    }
  };

  const getAllAgents = async () => {
    try {
      const id = user?.id;
      const response = await fetch(`/api/agent/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setAgents(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    if (user) {
      getAllAgents();
    }
  }, [user]);

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

  const handleGenerate = async () => {
    if (formObj.name == "") {
      alert("Please enter your name");
    }
    if (!edit) {
      const newAgent = {
        id: v4(),
        ...formObj,
      };
      setAgents((prevUsers) => [...prevUsers, newAgent]);
      setIsModalOpen(false);
      setAgentCreated(true);
      createAgent();
    } else {
      setIsModalOpen(false);
      setEdit(false);
      updateAgent(formObj._id);
    }
  };

  const handleEditClick = (userData) => {
    setEdit(true);
    setFormObj(userData);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (userData) => {
    try {
      const id = userData?._id;
      const response = await fetch(`/api/agent/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        setAgents((prevUsers) => prevUsers.filter((user) => user._id !== id));
      }
    } catch (e) {
      console.log("error", e);
    }
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

      {agents?.length > 0 && (
        <div>
          <div className="container mx-auto p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <AgentTable
              users={agents || []}
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
          <CreateAgentSuccess
            handleBackdropClick={() => setAgentCreated(false)}
          />
        </div>
      )}
    </div>
  );
}

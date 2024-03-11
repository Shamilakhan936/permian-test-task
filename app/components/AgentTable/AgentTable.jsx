import React from "react";
import Edit from "../SVGS/edit";
import Delete from "../SVGS/delete";

export const AgentTable = ({ users, handleEditClick, setEdit, handleDeleteClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Instructions</th>
            <th className="py-2 px-4 border-b">Tone</th>
            <th className="py-2 px-4 border-b">Phone Number</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td className="py-2 px-4 text-center">{user.name}</td>
                <td className="py-2 px-4 text-center">{user.instructions}</td>
                <td className="py-2 px-4 text-center">{user.tone}</td>
                <td className="py-2 px-4 text-center">{user.phoneNumber}</td>
                <td className="py-2 px-4 text-center flex justify-center gap-2 w-full">
                  <Edit
                    handleClick={() => {
                      handleEditClick(user), setEdit(true);
                    }}
                  />
                  <Delete
                    handleClick={() => {
                      handleDeleteClick(user);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

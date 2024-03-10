import React from "react";

export const AgentTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Instructions</th>
            <th className="py-2 px-4 border-b">Tone</th>
            <th className="py-2 px-4 border-b">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b text-center">{user.name}</td>
                <td className="py-2 px-4 border-b text-center">
                  {user.instructions}
                </td>
                <td className="py-2 px-4 border-b text-center">{user.tone}</td>
                <td className="py-2 px-4 border-b text-center">
                  {user.phoneNumber}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

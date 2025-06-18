import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">ID</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Name</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Email</th>
            <th className="py-2 px-4 border-b border-gray-200 text-right text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-gray-50">
            <td className="py-2 px-4 border-b border-gray-200 text-gray-800">1</td>
            <td className="py-2 px-4 border-b border-gray-200 text-gray-800">Fay</td>
            <td className="py-2 px-4 border-b border-gray-200 text-gray-800">fay@yopmail.com</td>
            <td className="py-2 px-4 border-b border-gray-200 text-right">
              <button className="text-green-500 hover:text-green-700">Edit</button>
              <button className="text-red-500 hover:text-red-700 ml-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { fetchPaginatedData } from "../Api.tsx";

const Pagination = () => {
  const [skip, setSkip] = useState<number>(0);
  const [limit] = useState<number>(7);

  const handleNextPage = () => {
    setSkip((prevSkip: number) => prevSkip + limit);
  };

  const handlePreviousPage = () => {
    setSkip((prevSkip: number) => Math.max(prevSkip - limit, 0));
  };

  const { data: Users } = useQuery({
    queryKey: ["users", skip, limit],
    queryFn: () => fetchPaginatedData({ skip, limit }),
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      <h2 className="my-7 font-bold text-xl">Pagination</h2>

      {/* Table for displaying user data */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {Users?.users?.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
              </td>
              <td className="border p-2">
                {user.firstName + " " + user.lastName}
              </td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.age}</td>
              <td className="border p-2">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      {Users && (
        <div className="flex flex-row place-self-end my-5 gap-2">
          <button
            onClick={handlePreviousPage}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            {<BiLeftArrow />}
          </button>
          <span>{skip / limit + 1}</span> of{" "}
          <span>{Math.ceil(Users?.total / limit)}</span>
          <button
            onClick={handleNextPage}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            {<BiRightArrow />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;

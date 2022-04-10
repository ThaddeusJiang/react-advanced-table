import React, { FC } from 'react';

export const SearchBar: FC = () => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <select className="select select-bordered w-auto">
          <option disabled selected>
            Select a view
          </option>
        </select>
        <button className=" btn btn-ghost">🗑</button>
      </div>

      <div className="sm:flex sm:justify-between space-y-2">
        <div>
          <input
            type="text"
            placeholder="anything"
            className="input input-bordered w-full"
          />
        </div>

        <div className=" space-x-2">
          <button className="btn btn-outline">Columns</button>
          <button className="btn btn-outline">Filters</button>
          <button className="btn btn-outline">Sorts</button>
        </div>
      </div>
      <div className="sm:flex sm:justify-between space-y-2">
        <div></div>
        <div className=" space-x-2">
          <button className="btn ">Cancel</button>
          <button className="btn ">Save</button>
        </div>
      </div>
    </div>
  );
};

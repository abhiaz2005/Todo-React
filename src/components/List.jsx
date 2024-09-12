import React from "react";

const List = ({tasks,deletehandler}) => {
  return (
    <div className="mt-10 w-1/2 mx-auto ">
      <ul className="text-lg text-white">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between p-2 bg-gray-800 rounded-lg mb-2">
            <span className="px-14 text-xl font-semibold">{task.task}</span>
            <span onClick={()=>deletehandler(index)} className="text-red-600 cursor-pointer font-semibold text-xl px-2">X</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`${
        task.reminder ? "border-l-8 border-l-amber-500" : ""
      } bg-neutral-400 px-3 py-2 rounded-lg mt-5`}
      onClick={() => onToggle(task.id)}
    >
      <div className="flex justify-between items-center">
        <p className="text-neutral-700 text-lg font-semibold">{task.text}</p>
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </div>
      <p className="text-neutral-700">{task.day}</p>
    </div>
  );
}

export default Task;

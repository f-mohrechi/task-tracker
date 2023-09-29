import React, { useState } from "react";
import Input from "./Input";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("text field must not be empty!");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit} className="bg-neutral-700 px-4 py-6 rounded-2xl">
      <Input
        label="task"
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Input
        label="day & time"
        type="text"
        placeholder="Add Day & Time"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />

      <Input
        label="set reminder"
        type="checkbox"
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
      />

      <input
        className="bg-amber-400 px-3 py-1 rounded-xl mt-3 cursor-pointer outline-none"
        type="submit"
        value="Save Task"
      />
    </form>
  );
}

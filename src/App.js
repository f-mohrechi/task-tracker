import { useEffect, useState } from "react";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const getFromServer = await fetchTasks();
      setTasks(getFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const handleAddTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <>
      <div className="px-24 py-10">
        <div className="bg-neutral-500 m-auto px-4 py-6 w-[700px] rounded-2xl">
          <div className="flex items-center justify-between pb-6">
            <h1 className="text-white text-2xl font-semibold">Task Tracker</h1>
            <Button
              bgcolor={showAdd ? "bg-amber-400" : "bg-neutral-200"}
              color={showAdd ? "text-amber-900" : "text-neutral-800"}
              text={showAdd ? "close" : "add"}
              onAdd={() => setShowAdd(!showAdd)}
            />
          </div>

          {tasks.length > 0 ? (
            <Tasks
              onDelete={handleDelete}
              onToggle={toggleReminder}
              tasks={tasks}
            />
          ) : (
            <div className="flex justify-center">
              <p className="text-2xl text-amber-200 font-semibold">
                No Tasks to show!{" "}
              </p>
            </div>
          )}
        </div>

        <div className="mx-auto w-[700px] mt-14 ">
          {showAdd ? (
            <div>
              <AddTask onAdd={handleAddTask} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;

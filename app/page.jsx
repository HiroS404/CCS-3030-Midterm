"use client";
import { useState } from "react";
 

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // function to add the task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // function to mark the task complete
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // function to delete the task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <body className="flex justify-center items-center h-screen bg-gradient-to-r from-yellow-50 to-blue-400 ">
       <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-green-100 dark:bg-gray-800 
       dark:border-gray-700 dark:hover:bg-gray-700 hover:scale-150 
       transition-transform duration-300 hover:shadow-lg">
    <h1 className="text-center font-bold text-4xl pb-5">To-Do List</h1>
    <div className="w-full max-w-md flex">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        className="border border-black-400 pl-5 rounded-lg hover:border-green-400"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask} className="ml-3  p-2 border bg-green-300 rounded-lg hover:bg-green-400" >
        Add Task
      </button>
    </div>

    <ul className="block  mt-6 w-full max-w-md space-y-2">
      {tasks.map((t) => (
        <li key={t.id}>
          <div className="flex items-center text-xl">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTaskCompletion(t.id)}
              className="mr-5 text-red-500 "
            />
            <span
              className={`${
                t.completed ? "line-through text-red-500" : "text-gray-800"
              }`}
            >
              {t.text}
            </span>
          </div>
          <button className=" border bg-red-400 rounded p-1 ml-20 hover:bg-red-500 hover:text-white" onClick={() => deleteTask(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div> </body>
    
  );
}

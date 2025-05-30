import React, { useState } from "react";



function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((l) => [...l, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
     
      <div className="max-w-2xl mx-auto p-4 bg-black rounded-lg shadow-lg mt-32 ">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-500">
          To-Do List
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
          <input
            type="text"
            placeholder={newTask ? "" : "Enter your task"}
            value={newTask}
            onChange={handleInputChange}
            className="w-full sm:w-3/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="w-full sm:w-1/4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
            onClick={() => {
              addTask();
              setNewTask(" "); // Clears input field after adding
            }}
          >
            Add
          </button>
        </div>

        <ol className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-center sm:justify-between bg-white p-3 rounded-lg shadow-sm"
            >
              <span className="text-lg text-red-600 bg-red-100 px-2 py-1 rounded-md w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
                {task}
              </span>

              <div className="flex space-x-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-all"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-200  text-blue-700 px-2 py-1 rounded-lg hover:bg-blue-300 transition-all"
                  onClick={() => moveTaskUp(index)}
                >
                  ☝️
                </button>
                <button
                  className="bg-blue-200 text-blue-700 px-2 py-1 rounded-lg hover:bg-blue-300 transition-all"
                  onClick={() => moveTaskDown(index)}
                >
                  👇
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;

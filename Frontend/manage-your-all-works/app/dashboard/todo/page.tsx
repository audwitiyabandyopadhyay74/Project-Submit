"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Squares from "../../components/Squares";
import { TiTick } from "react-icons/ti";

// Define the type for a task
interface Task {
  _id: string; // Use _id field returned from the backend
  email: string;
  taskname: string;
  description: string;
  time: string;
  date: string;
  status: string;
}

const TodoPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Explicitly define the type of tasks
  const [loading, setLoading] = useState(true);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [newTask, setNewTask] = useState<Task>({
    _id: "",
    email: "user@example.com", // Replace with the logged-in user's email
    taskname: "",
    description: "",
    date: "",
    time: "",
    status: "Pending",
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/todo/all", {
          withCredentials: true,
        });
        setTasks(response.data.todos);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/todo/add",
        {
          ...newTask,
          email: "user@example.com", // Replace with the logged-in user's email
        },
        { withCredentials: true }
      );

      setTasks((prevTasks) => [...prevTasks, response.data.taskDetails]); // Use the task returned from the backend
      setShowAddTaskForm(false); // Close the form after adding the task
      setNewTask({
        _id: "",
        email: "user@example.com",
        taskname: "",
        description: "",
        date: "",
        time: "",
        status: "Pending",
      });
    } catch (error) {
      console.error("Failed to add task:", error);
      alert("Failed to add task");
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      console.log("Deleting task with ID:", id); // Debugging log
      await axios.delete(`http://localhost:5000/api/todo/delete/${id}`, {
        withCredentials: true,
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id)); // Use _id field
    } catch (error) {
      console.error("Failed to delete task:", error);
      alert("Failed to delete task");
    }
  };

  const handleMarkAsComplete = async (id: string) => {
    try {
      console.log("Marking task as complete for ID:", id); // Debugging log
      const response = await axios.post(
        `http://localhost:5000/api/todo/complete/${id}`,
        {},
        { withCredentials: true }
      );
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, status: "Completed" } : task
        )
      );
    } catch (error) {
      console.error("Failed to mark task as complete:", error);
      alert("Failed to mark task as complete");
    }
  };

  const pendingTasks = tasks.filter((task) => task.status === "Pending");
  const completedTasks = tasks.filter((task) => task.status === "Completed");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");

  if (loading) {
    return (
      <>
        <Sidebar />
        <div className="absolute top-[25%] left-1/2 flex flex-col justify-center items-center gap-4">
          <AiOutlineLoading3Quarters className="animate-spin w-[150px] h-[150px]" />
          Loading...
        </div>
      </>
    );
  }

  return (
    <div className="w-screen h-screen flex gap-4">
      <Squares />
      <Sidebar />
      <div className="flex flex-wrap gap-4 p-10 justify-center z-100 items-center h-[100vh] w-screen">
        <div className="todo-tasks bg-white w-[60%] h-[90vh] overflow-y-visible text-black rounded-4xl flex flex-col justify-start items-center gap-4 pt-10 mt-10 p-10">
          <h1 className="text-3xl font-bold flex gap-20 items-center justify-evenly w-full lg:absolute top-20">
            Todo Tasks
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full mb-5 scale-90"
              onClick={() => setShowAddTaskForm(true)}
            >
              <FaPlus className="w-10 h-10 rounded-full scale-70" />
            </button>
          </h1>
          {pendingTasks.length > 0 ? (
            <ul className="space-y-3 top-35 absolute flex flex-col gap-4 p-4">
              {pendingTasks.map((task) => (
                <li
                  key={task._id}
                  className="p-4 bg-white border border-black w-120 h-25 rounded-lg flex gap-4 items-center justify-evenly"
                >
                  <div className="1">
                    <h3 className="text-lg font-bold">{task.taskname}</h3>
                    <p>{task.description}</p>
                  </div>
                  <p>
                    <strong>Due:</strong> {task.date} at {task.time}
                  </p>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded-full mr-2 scale-170"
                    onClick={() => handleMarkAsComplete(task._id)}
                  >
                    <TiTick />
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-full scale-170"
                    onClick={() => handleDeleteTask(task._id)}
                  >
                    <IoMdClose />
                  </button>
                  <div className="stamp">
                    {task.status === "Completed" ? (
                      <h1 className="text-green-500 font-bold">Completed</h1>
                    ) : (
                      <h1 className="text-green-500 font-bold">Pending</h1>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="w-full h-full flex justify-center items-center">
              No pending tasks.
            </p>
          )}
        </div>
      </div>
      {showAddTaskForm && (
        <div className="bg-grey-800 w-screen h-[120vh] absolute flex justify-center items-center bg-[#797575ab] z-100">
          <div className="p-10 bg-white border border-gray-300 rounded-lg mb-5 flex flex-col justify-center gap-4  items-center w-120 h-126 z-100 fixed">
            <span className="text-xl font-semibold mb-3 text-black flex items-center justify-evenly w-full gap-4 ">
              Add New Task{" "}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full scale-110"
                onClick={() => setShowAddTaskForm(false)}
              >
                <IoMdClose />
              </button>
            </span>

            <input
              type="text"
              placeholder="Task Name"
              value={newTask.taskname}
              onChange={(e) =>
                setNewTask({ ...newTask, taskname: e.target.value })
              }
              className="text-black w-[80%] p-2 h-12 mb-3 border-b-black border-b-4 outline-none"
            />
            <textarea
              placeholder="Description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="text-black w-[80%] p-2 h-25 mb-3 border-b-black border-b-4 outline-none"
            />
            <input
              type="date"
              value={newTask.date}
              onChange={(e) =>
                setNewTask({ ...newTask, date: e.target.value })
              }
              className="text-black w-[80%] p-2 h-12 mb-3 border-b-black border-b-4 outline-none"
            />
            <input
              type="time"
              value={newTask.time}
              onChange={(e) =>
                setNewTask({ ...newTask, time: e.target.value })
              }
              className="text-black w-[80%] p-2 h-12 mb-3 border-b-black border-b-4 outline-none"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-3 h-10 w-20 hover:animate-bounce"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoPage;

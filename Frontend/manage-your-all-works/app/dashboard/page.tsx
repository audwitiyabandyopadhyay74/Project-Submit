"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import { TiTick } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

interface Task {
  _id: string;
  taskname: string;
  description: string;
  time: string;
  date: string;
  status: string;
}

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/checkAuth",
          {},
          { withCredentials: true }
        );
        if (response.status === 200) {
          setIsAuthenticated(true);
          fetchTasks();
        }
      } catch (error) {
        console.error("User not authenticated", error);
        router.push("/login");
      }
    };

    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/todo/all", {
          withCredentials: true,
        });
        const tasks = response.data.todos.filter((task: Task) => task.status === "Pending");
        setPendingTasks(tasks);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleMarkAsComplete = async (id: string) => {
    try {
      await axios.post(
        `http://localhost:5000/api/todo/complete/${id}`,
        {},
        { withCredentials: true }
      );
      setPendingTasks((prevTasks) => prevTasks.filter(task => task._id !== id));
    } catch (error) {
      console.error("Failed to mark task as complete:", error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/todo/delete/${id}`, {
        withCredentials: true,
      });
      setPendingTasks((prevTasks) => prevTasks.filter(task => task._id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Pending Tasks</h1>
        <div className="bg-white rounded-lg shadow-md p-4 max-h-[70vh] overflow-y-auto">
          {pendingTasks.length > 0 ? (
            <ul className="space-y-3">
              {pendingTasks.map((task) => (
                <li
                  key={task._id}
                  className="p-3 bg-white border border-gray-200 rounded-lg flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{task.taskname}</h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
                    <p className="text-xs text-gray-500">
                      Due: {task.date} at {task.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleMarkAsComplete(task._id)}
                      className="bg-green-500 text-white p-1 rounded-full hover:bg-green-600"
                    >
                      <TiTick className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task._id)}
                      className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    >
                      <IoMdClose className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No pending tasks</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
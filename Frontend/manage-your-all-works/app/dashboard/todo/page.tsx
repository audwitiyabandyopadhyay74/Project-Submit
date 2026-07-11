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
                <div>
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

    {/* ✅ Keep this inside the main return */}
    {showAddTaskForm && (
      <div className="bg-grey-800 w-screen h-[120vh] absolute flex justify-center items-center bg-[#797575ab] z-100">
        <div className="p-10 bg-white border border-gray-300 rounded-lg mb-5 flex flex-col justify-center gap-4 items-center w-120 h-126 z-100 fixed">
          <span className="text-xl font-semibold mb-3 text-black flex items-center justify-evenly w-full gap-4">
            Add New Task
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

import Todo from "../model/todo.model.js"; // Ensure the correct import

export const addTodoItem = async (req, res) => {
  try {
    const { email, taskname, description, time, date, status } = req.body;
    const taskAdding = new Todo({
      email,
      taskname,
      description,
      time,
      date,
      status,
    });

    await taskAdding.save();
    res.status(201).json({ taskDetails: taskAdding, status: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; // Ensure this closing brace is present

export const updateTodoItem = async (req, res) => {
  try {
    const { id, taskname, taskDescription, time, date, status } = req.body;

    const updatedTask = await Todo.findByIdAndUpdate(
      id, // Use MongoDB's _id field
      { taskname, taskDescription, time, date, status }, // Update fields
      { new: true } // Return the updated document
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getAllTodoItems = async (req, res) => {
  try {
    const todos = await Todo.find(); // Fetch all todo items
    res.status(200).json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const deleteTodoItem = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Request ID:", id);

    const deletedTask = await Todo.findByIdAndDelete(id); // Use MongoDB's _id field
    console.log("Deleted Task:", deletedTask);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully", deletedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const markTaskAsComplete = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Request ID:", id);

    const updatedTask = await Todo.findByIdAndUpdate(
      id, // Use MongoDB's _id field
      { status: "Completed" },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task marked as complete", updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

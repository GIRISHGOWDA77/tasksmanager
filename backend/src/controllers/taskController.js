import Task from "../models/Task.js";

export const createTask = async (req, res, next) => {
  try {
    const payload = { ...req.body };
    if (req.user.role !== "admin") {
      payload.userId = req.user.userId;
    } else {
      if (!payload.userId) payload.userId = req.user.userId;
    }
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().populate("userId", "name email");
    res.json({ success: true, data: tasks });
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id).populate(
      "userId",
      "name email",
    );
    if (!task) {
      const err = new Error("Task not found");
      err.status = 404;
      throw err;
    }
    res.json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const updates = { ...req.body };
    if (req.user.role !== "admin") {
      delete updates.userId;
    }
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTask) {
      const err = new Error("Task not found");
      err.status = 404;
      throw err;
    }
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      const err = new Error("Task not found");
      err.status = 404;
      throw err;
    }
    res.json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const getAllTask = async (req, res, next) => {
  try {
    const filter = req.user.role == admin ? {} : { userId: req.user.userId };
    const tasks = await Task.find(filter).populate("userId", "name email");
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

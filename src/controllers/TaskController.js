import React, { useState } from "react";
import TaskModel from "../models/Task";
import TaskView from "../views/TaskView";

const TaskController = () => {
  const [tasks, setTasks] = useState(TaskModel.getTasks());

  const addTask = (task) => {
    TaskModel.addTask(task);
    setTasks([...TaskModel.getTasks()]);
  };

  const deleteTask = (index) => {
    TaskModel.deleteTask(index);
    setTasks([...TaskModel.getTasks()]);
  };

  return <TaskView tasks={tasks} addTask={addTask} deleteTask={deleteTask} />;
};

export default TaskController;

import React, { useState, useEffect } from "react";
import { AppState } from "react-native";
import TaskModel from "../models/Task";
import TaskView from "../views/TaskView";

const TaskController = () => {
  const [tasks, setTasks] = useState(TaskModel.getTasks());
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      console.log("App state changed:", nextAppState);
      setAppState(nextAppState);
    });

    return () => {
      subscription.remove();
    };
  }, []);

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

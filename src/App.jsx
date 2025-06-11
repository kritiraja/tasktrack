import React from "react";

import "./App.css";
import TaskForm from "./components/taskform";
import TaskColumn from "./components/TaskColumn";
import Target from "./assets/target.png";
import Fire from "./assets/fire.png";
import Checkmark from "./assets/checkmark.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn columnName="To-Do" iconName={Target} />
        <TaskColumn columnName="Doing" iconName={Fire} />
        <TaskColumn columnName="Done" iconName={Checkmark} />
      </main>
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "./features/tasks/taskSlice";
import { TaskForm } from "./features/tasks/TaskForm";
import { TaskList } from "./features/tasks/TaskList";
import { SearchBar } from "./features/tasks/SearchBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks() as any);
  }, []);

  return (
    <div>
      <h1>Team Task Management Hub</h1>
      <TaskForm />
      <SearchBar />
      <TaskList />
    </div>
  );
}

export default App;
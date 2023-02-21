import { useState, useEffect, useCallback, useMemo } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const requestConfig = useMemo(() => {
    return {
      url: "https://react-http-ced8b-default-rtdb.firebaseio.com/tasks.json",
    };
  }, []);

  const transformTasks = useCallback((tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp(requestConfig, transformTasks);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
};

export default App;

import { useEffect } from "react";
import AppBar from "../AppBar/AppBar";
import { Layout } from "../Layout/Layout";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { fetchTasks } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading } from "../../redux/selectors";

const App = () => {  
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList/>
    </Layout>
  )
}

export default App;
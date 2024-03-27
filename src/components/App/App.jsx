import { useEffect } from "react";
import AppBar from "../AppBar/AppBar";
import css from './App.module.css';
import { Layout } from "../Layout/Layout";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { fetchTasks } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/selectors";

const App = () => {  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <p className={css.loading}>Request in progress...</p>}
      <TaskList/>
    </Layout>
  )
}

export default App;
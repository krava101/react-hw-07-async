import { useDispatch } from 'react-redux';
import { IoClose } from "react-icons/io5";
import css from './Task.module.css';
import { deleteTask, toggleCompleted } from '../../redux/tasksSlice';


export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToogle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToogle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <IoClose/>
      </button>
    </div>
  );
};
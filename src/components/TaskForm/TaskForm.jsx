import { addTask } from '../../redux/tasksSlice';
import css from './TaskForm.module.css';
import { useDispatch } from "react-redux";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.elements.text.value) {
      return alert("Field cannot be empty!")
    }
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add</button>
    </form>
  );
};
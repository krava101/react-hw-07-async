import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      task.completed ? acc.completed += 1 : acc.active += 1;
      return acc;
    },
    { active: 0, completed: 0 }
  );

  const percent = (count.completed / (count.completed + count.active) * 100).toFixed(0); 
  const totalPercent = isNaN(percent) ? 0 : percent;
  const progressStyle = { strokeDashoffset: `calc(400 - (375 * ${percent}) / 100)` };

  return (
    <div className={css.wrapper}>
      <div className={css.progress}>
        <svg>
          <circle cx={60} cy={60} r={60}></circle>
          <circle cx={60} cy={60} r={60} style={progressStyle}></circle>
        </svg>
        <p className={css.percent}>{totalPercent}<span>%</span></p>
      </div>
      <div>
        <p>Active: {count.active}</p>
        <p>Completed: {count.completed}</p>
      </div>
    </div>
  );
};
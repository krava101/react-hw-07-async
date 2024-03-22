import { TaskCounter } from '../TaskCounter/TaskCounter';
import { StatusFilter } from '../StatusFilter/StatusFilter';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={css.wrapper}>
      <section>
        <h2>Tasks</h2>
        <TaskCounter/>
      </section>
      <section className={css.filter}>
        <h2>Filter by status</h2>
        <StatusFilter/>
      </section>
    </header>
  )
}
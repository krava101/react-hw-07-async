import css from './StatusFilter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/actions';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <button type='button' onClick={()=>handleFilterChange(statusFilters.all)} selected={filter === statusFilters.all} >All</button>
      <button type='button' onClick={()=>handleFilterChange(statusFilters.active)} selected={filter === statusFilters.active} >Active</button>
      <button type='button' onClick={()=>handleFilterChange(statusFilters.completed)} selected={filter === statusFilters.completed} >Completed</button>
    </div>
  );
};
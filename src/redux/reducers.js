import { combineReducers } from "redux";
import { statusFilters } from "./constants";

const storageTasksKey = "tasks";

const getStorageData = () => {
  const tasksData = window.localStorage.getItem(storageTasksKey);
  return tasksData !== null ? JSON.parse(tasksData) : [];
}   

const tasksReducer = (state = getStorageData(), action) => {
  switch (action.type) {
    case "tasks/addTask":
      window.localStorage.setItem(storageTasksKey, JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case "tasks/deleteTask":
      window.localStorage.setItem(storageTasksKey, JSON.stringify(state.filter(task => task.id !== action.payload)));
      return state.filter(task => task.id !== action.payload);
    case "tasks/toggleCompleted":
      window.localStorage.setItem(storageTasksKey, JSON.stringify(state.map(task => task.id !== action.payload ? task : { ...task, completed: !task.completed })));
      return state.map(task => task.id !== action.payload ? task : { ...task, completed: !task.completed });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
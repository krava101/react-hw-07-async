import { tasksReducer } from "./tasksSlice";
import { filterReducer } from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
  },
});

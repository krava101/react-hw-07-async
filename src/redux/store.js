import { tasksReducer } from "./tasksSlice";
import { filterReducer } from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistTasksConfig = {
  key: 'tasks',
  storage,
}

const persistedTasksReducer = persistReducer(persistTasksConfig, tasksReducer);

export const store = configureStore({
  reducer: {
    tasks: persistedTasksReducer,
    filters: filterReducer,
  },
});

export const persistor = persistStore(store);
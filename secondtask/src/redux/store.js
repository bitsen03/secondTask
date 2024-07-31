import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import { loadState, saveState } from '../help/localStorege'; 

const preloadedState = loadState(); // Загрузка состояния из localStorage

const store = configureStore({
    reducer: {
        task: taskReducer
    },
    preloadedState
});

store.subscribe(() => {
    saveState(store.getState().task); // Сохранение состояния в localStorage при изменении
});

export default store;
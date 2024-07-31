import { createSlice } from '@reduxjs/toolkit';
import getDatesAroundToday from '../help/getDatesAroundToday';
import { saveState, loadState } from '../help/localStorege'; 

const initialState = loadState() || {};
const dates = getDatesAroundToday(0, 6);

dates.forEach(date => {
    if (!initialState[date]) {
        initialState[date] = [];
    }
});

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            const { id, value } = payload;
            if (state[id]) {
                if (value) {
                    state[id].push(value);
                }
            } else if (value){
                state[id] = [value];
            } else {
                state[id] = []
            }
            saveState(state); // Сохраняем состояние в localStorage
        },
        removeTask: (state, { payload }) => {
            const { id, index } = payload;
            state[id].splice(index, 1);
            saveState(state); // Сохраняем состояние в localStorage
        },
        setCompletTask: (state, { payload }) => {
            const { id, index, value } = payload;
            console.log(id, index, value)
            state[id][index].completeTask = value;
            saveState(state); // Сохраняем состояние в localStorage
        },
        updateTask: (state, { payload }) => {
            const { id, index, updates } = payload;
            Object.entries(updates).forEach(([key, value]) => {
                state[id][index][key] = value;
            });
            saveState(state); // Сохраняем состояние в localStorage
        }
    }
});

export const selectTasks = (state) => state.task;
export const selectTasksId = (state, id, index) => state.task[id][index];
export const selectCompletTasksId = (state, id, index) => state.task[id][index].completeTask;
export const { addTask, removeTask, setCompletTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;

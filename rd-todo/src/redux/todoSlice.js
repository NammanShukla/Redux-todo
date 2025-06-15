import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filterText: '',
  filterStatus: 'All',
  selectedTasks: [],
  editIndex: null
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ text: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
    toggleTodo: (state, action) => {
      const task = state.tasks[action.payload];
      if (task) task.completed = !task.completed;
    },
    editTodo: (state, action) => {
      const { index, text } = action.payload;
      state.tasks[index].text = text;
      state.editIndex = null;
    },
    startEdit: (state, action) => {
      state.editIndex = action.payload;
    },
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    toggleSelect: (state, action) => {
      const index = action.payload;
      const isSelected = state.selectedTasks.includes(index);
      state.selectedTasks = isSelected
        ? state.selectedTasks.filter(i => i !== index)
        : [...state.selectedTasks, index];
    },
    deleteSelected: (state) => {
      state.tasks = state.tasks.filter((_, index) => !state.selectedTasks.includes(index));
      state.selectedTasks = [];
    }
  }
});

export const {
  addTodo, deleteTodo, toggleTodo, editTodo, startEdit,
  setFilterText, setFilterStatus, toggleSelect, deleteSelected
} = todoSlice.actions;

export default todoSlice.reducer;

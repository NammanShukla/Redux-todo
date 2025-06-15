import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo, deleteTodo, toggleTodo, editTodo, startEdit,
  toggleSelect, deleteSelected
} from '../redux/todoSlice';
import { useState } from 'react';

export default function TaskManager() {
  const dispatch = useDispatch();
  const { tasks, filterText, filterStatus, selectedTasks, editIndex } = useSelector(s => s.todos);
  const [input, setInput] = useState('');

  const filtered = tasks.filter(t => {
    const match = t.text.toLowerCase().includes(filterText.toLowerCase());
    if (filterStatus === 'Completed') return match && t.completed;
    if (filterStatus === 'Pending') return match && !t.completed;
    return match;
  });

  const handleAdd = () => {
    if (!input.trim()) return;
    editIndex !== null
      ? dispatch(editTodo({ index: editIndex, text: input }))
      : dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div className="task-container">
      <input
        className="input-bar"
        placeholder="Enter a Task"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleAdd} className="add-btn">
        {editIndex !== null ? 'Update Task' : 'Add Task'}
      </button>

      {filtered.map((t, i) => {
        const idx = tasks.indexOf(t);
        return (
          <div key={idx} className="task-item">
            <input
              type="checkbox"
              checked={selectedTasks.includes(idx)}
              onChange={() => dispatch(toggleSelect(idx))}
            />
            <span className={t.completed ? 'completed-task' : ''}>
              {t.text}
            </span>
            <div className="task-buttons">
              <button onClick={() => { dispatch(startEdit(idx)); setInput(t.text); }}>Edit</button>
              <button onClick={() => dispatch(deleteTodo(idx))}>Delete</button>
              <button onClick={() => dispatch(toggleTodo(idx))}>Done</button>
            </div>
          </div>
        );
      })}

      {selectedTasks.length > 0 && (
        <button className="delete-selected" onClick={() => dispatch(deleteSelected())}>
          Delete Selected
        </button>
      )}
    </div>
  );
}

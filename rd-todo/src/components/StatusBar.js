import { useSelector } from 'react-redux';

export default function StatusBar() {
  const { tasks } = useSelector(s => s.todos);
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="status-bar">
      <strong>Total:</strong> {total} | <strong>Completed:</strong> {completed} | <strong>Remaining:</strong> {remaining}
    </div>
  );
}

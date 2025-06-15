import { useDispatch, useSelector } from 'react-redux';
import { setFilterText, setFilterStatus } from '../redux/todoSlice';

export default function Filters() {
  const dispatch = useDispatch();
  const { filterText, filterStatus } = useSelector(s => s.todos);

  return (
    <div className="filter-bar">
      <input
        className="input-bar"
        placeholder="Search Tasks Here"
        value={filterText}
        onChange={e => dispatch(setFilterText(e.target.value))}
      />
      <select
        value={filterStatus}
        onChange={e => dispatch(setFilterStatus(e.target.value))}
      >
        <option>All</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>
    </div>
  );
}

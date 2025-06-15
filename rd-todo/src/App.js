import './styles.css';
import Header from './components/Header';
import Filters from './components/Filters';
import StatusBar from './components/StatusBar';
import TaskManager from './components/TaskManager';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Filters />
      <StatusBar />
      <TaskManager />
    </div>
  );
}

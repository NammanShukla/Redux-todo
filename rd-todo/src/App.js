import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import StatusBar from './components/StatusBar';
import TaskManager from './components/TaskManager';

export default function App() {
  return (
    <>
      <Header />
      <div className="centered-container">
        <div className="app-container">
          <Filters />
          <StatusBar />
          <TaskManager />
        </div>
      </div>
    </>
  );
}

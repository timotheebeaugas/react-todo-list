import { React, useState } from 'react';
import './App.css';
import data from './data.json';

//components
import Header from './Header';
import TaskList from './TaskList';

function App() {
  const [ taskList, setTaskList ] = useState(data);
  return (
    <div className="App">
      <Header />
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;

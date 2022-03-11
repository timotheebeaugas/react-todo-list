import { React, useEffect, useState } from 'react';
import './App.css';
import data from './data.json';

//components
import Header from './Header';
import TaskList from './TaskList';

function App() {
  const [taskList] = useState(data);
  const [dataAPI, setData] = useState(null);

  const fetchData = () => {
    return fetch('https://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((dataAPI) => {
      setData([dataAPI])
    })
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="App">
      <Header />
      <TaskList taskList={taskList} />
      <h1>THIS API IS CONTROLLING MY LIFE</h1>

      {dataAPI &&
        dataAPI.map(({activity}) => (
          <div key={activity}>
            <h3>{activity}</h3>
          </div>
        ))
      }
    </div>
  );
}

export default App;

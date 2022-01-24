import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TodoListupdate from './Components/TodoListupdate';
import CompleteList from './Components/CompleteList';
import ActiveLits from './Components/ActiveLits';
import AddList from './Components/AddList';


function App() {

  const [todoList, settodoList] = useState([
    {
      task: "Create theme",
      status: false
    },
    {
      task: "Work on wordpress",
      status: false
    },
    {
      task: "Organize office main department",
      status: false
    },
    {
      task: "Error solve in HTML template",
      status: false
    },
  ]);

  return <>
    <BrowserRouter>
      <div className="container">
        <h1>ToDo Task</h1>
            <div className="card card-white">
              <div className="card-body">     
              <AddList data={{ todoList,settodoList }} />
                <div className="todo-list">
                  <Routes>
                    <Route path='/active' element={<ActiveLits data={{ todoList,settodoList }} />} />
                    <Route path='/complete' element={<CompleteList data={{todoList, settodoList}} />} />
                    <Route path='/' element={<TodoListupdate data={{ todoList,settodoList}} />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
    </BrowserRouter>
  </>
}

export default App;

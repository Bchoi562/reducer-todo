import logo from './logo.svg';
import './App.css';
import TodoForm from './components/ToDoForm';
import reducer, {initialState} from './reducers/reducer';
import React, {useReducer} from 'react';
import {setItem, setCompleted} from './actions/actions';
import TodoList from './components/TodoList';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>To Do List</h1>
      <TodoForm addToDo={setItem} dispatch={dispatch}/>
      <TodoList formData={state}/>
      </header>
    </div>
  );
}

export default App;

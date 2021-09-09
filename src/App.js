import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  addTodo,
  removeLastTodo,
} from './toolkitRedux/toolkitSlice';

const addAsyncTodo = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(addTodo('ASYNC TODO'));
    }, 2000);
  };
};

const App = () => {
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(removeLastTodo())}>
        Remove last Todo
      </button>
      <button onClick={() => dispatch(addTodo(prompt()))}>Add Todo</button>
      <button onClick={() => dispatch(addAsyncTodo())}>Add Async Todo</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

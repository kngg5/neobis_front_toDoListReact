import React from 'react';
import TodoTaskGet from './components/TodoTaskGet';
import TodoTaskShow from './components/TodoTaskShow';
import './App.css';


function App() {
  
  return (
      <div className="App">
        <TodoTaskGet />
        <TodoTaskShow />
      </div>
  );
}

export default App;

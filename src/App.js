import TodoForm from "./Component/TodoForm"
import TodoDisplay from "./Component/TodoDisplay"
import React from "react";
import "./App.css";



function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    
    
    <div className="app">
      <h3>Todo App</h3>
     
      <TodoForm addTodo={addTodo} />
      <table>
        <thead>
      <tr>
        <th>Sr no</th>
        <th>Task</th>
        <th>status</th>
        <th>Action</th>
      </tr></thead>
      
      <tbody>
        {todos.map((todo, index) => (
          <TodoDisplay key={index} index={index} todo={todo} removeTodo={removeTodo}
          />
        ))}
      </tbody>
      </table>
      
      
    </div>
  );
}

export default App;
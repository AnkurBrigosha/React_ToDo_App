import React from 'react'

export default function TodoDisplay({ todo, index,removeTodo }) {
  const [text, setText] = React.useState('Pending');
 
  function handleChange(event) {
    setText('Completed');
  }
    return (
      <tr>
        <td>{index+1}</td>
        <td>{todo.text}</td>
        
        <td >{text}</td>
        
      
      
        <td>
          
          <button onClick={handleChange}>Complete</button>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </td>
       
      </tr>
      
    );
  }
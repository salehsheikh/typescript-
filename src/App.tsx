import React, { useState } from 'react'
import InputField from './components/InputField';
import { Todo } from './components/Model';
const App:React.FC = () => {
  const[todo,setTodo]=useState<string>("");
  const[todos,setTodos]=useState<Todo[]>([]);
  console.log(todo);
  
  return (
    <div className='App'>
      <span className='heaading'>taskify</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
    
  )
}

export default App;

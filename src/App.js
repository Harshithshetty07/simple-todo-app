
import { useState } from 'react';
import './App.css';

const ToDoElement = ({value, idx, onCompletToDo, removeToDoItem}) => {
  console.log("value: ", value)
  return(
    <li 
    style={{
      backgroundColor: value.isCompleted ? 'red' : 'green',
      color: "white",
    
    }}>
      {value.todo}
      <button onClick={() => onCompletToDo(idx)} className='complete'>
        {(value.isCompleted) ? "complete task" : "task completed"}
      </button>
      <button onClick={() => removeToDoItem(idx)} className='delete'>
      remove todo item
        </button>
      </li>
  )
}




function App() {
const [inputValue, setTodo] = useState({
  todo: "",
  isCompleted: false

})

// Add todo
const [todos, updatedToDoList] = useState([]) 

const addToDo = () => {
  if(inputValue.todo) {
    todos.push(inputValue)
    setTodo({
      todo: "",
      isCompleted: false
    })
  }
}


// Complete Todo
const onCompletToDo = (idx) => {
  const outItem = todos[idx];
  const mTodos = [...todos];
  const updatedItem = {
    ...outItem,
    isCompleted: !outItem.isCompleted
  }
  mTodos[idx] = updatedItem;
  updatedToDoList(mTodos);
}

//Remove button

const removeToDoItem = (idx) => {
  const mTodos = [...todos];
  mTodos.splice(idx, 1);
  updatedToDoList(mTodos);
}





  return (
    <div>
      <input type='text' value={inputValue.todo} placeholder='add to do item' onChange={(e) => setTodo({
        todo: e.target.value,
        isCompleted: false
      })}/>
      <button  onClick={addToDo} className='add'>Add</button>
      <ul>
          {
            todos.length > 0 &&
          todos.map((value, idx) => {
            return(
              <ToDoElement 
              key={value.todo + idx}
              value={value}
               idx={idx}
               onCompletToDo={onCompletToDo}
               removeToDoItem={removeToDoItem} />
            )
          })
        }
        </ul>

    </div>
  );
}

export default App;

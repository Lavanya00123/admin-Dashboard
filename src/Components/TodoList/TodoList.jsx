import React, { useState } from 'react'
import './TodoList.css'
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoList = () => {
   
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [deleteIcon,setDeleteIcon]=useState([])
    const [listContainer,setListContainer]=useState('list-container')
   
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    
    const handleClick = () => {
        if (inputValue===""){
            alert("Please Enter a Daily Schedule")
        }
        else{
            setTodoList([...todoList, {text:inputValue,completed:false}]);
        }
        //setTodoList([...todoList, inputValue]);
        // Clear the inputValue for next input
        setInputValue('');
        // setDeleteIcon([...deleteIcon,RiDeleteBin6Line])
    };

    const handleOnDelete=(index)=>{
        const updatedTodoList = [...todoList];
        updatedTodoList.splice(index, 1);
        setTodoList(updatedTodoList);
    }

    const toggleHandleChecked=(index)=>{
     const updatedTodoList=[...todoList] 
     updatedTodoList[index].completed=!updatedTodoList[index].completed
     setTodoList(updatedTodoList)  
    }
  return (
    <div className='todo-container'>
          <h3>Daily Schedule</h3>
          <div className='input-container'>
        <input type="text" onChange={handleChange} value={inputValue} className='todo-input'/>
         <button onClick={handleClick} className='button'>Add</button>
         </div>
         <div>
          
         <ul >
                    {/* Render each todo item from the todoList array */}
                    
                   
                
                    {todoList.map((todo, index) => (
                      
                        <li key={index} >
                               <div className='list-item-container '>
                               
                            <input type='checkbox' className='checkbox' checked={todo.completed} onChange={()=> toggleHandleChecked(index)}/>
                           <label  className={`${listContainer} ${todo.completed?'completed':''}`} onClick={()=> toggleHandleChecked(index)}>{todo.text}
                          
                        <RiDeleteBin6Line className='delete-icon' onClick={(e)=>{ e.stopPropagation(); handleOnDelete(index)}} />
                        </label> 
                        </div>
                        </li>
                        
                     
                       
                    ))}
                 
                </ul>
         </div>  
        </div>
  ) 
}

export default TodoList
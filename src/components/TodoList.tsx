import React from 'react'
import './TodoList.css';
import { Todo } from './Model';
import SingleTodo from './SingleTodo.tsx';

interface props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos, completedTodos, setCompletedTodos }: props) => {
  return (
    <div className='container'>
      <div className='contain'>
        <div className='todos'>
          <span className='todos-heading'>Active Tasks</span>
          {todos?.map((list, index) => (
           <SingleTodo index={index} list={list} key={list.id} todos={todos} setTodos={setTodos}/>
          ))}
        </div>
       <div className='todos remove'>
         <span className='todos-heading'>Completed Tasks</span>
          {todos?.map((list, index) => (
           <SingleTodo index={index} list={list} key={list.id} todos={completedTodos} setTodos={setCompletedTodos}/>
          ))}
        </div>
      </div>

    </div>
 
  )
}

export default TodoList
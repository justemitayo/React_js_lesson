import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './Model';
import './TodoList.css';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface props {
    list: Todo;
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    index: number
}

const SingleTodo = ({index,list, todos, setTodos }: props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(list.todo)

    const handleDone =(id: number)=>{
        setTodos(
            todos?.map((list) => list.id === id ? {...list, isDone: !list.isDone}: list ))
        
    }
    const handleDelete = (id: number) => {
        setTodos(
            todos?.filter((list) => list.id !== id)
        )
    }
    const handleEdit = ( ) => {
        if(!edit && !list.isDone){
            setEdit(!edit)
        }
    }
    const handleSubmit =(e: React.FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        setTodos(
            prev => prev.map((list) => (list.id === id ? {...list, todo: editTodo}: list))
        )
        setEdit(false)
    }
    // console.log(editTodo)

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect (() => {
        inputRef.current?.focus()
    }, [edit])

  return (
    <form className='todos_single' onSubmit={(e) => handleSubmit(e, list.id)}>
        {
            edit ? (
                <input ref={inputRef} type='text' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='todo-text'/>
            ): (
                list.isDone ?
                (
                    <s className='todos-text'>{list.todo}</s>
                ) : (
                    <span className='todos-text'>{list.todo}</span>
                )
            )
        }
        
        
        <div>
           <span className='icon' onClick={handleEdit}><AiFillEdit /></span> 
           <span className='icon' onClick={() => handleDelete(list?.id)}><AiFillDelete /></span> 
           <span className='icon' onClick={() => handleDone(list?.id)}><MdDone /></span> 
        </div>
    </form>
  )
}

export default SingleTodo
import React  from 'react'
import { useRef } from 'react'
import './InputField.css'


interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className='in'>
        <form className='input' 
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
          }}>
            <input type='input'
              value={todo}
              onChange={(e)=> {setTodo(e.target.value)}}
              placeholder='Enter a task' 
              className='input_box'/>
            <button className='input_submit'>Go</button>
        </form>  
    </div>
 
  )
}
export default InputField
import { addTodo } from "../TodoSlice";
import { useDispatch } from "react-redux";
import React, {useState} from 'react'

function AddTodo() {


  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addTodoHandler(e){
    //test run 
    console.log(e)
    console.log(e.preventDefault())
    
    // useDispatch is used here to send data to store
    dispatch(addTodoHandler(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;

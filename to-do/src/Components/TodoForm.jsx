import { useState } from "react"
import { useTodo } from "../Context"


function TodoForm() {
    const [todo, setTodo] = useState("")
   const {addTodo} = useTodo()
   

    const add = (e)=>{
        e.preventDefault()

        if(!todo) return

        addTodo({todo, completed: false})
        setTodo("")
    }
  return (
    <div>
      <form onSubmit={add}>
        <input type="text" />
        <button>
            Add
        </button>
      </form>
    </div>
  )
  }
  
export default TodoForm

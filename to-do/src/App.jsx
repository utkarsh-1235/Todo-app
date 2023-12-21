import TodoForm from "./Components/TodoForm"
import { TodoProvider } from "./Context/TodoContext"
const todos = ()=>{}
const addTodo = ()=>{}
const updateTodo = ()=>{}
const deleteTodo = ()=>{}
const toggleComplete = ()=>{}

function App() {
 return (
  <TodoProvider values={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-yellow-500">
              <h1 className="font-bold text-4xl text-center mt-2"> Manage Your ToDos</h1>
              <div>
                    <TodoForm/>
              </div>
              <div>
                    {/* ToDoItem */}
              </div>
            </div>
        </div>
  </TodoProvider>
)
}

export default App

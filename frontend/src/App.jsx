
import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  const [todos, setTodos] = useState([]); // state of the app weeye

  useEffect(() => {

    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:3300/todos")
        const json = await res.json();
        setTodos(json.findTodo);
      } catch (e) {
        console.error("error getting on todos ", error);

      }
    }
    fetchTodos();
  }, [])


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>


  )
}

export default App

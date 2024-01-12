import { useState } from 'react'
import "../Todo/Todo.css"

const ToDo = () => {
    const [todos, setTodos] = useState([
        { id: 1, todo: "derse bax!", done: false },
        { id: 2, todo: "code yaz!", done: false },
        { id: 3, todo: "reacti yaxshi oyren!", done: false },
        { id: 4, todo: "dayanmadan code yaz!", done: false },
    ])

    const [newtodo, setNewtodo] = (useState(""))  //yeni todo elave edende  state deyishsin   

    const todoDone = (myId) => {
        const currentTodo = todos.filter((filtirlediyimiztodo) => filtirlediyimiztodo.id === myId)[0]
        currentTodo.done = !currentTodo.done
        setTodos([...todos])
        console.log(todos)
    }
    const createTodo = (e) => {
        e.preventDefault()
        const data = {
            id: todos.length + 1,
            todo: newtodo,
            done: false,
        }
        setTodos([...todos, data]);
        setNewtodo("")
    }
    const deleteTodo = (myId) => {
        const filteredTodos = todos.filter((a) => a.id !== myId)
        setTodos(filteredTodos)
    }

    return (
        <div className='todos-container'>
            <h1>My Todo List</h1>
            <form className='todos-list'>
                <input type="text" placeholder='Add  Todo' value={newtodo} onChange={(e) => setNewtodo(e.target.value)} />
                <button onClick={createTodo}>Add Todo</button>
            </form>

            <ul>   {/*//ul-nin icinde todos-da (state olan todo) olan datalari map edib dovre salib gotureciyik.*/}
                {
                    todos.map(({ id, todo, done }) => {
                        return (
                            <li key={id} className={done ? "done" : ""} >  {/*done true olanda  style ucun yazdigimiz done classi ishe dushsun*/}
                                {todo}      {/*//li-lerin icine yazdirdigimiz*/}
                                <button onClick={() => todoDone(id)}>
                                    {done ? "❌" : "✔"}
                                </button>

                                <button onClick={() => (deleteTodo(id))}>Delete 🗑</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ToDo
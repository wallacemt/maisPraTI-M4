import { createContext, useState } from "react";

export  const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {id: 1, task: 'Fazer compras', completed: false},
        {id: 2, task: 'Estudar', completed: true},
    ])
    const addTodo = (task) => {
        setTodos([...todos, {id: Date.now(), task, completed: false}])
    }
    return (
        <TodoContext.Provider value={{todos, addTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
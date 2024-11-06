import { useContext, useState } from "react";

import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
    const {addTodo} = useContext(TodoContext)

    const [newTask, setNewTask] = useState('')

    const handleAdd = () => {
        addTodo(newTask)
        setNewTask('')
        
    }

    return (
        <div>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Nova Tarefa" />

            <button onClick={handleAdd}>Adicionar</button>
        </div>
    )
}

export default AddTodo
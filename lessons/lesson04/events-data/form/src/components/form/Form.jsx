import React, {useState} from 'react'
import './form.css'
function Form(){
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    const handleInputChange = (event) => {
        setNovaTarefa(event.target.value)
    }

    const handleAddTask = () => {
        if(novaTarefa.trim() === ""){
            return
        }
        setTarefas([...tarefas, {nome: novaTarefa, concluida: false}])
        setNovaTarefa("")
    }

    const handleRemoveTask = (index) => {
        const updatedTask = tarefas.filter((_, i) => i !== index)
        setTarefas(updatedTask)
    }

    const handleToggleTask = (index) => {
        const updatedTask = tarefas.map((tarefa, i) => {
            if(i === index){
                return {...tarefa, concluida: !tarefa.concluida}
            }
            return tarefa
        })
        setTarefas(updatedTask)
    }

    const handleClearCompleted = () => {
        const updatedTask = tarefas.filter(tarefa => !tarefa.concluida)
        setTarefas(updatedTask)
    }

    const handleClearTask = () => {
        const updatedTask = [];
        setTarefas(updatedTask)
    }
    return (
        <div className='container'>
            <h1>Lista de Tarefas</h1>
            <input 
                type="text"
                value={novaTarefa} 
                onChange={handleInputChange}
                placeholder='Digite uma nova tarefa...'
                onBlur={handleAddTask}
            />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
            <ul className='list'>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        <span style={{textDecoration: tarefa.concluida ? 'line-through' : 'none'}}>{tarefa.nome}</span>
                        <button onClick={() => handleToggleTask(index)}>Concluído</button>
                        <button onClick={() => handleRemoveTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleClearCompleted}>Limpar Tarefas Concluídas</button>
            <button onClick={handleClearTask}>Limpar todas Tarefas</button>
        </div>
    )
}
export default Form
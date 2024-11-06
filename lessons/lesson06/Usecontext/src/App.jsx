import { useState } from 'react';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
   <>
      <div>
        <h1>Lista de Tarefas</h1>
        <AddTodo/>
        <TodoList/>
      </div> 
   </>
  );
}

export default App;


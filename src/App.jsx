import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('react-todo-vitalie');
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('react-todo-vitalie', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>React To-Do List – Vitalie 2025</h1>
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Ce mai ai de făcut azi?"
        />
        <button onClick={addTask}>Adaugă</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, i) => (
          <li key={i} className={task.done ? 'done' : ''}>
            <span onClick={() => toggleTask(i)}>{task.text}</span>
            <button className="delete" onClick={() => deleteTask(i)}>✕</button>
          </li>
        ))}
      </ul>
      <p className="footer">Vitalie Moșneag • React 18 • 2025</p>
    </div>
  );
}

export default App;

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

  const toggleTask = (i) => {
    setTasks(tasks.map((t, index) => index === i ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  return (
    <div className="container">
      <h1>React To-Do – Vitalie 2025</h1>
      <div className="input">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addTask()} placeholder="Ce mai ai de făcut azi?" />
        <button onClick={addTask}>Adaugă</button>
      </div>
      <ul className="list">
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
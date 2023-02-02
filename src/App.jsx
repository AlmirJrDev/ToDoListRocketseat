import { useState } from 'react';

import Logo from "../src/assets/logo.svg"
import Create from "../src/assets/create.svg"
import Nothing from "../src/assets/nothing.svg"
import Trash from "../src/assets/trash.svg"
import CheckBox from "../src/assets/checkbox.svg"
import CheckConfirm from "../src/assets/checkconfirm.svg"

import styles from './App.module.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleCreateNewTask = (event) => {
    event.preventDefault();
    setTasks([...tasks, { name: newTask, completed: false }]);
    setNewTask('');
  };

  return (
    <div className={styles.App}>
      <div>
        <img className={styles.logo} src={Logo} alt="" />
      </div>

      <form onSubmit={handleCreateNewTask}>
        <input className={styles.inputtext}
          type="text"
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button className={styles.buttonAdd} type="submit" disabled={!newTask}>Criar <img src={Create} alt="" /></button>
      </form>
      {tasks.length > 0 ? (
        <div>
          <div className={styles.taskCounter}>
            <span className={styles.counterLeft}>Tarefas criadas: <span className={styles.spanicon}>{tasks.length}</span></span>
            <span className={styles.counterRight}>Concluídas: <span className={styles.spanicon}>{tasks.filter(task => task.completed).length}</span> </span>
          </div>
          <div className={styles.tasks}>
            <ul>
              {tasks.sort((a, b) => {
                if (a.completed === b.completed) {
                  return 0;
                }
                if (a.completed) {
                  return 1;
                }
                return -1;
              }).map((task, index) => (
                <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none', opacity: task.completed ? 0.5 : 1 }}>
                  <div className={styles.inputtask}>
                    <button className={styles.imgs} onClick={() => {
                      const newTasks = [...tasks];
                      newTasks[index].completed = !newTasks[index].completed;
                      setTasks(newTasks);
                    }}>
                      <img src={task.completed ? CheckConfirm : CheckBox} alt="" />
                    </button>

                    {task.name}   <button className={styles.imgs} onClick={() => {
                      const newTasks = tasks.filter((_, i) => i !== index);
                      setTasks(newTasks);
                    }}>
                      <img src={Trash} alt="" />
                    </button>
                  </div>

                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (

        <div className={styles.noTaskMessage}>
          <img className={styles.nothing} src={Nothing} alt="" />
          Você ainda não tem tarefas cadastradas
          <br />
          Crie tarefas e organize seus itens a fazer
        </div>
      )}
    </div>
  );
}
export default App;
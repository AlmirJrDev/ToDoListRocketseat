import styles from './Tasks.module.css';

import { taks } from './Container';

import nothing from '../assets/nothing.svg';
import { TaskNew } from './TaskNew';

export function Tasks() {
    return(
        <div className={styles.task}>
      
            <img className={styles.img} src={nothing} alt="" />
            <strong className={styles.strongNothing}>Você ainda não tem tarefas cadastradas</strong>
            <p className={styles.nothingParagrafh}>Crie tarefas e organize seus itens a fazer</p>

            <div>
                {taks.map(comment => {
                    return <TaskNew />
                })}
                
            </div>
        </div>
    )
}
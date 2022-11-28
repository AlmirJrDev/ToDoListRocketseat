import styles from './Nav.module.css'

export function Nav(){
    return (
        <nav>
                <p className={styles.taskCreat}>Tarefas criadas <span>0</span></p> 

                <p className={styles.taskFinished}>Concluidas <span>0</span></p> 

              
        </nav>
    )
}
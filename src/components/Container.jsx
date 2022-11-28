import styles from './Container.module.css';

import create from '../assets/create.svg'

export const taks = [
    1,
    2,
    3,
]


function handleCreateNewTask() {

    event.preventDefault()
    
  }

export function Container() {
    return(
        <div className={styles.container}>
            <form onSubmit={handleCreateNewTask} >              
                    
                <input className={styles.input}
                
                 placeholder='Adicione uma nova tarefa'
                 

                 />
                 <button type='submit' className={styles.button}>Criar <img src={create} alt="" /></button>

                 </form>

                 <div className={styles.line}>

                 </div>

                 
                
        </div>

        
    )
}
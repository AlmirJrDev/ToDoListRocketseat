import styles from './TaskNew.module.css'

export function TaskNew() {
    return(
        <div className={styles.taskInfo}>
            <input className={styles.taskCheck} type="checkbox" name="" id="" />
            <label ></label>
            <p className={styles.infoParagraph}>Olá</p>
        </div>
    )
}
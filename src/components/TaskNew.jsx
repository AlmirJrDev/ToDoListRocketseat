import styles from './TaskNew.module.css'

import circle from '../assets/circle.svg'

import circle2 from '../assets/circle2.svg'



function checkBox() {


   if(check.src === {circle})
    check.src = {circle2}

}




export function TaskNew() {
    return(
        <div className={styles.taskInfo}>
            <img onClick={checkBox} id='check' src={circle} alt="" />
            <label ></label>
            <p className={styles.infoParagraph}>Olá</p>
        </div>
    )
}

import React from 'react'
import und from '../img/undraw.svg'
import styles from '../modules/users.module.css'
import {MenuPU} from '../components/MenuPU'
import { FooterPU } from '../components/FooterPU'

export const Users =() =>{
    return(
        <div className={styles.body}>
             <div className={styles.massg} >
                <p className={styles.text_massg} >Важное сообщение!!</p>
            </div>
            <MenuPU className={styles.menu}></MenuPU>
            <div className={styles.big_conteiner}>
            <p className={styles.text_hi}>Дипломный руководитель</p>
                <div className={styles.conteiner}>
                    <div className ={styles.box2}>
                        <p className={styles.dip_text}>Список всех пользователей</p>
                        <div className={styles.stud_box}>
                            <ul className={styles.studs}>
                                <li className={styles.stud}> ФИО пользователя </li>
                                <li className={styles.stud}> ФИО пользователя </li>
                                <li className={styles.stud}> ФИО пользователя</li>
                                <li className={styles.stud}> ФИО пользователя</li>
                            </ul>
                       
                        </div>
                    </div>
                    <div className={styles.box3}>
                        <div>
                    <p className={styles.dip_text}>Создать нового пользователя</p>
                        <p className={styles.term_text}>Введите данные для создания группы!</p>
                        <div className={styles.box4}>
                        <input name="name" className={`${styles.input} ${styles.input_text}`} placeholder="ФИО"/>
                        <input name="dol" className={`${styles.input} ${styles.input_text}`} placeholder=" Должность"/>
                        <input name="mail" className={`${styles.input} ${styles.input_text}`} placeholder=" Email"/>
                        </div>
                        <button type='submit' className={styles.btn}>
                            <span className={styles.txakk}>Создать</span>  
                        </button> 
                        </div>
                        <img className={styles.contacts_photo} src ={und} alt="Photos"/>
                    </div>
                </div>
                <FooterPU/>
            </div>
        </div>
    )
}
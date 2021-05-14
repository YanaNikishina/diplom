import React from 'react'
import styles from '../modules/SettingProfStud.module.css'
import {Footer} from '../components/Footer'
import {Menu} from '../components/Menu'

export const SettingStud=()=>{
    return(
        <div className={styles.body}>
            <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <Menu className={styles.menu}></Menu>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Редактирование профиля</p>
                <div className={styles.conteiner}>
                    <p className={styles.dip_h2}>Личные данные</p>
                    <div className={styles.dip_box2}>
                        <p className={styles.dip_text1}>Заполни поля ниже для изменения данных.</p>
                        <input  name="fio"  className={`${styles.input} ${styles.input_fio}`} placeholder=" ФИО"/>
                        <input  name="numb" className={`${styles.input} ${styles.input_numb}`} placeholder=" +7"/>
                        <input  name="email" className={`${styles.input} ${styles.input_mail}`} placeholder=" E-mail"/>
                        <button type='submit' className={styles.btn}>
                            <span className={styles.txakk}>Сохранить</span>  
                        </button> 
                    </div>
                    <p className={styles.dip_h2}>Безопасность</p>
                    <div className={styles.dip_box2}>
                        <p className={styles.dip_text1}>Заполни поля ниже для изменения данных.</p>
                        <input  name="pass"  className={`${styles.input} ${styles.input_fio}`} placeholder=" Пароль"/>
                        <input  name="pass2" className={`${styles.input} ${styles.input_mail}`} placeholder=" Повторить пароль"/>
                        <button type='submit' className={styles.btn}>
                            <span className={styles.txakk}>Сохранить</span>  
                        </button> 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
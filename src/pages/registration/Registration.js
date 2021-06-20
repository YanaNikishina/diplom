import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../img/logo.svg'
import styles from '../../modules/registration.module.css'
import {FormStudent} from './FormStudent'
import{FormDipRuc} from './FormDipRuc'
import {registration} from '../../model';

export const Registr = () => {
    const [isStudent, setIsStudent] = useState(true)

    const handleSubmit = (data) => { 
        registration(data).then(msg =>{
            alert(msg)
        })
        .catch(err =>{
            alert( err.response.data.errors[0].msg)
        })
    }

    return(
        <div className ={styles.body}>
            <header className={styles.header}>
                <img src={logo} alt="Logo"/>
            </header>

            <div className={styles.big_conteiner}>
                <div className={styles.conteiner_1}>
                    
                    <div className ={styles.text}>
                        <p className ={styles.bigtext}>
                            Создай свой аккаунт!
                        </p>
                        <p className ={styles.smoltext}>
                            Будь в курсе новостей! 
                        </p>
                    </div>
                    <div className ={styles.text_quest}>
                        <p className ={styles.text_A}>
                            У вас уже есть аккаунт?
                        </p>
                        <p className ={styles.text_B}>
                            Тогда заходите! 
                        </p>
                        <Link to ={'/pages/Avtorisation'}>
                            <button className ={styles.btn_2}><span className ={styles.txakk2}>Авторизация</span></button> 
                        </Link>
                        
                    </div>
                </div>

                <div className={styles.conteiner_2}>
                    <h1 className={styles.h1}>Регистрация</h1>
                    <div className ={styles.check_form}>
                        <div className={styles.cheket}>
                            <p className={styles.stud}>Студент</p> 
                            <label className={styles.switch}>
                                <input 
                                    onClick={() => setIsStudent(!isStudent)}
                                    type="checkbox" 
                                    name="cat" 
                                    id="check-box" 
                                    value="false" 
                                />
                                <span className={`${styles.slider} ${styles.round}`}></span>
                            </label>  
                            <p className={styles.sotr}>Сотрудник</p>
                        </div>
                    </div>
                    {
                        isStudent
                            ? <FormStudent handleSubmit={handleSubmit}/>
                            : <FormDipRuc handleSubmit={handleSubmit}/>
                    }
                </div>
            </div>
        </div>
    );
}


import React, { useState }  from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.svg'
import styles from '../modules/avtoris.module.css'


export const Avtoris =() =>{
    
    const[form, setForm] =useState({
        mail: '',
        pass: ''

    })

    const changeInputHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        };

    const send =()=>{
        console.log(form)
        fetch('', 'POST',{...form},null)
    }
    return(
       
        <div className={styles.body}>
                <header className={styles.header}>
                    <img src={logo} alt="Logo"/>
                </header>

            <div className={styles.big_conteiner}>
                
                <div  className={styles.conteiner_1}>
                        <div className={styles.text}>
                            <p  className={styles.bigtext}>
                                Заходи в свой аккаунт!
                            </p>
                            <p  className={styles.smoltext}>
                                Будь в курсе новостей! 
                            </p>
                        </div>
                        <p  className={styles.text_A}>
                            У вас еще нет аккаунт?
                        </p>
                        <p  className={styles.text_B}>
                            Тогда скорей регистрируйтесь! 
                        </p>
                        <Link to= {'/'}>
                        <button  className={styles.btn_2}>
                          
                            <span className={styles.txakk2}>Регистрация</span>   
                        </button> 
                        </Link>
                </div>

                <form  className={styles.conteiner_2} >
                    <h1 className={styles.h1} >Авторизация</h1>
                    <p  className={styles.text_vvod}> Введите ваши данные для входа в аккаунт.</p>
                    <input  name="mail" 
                    onChange={changeInputHandler} value={form.mail} 
                    className={`${styles.input} ${styles.input_mail}`} placeholder=" E-mail"/>
                    <input  name="pass" 
                    onChange={changeInputHandler} value={form.pass}
                     className={`${styles.input} ${styles.input_pass}`} placeholder=" Пароль"/>
                    <Link to ={'/pages/ForgotPass'} className={styles.forgot_pass}>Забыли пароль?</Link>
                    <Link className={styles.link} to ={'/pages/Dashboard'}>
                    <button type='submit' 
                    onClick={send} 
                    className={styles.btn}>
                        <span className={styles.txakk}>Войти</span>  
                    </button> 
                    </Link>
                </form> 

            </div>
        </div>
    )
    
}

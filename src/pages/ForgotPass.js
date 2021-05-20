import React, { useState }  from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.svg'
import styles from '../modules/forgotPass.module.css'

export const ForgotPass =() =>{
    const[form3, setForm3] =useState({
        gmaill: ''

    })

    const changeInputHandler = (event) => {
        setForm3({...form3, [event.target.name]: event.target.value})
        };

    const send3 =()=>{
        console.log(form3)
        fetch('', 'POST',{...form3},null)
    }

    return(
        <div className={styles.body}>
            <header className={styles.header}>
                <img src={logo} alt="Logo"/>
            </header>
            <div className ={styles.big_conteiner}>
                
                <div className ={styles.conteiner_1}>
                    <div className ={styles.text}>
                        <p className ={styles.bigtext}>
                            Восстановление пароля от аккаунта!
                        </p>
                    </div>
                </div>

                <form className ={styles.conteiner_2}>
                    <h1 className ={styles.h1}>Забыли пароль? </h1>
                        <p className ={styles.text_vvod}> На вашу электронну почту придет новый пароль.</p>
                        <p className ={styles.text_vvod2}> После получения письма перейдите на страницу<Link to={'/pages/Avtorisation'} className ={styles.avtoriz}> Авторизации</Link> и используйте новый пароль.</p>
                        <input type="text" name="gmaill" 
                        onChange={changeInputHandler} value={form3.email} 
                        className={`${styles.input} ${styles.input_mail}`} placeholder=" E-mail"/>
                        <button  onClick={send3}  className ={styles.btn}><span className ={styles.txakk}>Сменить пароль</span></button> 
                    </form> 

            </div>
        </div>
    )

}
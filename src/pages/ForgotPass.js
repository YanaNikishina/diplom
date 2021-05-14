import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.svg'
import styles from '../modules/forgotPass.module.css'

export const ForgotPass =() =>{
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
                    {/* <div className ={styles.text_quest}>
                        <p className ={styles.text_A}>
                           Вы можете вернуться на страницу
                        </p>
                        <p className ={styles.text_B}>
                            Авторизации 
                        </p>
                        <button className ={styles.btn_2}><span className ={styles.txakk2}>Авторизация</span></button> 
                    </div> */}
                </div>

                <form className ={styles.conteiner_2}>
                    <h1 className ={styles.h1}>Забыли пароль? </h1>
                        <p className ={styles.text_vvod}> На вашу электронну почту придет новый пароль.</p>
                        <p className ={styles.text_vvod2}> После получения письма перейдите на страницу<Link to={'/pages/Avtorisation'} className ={styles.avtoriz}> Авторизации</Link> и используйте новый пароль.</p>
                        <input type="text" name="mail" className={`${styles.input} ${styles.input_mail}`} placeholder=" E-mail"/>
                        <button className ={styles.btn}><span className ={styles.txakk}>Сменить пароль</span></button> 
                    </form> 

            </div>
        </div>
    )

}
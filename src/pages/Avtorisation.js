import React,{ useState } from 'react'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'
import logo from '../img/logo.svg'
import styles from '../modules/avtoris.module.css'
import {getProfile, login} from '../model'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';


export const Avtorisation =() =>{

    const history = useHistory();
    const [errMsg, setErrMsg]= useState();

    const handleSubmit = (data) => { 
        login(data).then(msg =>{
            history.push("/")
        })
        .catch(err =>{
            setErrMsg(err.response.data.message);
        })
    }
    getProfile().then(console.log)
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
                        <div className ={styles.text_quest}>
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
                </div>

                <div  className={styles.conteiner_2} >
                    <h1 className={styles.h1} >Авторизация</h1>
                    <p  className={styles.text_vvod}> Введите ваши данные для входа в аккаунт.</p>

                    <Formik
                        initialValues={{  
                            email: 'yan@gmail.com',
                            password: '12345678',
                        }}
                        validationSchema={
                            Yup.object().shape({
                            email: Yup.string().email('Invalid email').required("Отязательно"),
                            password: Yup.string().required("Отязательно").min(8).max(15),
                        })}
                        onSubmit={handleSubmit}  
                    >
                        <Form 
                        onChange={()=>setErrMsg(null)}
                        className={styles.form}>
                            <Field   className={styles.input_mail} placeholder=" E-mail" name="email" type="email" />
                            <ErrorMessage name="email" /> 
                            <Field className={styles.input_pass} placeholder="Пароль" name="password"/>
                            <ErrorMessage name="password" />
                            <Link to ={'/pages/ForgotPass'} className={styles.forgot_pass}>Забыли пароль?</Link>
                            {errMsg && <span> {errMsg} </span>}
                            <button    className={styles.btn} type="submit"><span className={styles.txakk}>Войти</span>  </button>
                        </Form>
                    </Formik>

                    
                </div> 

            </div>
        </div>
    )
    
}

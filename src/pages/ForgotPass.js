import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.svg'
import styles from '../modules/forgotPass.module.css'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import{forgotpass} from '../model'

export const ForgotPass =() =>{
    const handleSubmit = (data) => { 
        forgotpass(data).then(msg =>{
            alert(msg)
        })
        .catch(err =>{
            alert( err.response.data.errors[0].msg)
        })
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

                <div className ={styles.conteiner_2}>
                    <h1 className ={styles.h1}>Забыли пароль? </h1>
                    <p className ={styles.text_vvod}> На вашу электронну почту придет новый пароль.</p>
                    <p className ={styles.text_vvod2}> После получения письма перейдите на страницу<Link to={'/pages/Avtorisation'} className ={styles.avtoriz}> Авторизации</Link> и используйте новый пароль.</p>
                    <Formik
                    initialValues={{  
                        email: 'yan@gmail.com',
                    }}
                    validationSchema={
                        Yup.object().shape({
                        email: Yup.string().email('Invalid email').required("Отязательно"),
                    })}
                    onSubmit={handleSubmit}  
                    >
                        <Form className={styles.form}>
                        <Field className={styles.input_mail} placeholder=" E-mail" name="email" type="email" />
                        <ErrorMessage name="email" /> 
                        <button type="submit" className ={styles.btn}><span className ={styles.txakk}>Сменить пароль</span></button> 
                        </Form>
                    </Formik>
                </div> 
            </div>
        </div>
    )
}
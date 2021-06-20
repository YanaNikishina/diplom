import React, { useEffect, useState } from 'react'
import styles from '../../modules/registration.module.css'
import {getStudentGroups} from '../../model';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';


export const FormDipRuc =(props)=>{

    const [groups, setGroups]= useState([]);

    useEffect(()=>{
        getStudentGroups().then(groups => setGroups(groups))
        
    },[])
    console.log(groups);

    return(
        <Formik
        initialValues={{  
            policy: true,
            role: "DIP.RUC",
            name: "Вербицкая Маргарита Алексеевна",
            email: "kirilkatar@yandex.ru",
            password: "12345678",
            phone: "+7(988)232-11-12",
            company: "ООО МАРГО",
            post: "Директор"
        }}
        validationSchema={Yup.object().shape({
            policy: Yup.bool().oneOf([true], 'Field must be checked'),
            name : Yup.string().required("Обязательно!"),
            email: Yup.string().email('Invalid email').required("Отязательно"),
            password: Yup.string().required("Отязательно").min(8).max(15),
            phone: Yup.string().required("Отязательно"),
            company : Yup.string().required("Обязательно!"),
            post : Yup.string().required("Обязательно!"),


        })}
        onSubmit={props.handleSubmit}        
        >
            <Form className={styles.form}>
                <Field className={styles.input_fio} placeholder="ФИО" name="name"/> 
                <ErrorMessage name="name" /> 
                <Field className={styles.input_company} placeholder=" Компания" type="text" name="company"/> 
                <ErrorMessage name="company" />
                <Field className={styles.input_position} placeholder=" Должность" type="text" name="post"/>
                <ErrorMessage name="post" /> 
                <Field className={styles.input_mail} placeholder="Тел." name="phone" type="phone" />
                <ErrorMessage name="phone" /> 
                <Field className={styles.input_mail} placeholder="Тел." name="phone" type="phone" />
                <ErrorMessage name="phone" /> 
                <Field className={styles.input_mail} placeholder="E-mail" name="email" type="email" />
                <ErrorMessage name="email" /> 
                <Field className={styles.input_pass} placeholder="Пароль" name="password"/>
                <ErrorMessage name="password" /> 
                <div className={styles.check_box}>
                    <Field type="checkbox"  className={styles.custom_checkbox} id="check" name="policy" />
                    <label htmlFor="check"><p className={styles.text_chex}> Я согласен с <span className={styles.text_a}>Политикой обработки персональных даных.</span></p></label>
                    <ErrorMessage name="policy" /> 
                </div>

                <button type ="submit"
                    className={styles.btn}><span className={styles.txakk}>Создать аккаунт</span>
                </button> 
            </Form>
        </Formik>
    )
}
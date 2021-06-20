import React, { useEffect, useState } from 'react'
import styles from '../../modules/registration.module.css'
import {getStudentGroups} from '../../model';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';


export const FormStudent =(props)=>{

    const [groups, setGroups]= useState([]);

    useEffect(()=>{
        getStudentGroups().then(groups => setGroups(groups))
        
    },[])
    console.log(groups);

    return(
        <Formik
            initialValues={{  
                policy: true,
                role : "STUD",
                name : 'Никишина',
                email: 'yan@gmail.com',
                password: '12345678',
                phone: '+7(928) 543-23-34',
                group: '1'
            }}
            validationSchema={Yup.object().shape({
                policy: Yup.bool().oneOf([true], 'Field must be checked'),
                name : Yup.string().required("Обязательно!"),
                email: Yup.string().email('Invalid email').required("Отязательно"),
                password: Yup.string().required("Отязательно").min(8).max(15),
                phone: Yup.string().required("Отязательно"),
                group: Yup.string().required("Отязательно"),

            })}
            onSubmit={props.handleSubmit}        
        >
            <Form className={styles.form}>
                <Field className={styles.input_fio} placeholder="ФИО" name="name"/> 
                <ErrorMessage name="name" /> 
                <Field name="group"className={styles.group} as="select">
                    <option>Выберите группу</option> 
                    {groups.map(group=>(
                        <option value={group.id} key={group.id}>{group.name}</option>  
                    ))}
                </Field>
                <ErrorMessage name="group" /> 
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
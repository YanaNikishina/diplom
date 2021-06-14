import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.svg'
import styles from '../modules/registration.module.css'

import { Formik, Field, Form } from "formik";
export const Registr = () => {

    const [cat, setCat] = useState(true)

    const initialValues = {  
        name: "", 
        group: "", 
        company:"", 
        position:"", 
        tell: "", 
        email: "" 
        ,pass: ""  
    };

    const[form1, setForm1] =useState({
        fio: '',
        group: '',
        numb: '',
        maill: '',
        pas: '',
        сheck: 'false'
    })

    const changeInputHandler1 = (event) => {
        setForm1({...form1, [event.target.name]: event.target.value})
        };

    const send1 =()=>{
                console.log(form1)
                fetch('', 'POST',{...form1},null)
                } 
       


    const[form2, setForm2] =useState({
        fio: '',
        company: '',
        position: '',
        number: '',
        mail: '',
        pass: ''

    })

    const changeInputHandler2 = (event) => {
        setForm2({...form2, [event.target.name]: event.target.value})
        };

    const send2 =()=>{
        console.log(form2)
        fetch('', 'POST',{...form2},null)
    }

    
    
    const handleSubmit = (data) => { 
        // Здесь мы будем отправлять конкретно данные из активной формы 
        const currentData = { 
            mode: "raw", 
            raw: { 
                policy: true, 
                role: cat ? "STUD" : "DIP.RUC", 
                ...data 
            }, 
            options: { 
                raw: { 
                    "language": "json" 
                } 
            } 
        } 
 
        console.log("Form: ", JSON.stringify(currentData)); 
 
        // Тут наш запрос 
        fetch(`https://poks42.ml`, { 
            method: 'POST', 
            headers: {  
            }, 
            body: JSON.stringify(currentData) 
          }) 
        // Получаем ответ и парсим его в json 
            .then(resp => resp.json()) 
        // Здесь, если нужно, мы производим какие-то манипуляции с ответом, либо просто 
        // действия, типа "Регистрация прошла успешно!" 
            .then(resp => { 
                console.log("Answer from server: ", resp); 
            }) 
        // Если что-то пошло не так, ловим ошибку тут и выводим ее в консоль 
            .catch(error => { 
                console.log(error); 
            }); 
    }
    const handleChangeInput = event => {
        const currentData = cat? form1 : form2;
        
        setForm1({...currentData, [event.target.name]: event.target.value})
    };



    
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
                                    onClick={() => setCat(!cat)}
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
                        
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}        
                    >
                        <Form className={styles.form}>
                            <Field   className={styles.input_fio} placeholder=" ФИО" name="name" type="text"
                            // onChange={changeInputHandler} value={form3.email}
                             />    
                            {cat ? ( 
                                    <> 
                                        <select name="group" className={styles.group}> 
                                        <option className={styles.group_option} defaultValue disabled>Выберите группу</option> 
                                        <option>ПОКС-41</option> 
                                        <option>ПОКС-42</option> 
                                        <option>ПОКС-43</option> 
                                        <option>ПОКС-44</option> 
                                    </select> 
                                    </> 
                                ) : (
                                    <> 
                                    <Field className={styles.input_company} placeholder=" Компания" type="text" name="company"/> 
                                    <Field className={styles.input_position} placeholder=" Должность" type="text" name="position"/> 
                                    </>
                                    
                                )}
                            <Field   className={styles.input_mail} placeholder=" Тел." name="tell" type="phone" />
                            <Field   className={styles.input_mail} placeholder=" E-mail" name="email" type="email" />
                            <Field   className={styles.input_pass} placeholder=" Пароль" name="pass" type="text" />
                            
                            <div className={styles.check_box}>
                            <input type="checkbox"  className={styles.custom_checkbox} id="check" name="check" defaultChecked required/>
                            <label htmlFor="check"><p className={styles.text_chex}> Я согласен с <span className={styles.text_a}>Политикой обработки персональных даных.</span></p></label>
                            </div>
                            
                            <button  type ="submit"
                                onSubmit={handleSubmit} 
                                className={styles.btn}><span className={styles.txakk}>Создать аккаунт</span>
                            </button> 
                        </Form>
                    
                    </Formik>
                </div>
            </div>
        </div>
    );
}


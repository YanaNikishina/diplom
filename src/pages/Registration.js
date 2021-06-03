import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.svg'
import styles from '../modules/registration.module.css'

import { Formik, Field, Form } from "formik";
export const Registr = () => {

    const [cat, setCat] = useState(false)

    // const[form1, setForm1] =useState({
    //     fio: '',
    //     group: '',
    //     numb: '',
    //     maill: '',
    //     pas: '',
    //     сheck: 'false'
    // })

    // const changeInputHandler1 = (event) => {
    //     setForm1({...form1, [event.target.name]: event.target.value})
    //     };

    // const send1 =()=>{
    //             console.log(form1)
    //             fetch('', 'POST',{...form1},null)
    //             } 
       


    // const[form2, setForm2] =useState({
    //     fio: '',
    //     company: '',
    //     position: '',
    //     number: '',
    //     mail: '',
    //     pass: ''

    // })

    // const changeInputHandler2 = (event) => {
    //     setForm2({...form2, [event.target.name]: event.target.value})
    //     };

    // const send2 =()=>{
    //     console.log(form2)
    //     fetch('', 'POST',{...form2},null)
    // }

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
                    <div className={ cat ? `${styles.chec_1} ${styles.no_active}` : `${styles.chec_1} ${styles.active}`}> 
                        
                    <Formik
                        initialValues={{ name: "",group: "",tell: "",email: "",pass: "" }}
                        onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        console.log(JSON.stringify(values, null, 2));
                        }}
                    >
                        <Form className={styles.form}>
                            <Field   className={styles.input_fio} placeholder=" ФИО" name="name" type="text" />    
                            <select name="group" className={styles.group}>
                            <option className={styles.group_option} defaultValue disabled>Выберите группу</option>
                            <option>ПОКС-41</option>
                            <option>ПОКС-42</option>
                            <option>ПОКС-43</option>
                            <option>ПОКС-44</option>
                        </select>
                            <Field   className={styles.input_mail} placeholder=" Тел." name="tell" type="phone" />
                            <Field   className={styles.input_mail} placeholder=" E-mail" name="email" type="email" />
                            <Field    className={styles.input_pass} placeholder=" Пароль" name="pass" type="text" />
                        </Form>
                    </Formik>
                        
                        
                        
                        {/* <input type="text" name="fio" 
                        // onChange={changeInputHandler1} value={form1.name} 
                        className={`${styles.input} ${styles.input_fio}`} placeholder=" ФИО"/>
                        <select name="group" 
                        // onChange={changeInputHandler1} value={form1.group} 
                        className={styles.group}>
                            <option className={styles.group_option} defaultValue disabled>Выберите группу</option>
                            <option>ПОКС-41</option>
                            <option>ПОКС-42</option>
                            <option>ПОКС-43</option>
                            <option>ПОКС-44</option>
                        </select>
                        <input type="text" name="numb" 
                        // onChange={changeInputHandler1} value={form1.numb}
                         className={`${styles.input} ${styles.input_numb}`} placeholder=" +7"/>
                        <input type="text" name="maill"
                        //  onChange={changeInputHandler1} value={form1.maill} 
                         className={`${styles.input} ${styles.input_maill}`} placeholder=" E-mail"/>
                        <input type="text" name="pas"
                        //  onChange={changeInputHandler1} value={form1.pas}
                          className={`${styles.input} ${styles.input_pas}`} placeholder=" Пароль"/> */}
                    </div>

                    <div className={ cat ? `${styles.chec_2} ${styles.active}` : `${styles.chec_2} ${styles.no_active}`} >
                        <input type="text" name="fio"
                        //  onChange={changeInputHandler2} value={form2.name} 
                         className={`${styles.input} ${styles.input_fio}`} placeholder=" ФИО"/>
                        <input type="text" name="company" 
                        // onChange={changeInputHandler2} value={form2.company} 
                        className={`${styles.input} ${styles.input_company}`} placeholder=" Компания"/>
                        <input type="text" name="position" 
                        // onChange={changeInputHandler2} value={form2.position}
                        className={`${styles.input} ${styles.input_position}`} placeholder=" Должность"/>
                        <input type="text" name="number" 
                        // onChange={changeInputHandler2} value={form2.number} 
                        className={`${styles.input} ${styles.input_number}`} placeholder=" +7"/>
                        <input type="text" name="mail" 
                        // onChange={changeInputHandler2} value={form2.mail}
                         className={`${styles.input} ${styles.input_mail}`} placeholder=" E-mail"/>
                        <input type="text" name="pass"
                        //  onChange={changeInputHandler2} value={form2.pass} 
                         className={`${styles.input} ${styles.input_pass}`} placeholder=" Пароль"/>
                    </div>
                    <div className={styles.check_box}>
                        <input type="checkbox"  className={styles.custom_checkbox} id="check" name="check" defaultChecked/>
                        <label htmlFor="check"><p className={styles.text_chex}> Я согласен с <span className={styles.text_a}>Политикой обработки персональных даных.</span></p></label>
                    </div>
                    <Link className={styles.link} to ={'/pages/Dashboard'}>
                    <button  type ="button"
                    //  onClick={ (cat && send2) || (send1)} 
                      className={styles.btn}><span className={styles.txakk}>Создать аккаунт</span></button> 
                    </Link>
                </div>
            </div>
        </div>
    );
}


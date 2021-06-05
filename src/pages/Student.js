import React from 'react'
import photo from '../img/photo.svg'
import Avatar1 from '../img/Avatar1.svg'
import Avatar2 from '../img/Avatar2.svg'
import styles from '../modules/student.module.css'
import {MenuPU} from '../components/MenuPU'

import {CircularProgressbar} from "react-circular-progressbar";
import { buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import { FooterPU } from '../components/FooterPU'


export const Stud =() =>{
    const percentage = 44;
    return(
        <div className={styles.body}>
            <div className={styles.massg} >
                <p className={styles.text_massg} >Важное сообщение!!</p>
            </div>
            <MenuPU className={styles.menu}></MenuPU>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Группы и студенты</p>
                <div className={styles.conteiner}>
                    <div className={styles.box_1}>
                            <div className={styles.subject}>
                            <img className={styles.contacts_photo2} src ={Avatar2} alt="Photos"/>
                            <div className={styles.stud_box}> 
                                <p className={styles.subject_text4}>Никишина Яна Евгеньевна</p>
                                <p className={styles.subject_text3}>ПОКС-42</p>
                                <p className={styles.subject_text3}>Год выпуска: -</p>
                            </div>  
                            </div>
                            <div className={styles.subject2}>
                                <p className={styles.contacts_text1}>Твоя тема диплома</p>
                                <p className={styles.subject_text2}>Разработка клиентской части портала дипомников ГБПОУ РО "РКСИ"</p>
                            </div>
                            <div className={styles.contacts}>
                                <div>
                                    <p className={styles.contacts_text1}>Контакты</p>
                                    
                                    <p className={styles.contacts_text2}>Тел.: <span className={styles.sp_cont_t1}> 8 928 768 32 37</span></p>
                                    <p className={styles.contacts_text3}>Email: <span className={styles.sp_cont_t2}> ktoto@gmail.com</span></p>
                                
                                </div>
                            <img className={styles.contacts_photo} src ={photo} alt="Photos"/>
                            </div>
                    </div>
                    <div className={styles.box_3}>
                        <div className={styles.dip_guid}>
                            <p className={styles.dip_guid_text1}>Дипломный руководитель</p>
                            <div className={styles.box_dip_guid}>
                                <img className={styles.dip_guid_photo1} src ={Avatar1} alt="Photos"/>
                                <div>
                                    <p className={styles.dip_guid_text2}>Александра  Александровна</p>
                                    <p className={styles.dip_guid_text3}>8 928 000 00 00</p>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className={styles.class_guid}>
                        <p className={styles.class_guid_text1}>Классный руководитель</p>
                        <div className={styles.box_class_guid}>
                            <img className={styles.class_guid_photo1} src ={Avatar1} alt="Photos"/>
                            <div>
                                <p className={styles.class_guid_text2}>Екатерина Сидорова</p>
                                <p className={styles.class_guid_text3}>8 928 000 00 00</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={styles.percent}>
                        <div>
                            <p className={styles.percent_text1}>Процент готовности диплома студента</p>
                            <div className={styles.stud_box2}> 
                            <img className={styles.percent_img}src ={Avatar2} alt="Photos"/>
                            <p className={styles.percent_text2}>Реализация дипломного проекта студента составляет:</p>
                            </div>
                        </div>  
                        <div className={styles.circularProgressbar}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                strokeWidth={8}
                                styles={buildStyles({
                                    textSize: "20px",
                                    textColor: "#02014A",
                                    pathColor: "#6E17F2",
                                    trailColor: "#C8B7E2 "
                                    
                                    })}
                                />
                        </div>   

                    </div>
                </div>
                <FooterPU/>
            </div>
        </div>
    )
}
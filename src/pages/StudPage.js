import React from 'react'
import styles from '../modules/studPage.module.css'
import {Footer} from '../components/Footer'
import {MenuDR} from '../components/MenuDR'
import photo from '../img/photo.svg'
import Avatar2 from '../img/Avatar2.svg'

import {CircularProgressbar} from "react-circular-progressbar";
import { buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";

export const Student=()=>{
    const percentage = 44;
    return(
        <div className={styles.body}>
            <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <MenuDR className={styles.menu}></MenuDR>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Страница студента</p>
                <div className={styles.conteiner}>
                    <div className={styles.box_1}>

                        <div className={styles.subject}>
                            <img className={styles.contacts_photo2} src ={Avatar2} alt="Photos"/>
                            <div className={styles.stud_box}> 
                                <p className={styles.subject_text2}>Никишина Яна Евгеньевна</p>
                                <p className={styles.subject_text3}>ПОКС-42</p>
                                <p className={styles.subject_text3}>Год выпуска: -</p>
                            </div>  
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

                    <div className={styles.box_4}>
                    <div className={styles.term}>
                            <p className={styles.term_text1}>Материалы на проверку</p>
                            <div className={styles.box_term}>
                                <p className={styles.term_text2}>Ссылка на трелло</p>    
                                <p className={styles.term_text2}>Ссылка на GitHub</p>
                                <p className={styles.term_text2}>Ссылка на гугл док</p>    
                                <p className={styles.term_text2}>Ссылка на Figma</p>
                                <p className={styles.term_text2}>Ссылка на гугл док</p> 
                                <p className={styles.term_text2}>Ссылка на гугл док</p>
                                <p className={styles.term_text2}>Ссылка на гугл док</p>
                            </div>
                        </div>
                        <div className={styles.percent}>
                            <div>
                                <p className={styles.percent_text1}>Процент готовности диплома студента</p>
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
                </div>
            </div>
            <Footer/>
        </div>
    )
}
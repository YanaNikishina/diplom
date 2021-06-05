import React from 'react'
import photo from '../img/photo.svg'
import photo_news from '../img/photo_news.svg'
import Arrow_Right from '../img/Arrow - Right.svg'
import Avatar2 from '../img/Avatar2.svg'
import styles from '../modules/dashboard.module.css'
import {Footer} from '../components/Footer'
import {Menu} from '../components/Menu'

import {CircularProgressbar} from "react-circular-progressbar";
import { buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import { Card } from '../components/Card'

export const Dashboard =() =>{

    const percentage = 44;
    
    return(
        <div className={styles.body}>
            
            <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <Menu className={styles.menu}></Menu>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Привет, Яна!</p>

                <div className={styles.conteiner}>
                    <div className={styles.box_1}>
                        <div className={styles.box01}>
                        <div className={styles.subject}>
                            <p className={styles.subject_text1}>Твоя тема диплома</p>
                            <p className={styles.subject_text2}>Разработка клиентской части портала дипомников ГБПОУ <br/>РО "РКСИ"</p>
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
                        

                        <div className={styles.box_2}>

                            <p className={styles.news_text}>Актуальные новости</p>
                            <div className={styles.box_news}>

                                <div className={styles.news1}>
                                    <img className={styles.news1_photo1} src ={photo_news} alt="Photos"/>
                                    <p className={styles.news1_text1}>Даты защиты ПОКС</p>
                                    <img className={styles.news1_photo2} src ={Arrow_Right} alt="Photos"/>
                                </div>
                                <div className={styles.news2}>
                                    <img className={styles.news2_photo1} src ={photo_news} alt="Photos"/>
                                    <p className={styles.news2_text1}>Новые критерии ВКР</p>
                                    <img className={styles.news2_photo2} src ={Arrow_Right} alt="Photos"/>
                                </div>
                                <div className={styles.news3}>
                                    <img className={styles.news3_photo1} src ={photo_news} alt="Photos"/>
                                    <p className={styles.news3_text1}>Даты защиты ПОКС</p>
                                    <img className={styles.news3_photo2} src ={Arrow_Right} alt="Photos"/>
                                </div>

                            </div>
                            
                            <p className={styles.news_text_end}>Показать все новости</p>
                        </div>

                    </div>


                    <Card className={styles.card}></Card>


                    <div className={styles.box_4}>

                        <div className={styles.term}>
                            
                            <p className={styles.term_text1}>Сроки выполнения дипломной работы</p>
                            <div className={styles.box_term}>
                                <div className={styles.box_term1}>
                                    <p className={styles.term_text2}>До предзащиты проекта остлось</p>
                                    <div className={styles.box_group1}>
                                    <p className={styles.term_text4}>45 <span className={styles.sp_term_text4}>дней</span></p>
                                    </div>    
                                </div>
                                <div className={styles.box_term2}> 
                                    <p className={styles.term_text3}>До защиты проекта осталось</p>
                                    <div className={styles.box_group1}>
                                    <p className={styles.term_text5}>100 <span className={styles.sp_term_text5}>дней</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.percent}>
                            <div>
                            <p className={styles.percent_text1}>Процент готовности твоего диплома</p>
                            <img className={styles.percent_img}src ={Avatar2} alt="Photos"/>
                            <p className={styles.percent_text2}>Реализация твоего дипломного проекта составляет:</p>
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

                <Footer>
                </Footer>
                
            </div>
        </div>
    )
}
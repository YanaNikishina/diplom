import React from 'react'
import {Link} from 'react-router-dom'
import photo from '../img/photo.svg'
import photo_news from '../img/photo_news.svg'
import Arrow_Right from '../img/Arrow - Right.svg'
import styles from '../modules/dashboardDR.module.css'
import {Footer} from '../components/Footer'
import {MenuDR} from '../components/MenuDR'

import {CircularProgressbar} from "react-circular-progressbar";
import { buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";

export const DashboardDR =() =>{
    const percentage = 60;
    return(
        <div className={styles.body}>
            <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <MenuDR className={styles.menu}></MenuDR>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Здравствуйте, Маргарита!</p>
                <div className={styles.conteiner}>
                    <div className={styles.box_1}>

                    <div className={styles.subject}>
                        <p className={styles.subject_text1}>Количество дипломников</p>
                        <p className={styles.subject_text2}>30<span className={styles.spanText}> студентов</span></p>
                    </div>

                    <div className={styles.contacts}>
                    <div>
                        <p className={styles.contacts_text1}>Контакты</p>
                        
                        <p className={styles.contacts_text2}>Тел.: <span className={styles.sp_cont_t1}> 8 918 514 50 94</span></p>
                        <p className={styles.contacts_text3}>Email: <span className={styles.sp_cont_t2}> margo@gmail.com</span></p>
                        
                        </div>
                        <img className={styles.contacts_photo} src ={photo} alt="Photos"/>
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
                    <Link className={styles.link} to ={'/pages/News'}>
                    <p className={styles.news_text_end}>Показать все новости</p>
                    </Link>
                </div>

                    </div>
                    <div className={styles.box_4}>
                        <div className={styles.percent}>
                            <div>
                                <p className={styles.percent_text1}>Процент готовности твоего диплома</p>
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
                        
                        <div className={styles.term}>
                            <p className={styles.term_text1}>Сроки выполнения дипломных работ</p>
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
                        
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}
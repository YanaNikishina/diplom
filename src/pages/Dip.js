import React from 'react'
import {Link} from 'react-router-dom'
import photo from '../img/photo.svg'
import Avatar2 from '../img/Avatar2.svg'
import styles from '../modules/dip.module.css'
import {MenuPU} from '../components/MenuPU'

import {CircularProgressbar} from "react-circular-progressbar";
import { buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import { FooterPU } from '../components/FooterPU'

export const Dip =() =>{
    const percentage = 44;
    return(
        <div className={styles.body}>
            <div className={styles.massg} >
                <p className={styles.text_massg} >Важное сообщение!!</p>
            </div>
            <MenuPU className={styles.menu}></MenuPU>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Дипломный руководитель</p>
                <div className={styles.conteiner}>
                    <div className={styles.box}>
                        <div className={styles.box_1}>
                        <div className={styles.subject}>
                            <img className={styles.contacts_photo2} src ={Avatar2} alt="Photos"/>
                            <div className={styles.stud_box2}> 
                                <p className={styles.subject_text4}>Сидорова Александра </p>
                                <p className={styles.subject_text3}>Дипломный руководитель</p>
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
                    <div className={styles.percent}>
                            <div>
                                <p className={styles.percent_text1}>Средняя готовность всех дипломников</p>
                                <p className={styles.percent_text2}>Процент реальзации дипломных работ всех студентов составляет:</p>
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
                    <div className ={styles.box2}>
                        <p className={styles.dip_text}>Список студентов-дипломников</p>
                        <div className={styles.stud_box}>
                        <div className={styles.box02}>
                        <p className={styles.dip_text2}>2021</p>
                        <ul className={styles.studs}>
                            <Link className={styles.link} to ={'/pages/Student1'}>
                                <li className={styles.stud}> Никишина Я.Е.</li>
                            </Link>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                        </ul>
                        </div>
                        <div className={styles.box02}>
                        <p className={styles.dip_text2}>2020</p>
                        <ul className={styles.studs}>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                        </ul>
                        </div>
                        <div className={styles.box02}>
                        <p className={styles.dip_text2}>2019</p>
                        <ul className={styles.studs}>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                        </ul>
                        </div>
                        <div className={styles.box02}>
                        <p className={styles.dip_text2}>2018</p>
                        <ul className={styles.studs}>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                            <li className={styles.stud}> Никишина Я.Е.</li>
                            <li className={styles.stud}> Мамин Д.И.</li>
                        </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <FooterPU/>
            </div>
        </div>
    )
}
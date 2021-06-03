import React, { useState } from 'react'
import Avatar1 from '../img/Avatar1.svg'
import del from '../img/DeleteW.svg'
import styles from '../modules/dashPU.module.css'
import {Footer} from '../components/Footer'
import {MenuPU} from '../components/MenuPU'

import {CircularProgressbar} from "react-circular-progressbar";
import { buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";

export const DashboardPU =() =>{
    const [cat, setCat] = useState(false)
    const percentage = 44;
    return(
        <div className={styles.body}>
            <div className={styles.massg} >
                <p  className={ cat ? `${styles.text_massg} ${styles.no_active}` : `${styles.text_massg} ${styles.active}`} >Важное сообщение!!</p>
                <img className={styles.del} src ={del} alt="Photos"
                onClick={() => setCat(!cat)}
                type="checkbox" 
                name="cat" 
                id="check-box" 
                value="false" />
            </div>
            <MenuPU className={styles.menu}></MenuPU>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Здравствуйте, Катерина!</p>
                <div className={styles.conteiner}>
                    <div className={styles.box_4}>

                    <div className={styles.term}>
                        <p className={styles.term_text1}>Сроки выполнения дипломной работы</p>
                        <div className={styles.box_term}>
                            <div className={styles.box_term1}>
                                <p className={styles.term_text2}>Всео студентов</p>
                                <div className={styles.box_group1}>
                                <p className={styles.term_text4}>500 </p>
                                </div>    
                            </div>
                            <div className={styles.box_term2}> 
                                <p className={styles.term_text3}>Студентов за год</p>
                                <div className={styles.box_group1}>
                                <p className={styles.term_text5}>100 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.percent}>
                        <div>
                        <p className={styles.percent_text1}>Средняя готовность студентов</p>
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
                    <div className={styles.box_3}>

                    <div className={styles.dip_guid}>
                        <p className={styles.dip_guid_text1}>Пользователь</p>
                        <div className={styles.box_dip_guid}>
                            <img className={styles.dip_guid_photo1} src ={Avatar1} alt="Photos"/>
                            <div>
                                <p className={styles.dip_guid_text2}>Иванова Валерия Викторавна</p>
                                <p className={styles.dip_guid_text3}>8 928 000 00 00</p>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className={styles.class_guid}>
                        <p className={styles.class_guid_text1}>Пользователь</p>
                        <div className={styles.box_class_guid}>
                            <img className={styles.class_guid_photo1} src ={Avatar1} alt="Photos"/>
                            <div>
                                <p className={styles.class_guid_text2}>Иванова Валерия Викторавна</p>
                                <p className={styles.class_guid_text3}>8 928 000 00 00</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.dep_man}>
                        <p className={styles.dep_man_text1}>Пользователь</p>
                        <div className={styles.box_dep_man}>
                            <img className={styles.dep_man_photo1} src ={Avatar1} alt="Photos"/>
                            <div>
                            <p className={styles.dep_man_text2}>Иванова Валерия Викторавна</p>
                            <p className={styles.dep_man_text3}>8 928 000 00 00</p>
                            </div>
                        </div>
                    </div>

                </div>
                    <div className={styles.form}>
                        <p className={styles.term_text1}>Форма редакции важного уведомления</p>
                        <p className={styles.term_text}>Введите данные для создания сообщения!</p>
                        <input name="text" className={`${styles.input} ${styles.input_text}`} placeholder=" Текст сообщения.."/>
                        <button type='submit' className={styles.btn}>
                            <span className={styles.txakk}>Создать</span>  
                        </button> 
                    </div>
                </div>
                <Footer ></Footer>
            </div>
        </div>
    )
}
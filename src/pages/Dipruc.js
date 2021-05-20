import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import sort from '../img/Swap.svg'
import del from '../img/Delete.svg'
import redact from '../img/Redact.svg'
import styles from '../modules/diprucs.module.css'
import {Footer} from '../components/Footer'
import {MenuPU} from '../components/MenuPU'

export const Dipruc =() =>{
    return(
        <div className={styles.body}>
            <div className={styles.massg} >
                <p className={styles.text_massg} >Важное сообщение!!</p>
            </div>
            <MenuPU className={styles.menu}></MenuPU>
            <div className={styles.big_conteiner}>
            <p className={styles.text_hi}>Дипломные руководители</p>
            <div className={styles.conteiner}>
                <div className={styles.box_1}>
                        <div className={styles.big_blok}>
                            <p className={styles.text_box1}>Список всех дипломных руководителей</p>
                            <div className={styles.text2_b}>
                                <p className={styles.text2}>ФИО</p>
                                <p className={styles.text4}>Телефон</p>
                                <p className={styles.text2}>Дипломники</p>
                                <p className={styles.text2}>Действие</p>
                            </div>
                            <div className={styles.box_in}>
                                <div className={styles.text3_b}>
                                    <Link className={styles.link} to ={'/pages/Dipruc'}>
                                    <p className={styles.text3}>Вербицкая</p>
                                </Link>
                                    <p className={styles.text3}>Глушенко</p>
                                    <p className={styles.text3}>Антоненко </p>
                                    
                                </div>
                                <div className={styles.text4_b}>
                                    <p className={styles.text3}>8 928 456 12 23</p>
                                    <p className={styles.text3}>8 928 767 84 53</p>
                                    <p className={styles.text3}>8 928 267 14 53</p>
                                    
                                    
                                </div>
                                <div className={styles.text3_b}>
                                    <p className={styles.text3}>30</p>
                                    <p className={styles.text3}>20</p>
                                    <p className={styles.text3}>10</p>
                                    
                                </div>
                                <div className={styles.text5_b}>
                                    <div className={styles.box_red}>
                                        <img className={styles.del} src ={redact} alt="Photos"/>
                                        <img className={styles.del} src ={redact} alt="Photos"/>
                                        <img className={styles.del} src ={redact} alt="Photos"/>
                                        
                                    </div>
                                    <div className={styles.box_red}>
                                        <img className={styles.del} src ={del} alt="Photos"/>
                                        <img className={styles.del} src ={del} alt="Photos"/>
                                        <img className={styles.del} src ={del} alt="Photos"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className={styles.box2}>
                    <div className={styles.sort}>
                        <div className={styles.box_sort}>
                        <img className={styles.sortimg} src ={sort} alt="Photos"/>
                        <p className={styles.text_sort}>Сортировать<br/> группы</p>
                        </div>
                        <div className={styles.sortil}>
                        <p className={styles.term_text}>По алфавиту</p>
                        <p className={styles.term_text}>В обратном порядке</p>
                        <p className={styles.term_text}>По кол-ву дипломников</p>
                        </div>
                    </div>
                            
                </div>
            </div>
            <Footer/>
            </div>
        </div>
    )
}
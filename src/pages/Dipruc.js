import React from 'react'
import {Link} from 'react-router-dom'
import sort from '../img/Swap.svg'
import del from '../img/Delete.svg'
import styles from '../modules/diprucs.module.css'
import {MenuPU} from '../components/MenuPU'
import { FooterPU } from '../components/FooterPU'

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
                                <p className={styles.text4}>Дипломники</p>
                                <p className={styles.text2}>Действие</p>
                            </div>
                            <div className={styles.box_in}>
                                <div className={styles.text3_b}>
                                    <Link className={styles.link} to ={'/pages/Dipruc'}>
                                    <p className={styles.text3}> Иванов</p>
                                </Link>
                                    <p className={styles.text3}>Александров</p>
                                    <p className={styles.text3}>Петров </p>
                                    
                                </div>
                                <div className={styles.text4_b}>
                                    <p className={styles.text3}>8 928 000 00 00</p>
                                    <p className={styles.text3}>8 928 000 00 00</p>
                                    <p className={styles.text3}>8 928 000 00 00</p>
                                    
                                    
                                </div>
                                <div className={styles.text6_b}>
                                    <p className={styles.text3}>5</p>
                                    <p className={styles.text3}>3</p>
                                    <p className={styles.text3}>2</p>
                                    
                                </div>
                                <div className={styles.text5_b}>
                                    <div className={styles.box_red}>
                                        <img  className={styles.del} src ={del} alt="Photos"/>
                                        <img  className={styles.del} src ={del} alt="Photos"/>
                                        <img  className={styles.del} src ={del} alt="Photos"/>
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
            <FooterPU/>
            </div>
        </div>
    )
}
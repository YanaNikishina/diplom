import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../modules/students.module.css'
import {Footer} from '../components/Footer'
import {MenuDR} from '../components/MenuDR'

export const Students=()=>{
    return(
        <div className={styles.body}>
            <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <MenuDR className={styles.menu}></MenuDR>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Студенты</p>
                <div className={styles.conteiner}>
                    <div className={styles.dip_box2}>
                        <p className={styles.dip_text}>Список студентов-дипломников</p>
                        <div className={styles.stud_box}>
                        <div>
                        <p className={styles.dip_text2}>2021</p>
                        <ul className={styles.studs}>
                            <Link className={styles.link} to ={'/pages/Student'}>
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
                        <div>
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
                        <div>
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
                        <div>
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
            </div>
            <Footer/>
        </div>
    )
}
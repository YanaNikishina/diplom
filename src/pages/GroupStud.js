import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import del from '../img/Delete.svg'
import redact from '../img/Redact.svg'
import styles from '../modules/groupstud.module.css'
import sort from '../img/Swap.svg'
import filtr from '../img/Filter.svg'
import {Footer} from '../components/Footer'
import {MenuPU} from '../components/MenuPU'

export const GroupStud =() =>{
    const [cat, setCat] = useState(1)
    return(
        <div className={styles.body}>
            <div className={styles.massg} >
                <p className={styles.text_massg} >Важное сообщение!!</p>
            </div>
            <MenuPU className={styles.menu}></MenuPU>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Группы и студенты</p>
                <div className={styles.conteiner}>
                    <div className={styles.cheing}>
                        <p className={styles.text}
                         onClick={() => setCat(1)}
                         type="button" 
                         name="cat" 
                         id="button" 
                         value="false">Группы</p>
                        <p className={styles.text}
                         onClick={() => setCat(2)}
                         type="button" 
                         name="cat" 
                         id="button" 
                         value="false">Студенты</p>
                    </div>
                    <div>
                        <div className= { cat===1 ? `${styles.box01} ${styles.active}` : `${styles.box01} ${styles.no_active}`}>
                            <div className={styles.box1}>
                                <div className={styles.big_blok}>
                                    <p className={styles.text_box1}>Список всех групп</p>
                                    <div className={styles.text2_b}>
                                        <p className={styles.text2}>Группа</p>
                                        <p className={styles.text2}>Руководитель</p>
                                        <p className={styles.text2}>Год выпуска</p>
                                        <p className={styles.text2}>Действие</p>
                                    </div>
                                    <div className={styles.box_in}>
                                        <div className={styles.text3_b}>
                                            <p className={styles.text3}>ПОКС-41</p>
                                            <p className={styles.text3}>ПОКС-42</p>
                                            <p className={styles.text3}>ПОКС-43</p>
                                            <p className={styles.text3}>ПОКС-44</p>
                                        </div>
                                        <div className={styles.text4_b}>
                                            <p className={styles.text3}>Ревнивцева О.А</p>
                                            <p className={styles.text3}>Ревнивцева О.А</p>
                                            <p className={styles.text3}>Ревнивцева О.А</p>
                                            <p className={styles.text3}>Ревнивцева О.А</p>
                                        </div>
                                        <div className={styles.text3_b}>
                                            <p className={styles.text3}>2021</p>
                                            <p className={styles.text3}>2021</p>
                                            <p className={styles.text3}>2021</p>
                                            <p className={styles.text3}>2021</p>
                                        </div>
                                        <div className={styles.text5_b}>
                                            <div className={styles.box_red}>
                                                <img className={styles.del} src ={redact} alt="Photos"/>
                                                <img className={styles.del} src ={redact} alt="Photos"/>
                                                <img className={styles.del} src ={redact} alt="Photos"/>
                                                <img className={styles.del} src ={redact} alt="Photos"/>
                                            </div>
                                            <div className={styles.box_red}>
                                                <img className={styles.del} src ={del} alt="Photos"/>
                                                <img className={styles.del} src ={del} alt="Photos"/>
                                                <img className={styles.del} src ={del} alt="Photos"/>
                                                <img className={styles.del} src ={del} alt="Photos"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.big_blok2 }>
                                    <p className={styles.text_box2}>ПОКС-42</p>
                                    <p className={styles.text2_box}>Количество студентов 20</p>
                                    <div className={styles.text2_b}>
                                        <p className={styles.text2}>ФИО</p>
                                        <p className={styles.text2}>Телефон</p>

                                        <p className={styles.text2}>Действие</p>
                                    </div>
                                    <div className={styles.box_in2}>
                                        <div className={styles.text3_b}>
                                            <p className={styles.text3}>Мамин Д.И</p>
                                            <p className={styles.text3}>Никишина Я.Е</p>
                                            <p className={styles.text3}>Алешина В.В</p>
                                            <p className={styles.text3}>Аджан М.А</p>
                                        </div>
                                        <div className={styles.text4_b}>
                                            <p className={styles.text3}>8 928 456 65 34</p>
                                            <p className={styles.text3}>8 928 456 65 34</p>
                                            <p className={styles.text3}>8 928 456 65 34</p>
                                            <p className={styles.text3}>8 928 456 65 34</p>
                                        </div>
                                        <div className={styles.text5_b}>
                                            <div className={styles.box_red}>
                                                <img className={styles.del} src ={redact} alt="Photos"/>
                                                <img className={styles.del} src ={redact} alt="Photos"/>
                                                <img className={styles.del} src ={redact} alt="Photos"/>
                                                <img className={styles.del} src ={redact} alt="Photos"/>
                                            </div>
                                            <div className={styles.box_red}>
                                                <img className={styles.del} src ={del} alt="Photos"/>
                                                <img className={styles.del} src ={del} alt="Photos"/>
                                                <img className={styles.del} src ={del} alt="Photos"/>
                                                <img className={styles.del} src ={del} alt="Photos"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.form}>
                                    <p className={styles.text_box1}>Форма редакции важного уведомления</p>
                                    <p className={styles.term_text}>Введите данные для создания группы!</p>
                                    <input name="name" className={`${styles.input} ${styles.input_text}`} placeholder=" Название группы"/>
                                    <input name="ruc" className={`${styles.input} ${styles.input_text}`} placeholder=" Классный руководитель"/>
                                    <input name="year" className={`${styles.input} ${styles.input_text}`} placeholder=" Год выпуска"/>
                                    <button type='submit' className={styles.btn}>
                                        <span className={styles.txakk}>Создать</span>  
                                    </button> 
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
                                    </div>
                                </div>
                                <div className={styles.filtr}>
                                <div className={styles.box_sort}>
                                    <img className={styles.sortimg} src ={filtr} alt="Photos"/>
                                    <p className={styles.text_sort}>Отфильтровать<br/> группы</p>
                                    </div>
                                    <div className={styles.sortil}>
                                    <p className={styles.term_text}>Год выпуска</p>
                                        <div className={styles.sortyear}>
                                        <p className={styles.textyear}>2021</p>
                                        <p className={styles.textyear}>2020</p>
                                        <p className={styles.textyear}>2019</p>
                                        <p className={styles.textyear}>2018</p>
                                        </div>
                                    <p className={styles.term_text}>Руководитель группы</p>
                                    <div className={styles.sortruc}>
                                        <p className={styles.textruc}>Ревнивцева О.А</p>
                                        <p className={styles.textruc}>Шлюпкина А. И</p>
                                        </div>
                                    <p className={styles.term_text}>По группе</p>
                                        <div className={styles.sortruc}>
                                            <p className={styles.textruc}>ПОКС-41</p>
                                            <p className={styles.textruc}>ПОКС-42</p>
                                            <p className={styles.textruc}>ПОКС-43</p>
                                            <p className={styles.textruc}>ПОКС-44</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className= { cat===2 ? `${styles.boxe01} ${styles.active}` : `${styles.boxe01} ${styles.no_active}`}>
                        <div className={styles.box1}>
                            <div className={styles.big_blok}>
                                <p className={styles.text_box1}>Список всех студентов</p>
                                <div className={styles.text2_b}>
                                    <p className={styles.text2}>ФИО</p>
                                    <p className={styles.text2}>Группа</p>
                                    <p className={styles.text2}>Статус</p>
                                    <p className={styles.text2}>Действие</p>
                                </div>
                                <div className={styles.box_in}>
                                    <div className={styles.text3_b}>
                                     <Link className={styles.link} to ={'/pages/StudentUP'}>
                                        <p className={styles.text3}>Никишина Я.Е</p>
                                    </Link>
                                        <p className={styles.text3}>Мамин Д.И</p>
                                        <p className={styles.text3}>Алешина В.В</p>
                                        <p className={styles.text3}>Аджян М. А</p>
                                        <p className={styles.text3}>Яровенко Д.С</p>
                                        <p className={styles.text3}>Осипенко В.С</p>
                                        <p className={styles.text3}>Черепухин В.В</p>
                                        
                                    </div>
                                    <div className={styles.text4_b}>
                                        <p className={styles.text3}>ПОКС-42</p>
                                        <p className={styles.text3}>ПОКС-42</p>
                                        <p className={styles.text3}>ПОКС-42</p>
                                        <p className={styles.text3}>ПОКС-44</p>
                                        <p className={styles.text3}>ПОКС-41</p>
                                        <p className={styles.text3}>ПОКС-41</p>
                                        <p className={styles.text3}>ПОКС-43</p>
                                        
                                    </div>
                                    <div className={styles.text3_b}>
                                        <p className={styles.text3}>Активен</p>
                                        <p className={styles.text3}>Активен</p>
                                        <p className={styles.text3}>Активен</p>
                                        <p className={styles.text3}>Активен</p>
                                        <p className={styles.text3}>Неактивен</p>
                                        <p className={styles.text3}>Активен</p>
                                        <p className={styles.text3}>Неактивен</p>
                                    </div>
                                    <div className={styles.text5_b}>
                                        <div className={styles.box_red}>
                                            <img className={styles.del} src ={redact} alt="Photos"/>
                                            <img className={styles.del} src ={redact} alt="Photos"/>
                                            <img className={styles.del} src ={redact} alt="Photos"/>
                                            <img className={styles.del} src ={redact} alt="Photos"/>
                                            <img className={styles.del} src ={redact} alt="Photos"/>
                                            <img className={styles.del} src ={redact} alt="Photos"/>
                                            <img className={styles.del} src ={redact} alt="Photos"/>
                                        </div>
                                        <div className={styles.box_red}>
                                            <img className={styles.del} src ={del} alt="Photos"/>
                                            <img className={styles.del} src ={del} alt="Photos"/>
                                            <img className={styles.del} src ={del} alt="Photos"/>
                                            <img className={styles.del} src ={del} alt="Photos"/>
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
                                </div>
                            </div>
                            <div className={styles.filtr}>
                            <div className={styles.box_sort}>
                                <img className={styles.sortimg} src ={filtr} alt="Photos"/>
                                <p className={styles.text_sort}>Отфильтровать<br/> группы</p>
                                </div>
                                <div className={styles.sortil}>
                                <p className={styles.term_text}>Руководитель группы</p>
                                <div className={styles.sortruc}>
                                    <p className={styles.textruc}>Ревнивцева О.А</p>
                                    <p className={styles.textruc}>Шлюпкина А. И</p>
                                    </div>
                                <p className={styles.term_text}>По группе</p>
                                    <div className={styles.sortruc}>
                                        <p className={styles.textruc}>ПОКС-41</p>
                                        <p className={styles.textruc}>ПОКС-42</p>
                                        <p className={styles.textruc}>ПОКС-43</p>
                                        <p className={styles.textruc}>ПОКС-44</p>
                                    </div>
                                </div>
                                

                            </div>
                            <button className ={styles.btn2}><span className ={styles.txakk2}>Печать </span></button>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer className={styles.footer}></Footer>
            </div>
        </div>
    )
}
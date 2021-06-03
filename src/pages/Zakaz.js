import React,{useState} from 'react'
import styles from '../modules/zakaz.module.css'
import {Footer} from '../components/Footer'
import {MenuPU} from '../components/MenuPU'
import del from '../img/Delete.svg'

export const Zakaz=()=>{
    const [answer1, setAnswer1] = useState(false)
    const [answer2, setAnswer2] = useState(false)
    const [answer3, setAnswer3] = useState(false)
    const [answer4, setAnswer4] = useState(false)
    const [answer5, setAnswer5] = useState(false)
    return(
        <div className={styles.body}>
             <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <MenuPU className={styles.menu}></MenuPU>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Заявки от заказчиков</p>
                
                
                <div className={styles.conteiner}>
                    <div className={styles.quest}>
                    <div className={styles.dip_box2}>
                    <div className={styles.box_red}>
                        <p className={styles.text1}>Тема заявки</p>
                        <img className={styles.del} src ={del} alt="Photos"/>
                    </div>
                        <div className= {answer1 ? `${styles.dip_text1} ${styles.active}`:`${styles.dip_text1} ${styles.no_active}`}>
                            <p className={styles.text}>Компания</p>
                            <p className={styles.answer}>Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком.</p>
                            <p className={styles.term_text}>Вы можете оставить комментарий</p>
                            <input name="name" className={`${styles.input} ${styles.input_text}`} placeholder="Комментарий.."/>
                            <button type='submit' className={styles.btn}>
                            <span className={styles.txakk}>Прокоментировать</span>  
                        </button> 
                            </div>
                        <p className={styles.dip_text2} onClick={() => setAnswer1(!answer1)}>Подробнее</p>
                     </div>
                    <div className={styles.dip_box2}>
                    <div className={styles.box_red}>
                        <p className={styles.text1}>Тема заявки</p>
                       
                        <img className={styles.del} src ={del} alt="Photos"/>
                    </div>
                    <div className= {answer2 ? `${styles.dip_text1} ${styles.active}`:`${styles.dip_text1} ${styles.no_active}`}>
                            <p className={styles.text}>Компания</p>
                            <p className={styles.answer}>Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком.</p>
                            <p className={styles.term_text}>Вы можете оставить комментарий</p>
                            <input name="name" className={`${styles.input} ${styles.input_text}`} placeholder="Комментарий.."/>
                            <button type='submit' className={styles.btn}>
                            <span className={styles.txakk}>Прокоментировать</span>  
                        </button> 
                            </div>
                        <p className={styles.dip_text2} onClick={() => setAnswer2(!answer2)}>Подробнее</p>
                    </div>
                    <div className={styles.dip_box2}>
                    <div className={styles.box_red}>
                        <p className={styles.text1}>Тема заявки</p>
                        
                        <img className={styles.del} src ={del} alt="Photos"/>
                    </div>
                    <div className= {answer3 ? `${styles.dip_text1} ${styles.active}`:`${styles.dip_text1} ${styles.no_active}`}>
                            <p className={styles.text}>Компания</p>
                            <p className={styles.answer}>Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком.</p>
                            <p className={styles.term_text}>Вы можете оставить комментарий</p>
                            <input name="name" className={`${styles.input} ${styles.input_text}`} placeholder="Комментарий.."/>
                            <button type='submit' className={styles.btn}>
                            <span className={styles.txakk}>Прокоментировать</span>  
                        </button> 
                            </div>
                        <p className={styles.dip_text2} onClick={() => setAnswer3(!answer3)}>Подробнее</p>
                    </div>
                    <div className={styles.dip_box2}>
                    <div className={styles.box_red}>
                        <p className={styles.text1}>Тема заявки</p>
                        
                        <img className={styles.del} src ={del} alt="Photos"/>
                    </div>
                    <div className= {answer4 ? `${styles.dip_text1} ${styles.active}`:`${styles.dip_text1} ${styles.no_active}`}>
                            <p className={styles.text}>Компания</p>
                            <p className={styles.answer}>Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком.</p>
                            <p className={styles.term_text}>Вы можете оставить комментарий</p>
                            <input name="name" className={`${styles.input} ${styles.input_text}`} placeholder="Комментарий.."/>
                            <button type='submit' className={styles.btn}>
                            <span className={styles.txakk}>Прокоментировать</span>  
                        </button> 
                            </div>
                        <p className={styles.dip_text2} onClick={() => setAnswer4(!answer4)}>Подробнее</p>
                    </div>
                    <div className={styles.dip_box2}>
                    <div className={styles.box_red}>
                        <p className={styles.text1}>Тема заявки</p>
                        
                        <img className={styles.del} src ={del} alt="Photos"/>
                    </div>
                    <div className= {answer5 ? `${styles.dip_text1} ${styles.active}`:`${styles.dip_text1} ${styles.no_active}`}>
                            <p className={styles.text}>Компания</p>
                            <p className={styles.answer}>Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком.</p>
                            <p className={styles.term_text}>Вы можете оставить комментарий</p>
                            <input name="name" className={`${styles.input} ${styles.input_text}`} placeholder="Комментарий.."/>
                            <button type='submit' className={styles.btn}>
                            <span className={styles.txakk}>Прокоментировать</span>  
                        </button> 
                            </div>
                        <p className={styles.dip_text2} onClick={() => setAnswer5(!answer5)}>Подробнее</p>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
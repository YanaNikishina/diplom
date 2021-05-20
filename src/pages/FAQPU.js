import React,{useState} from 'react'
import styles from '../modules/faq.module.css'
import {Footer} from '../components/Footer'
import {MenuPU} from '../components/MenuPU'
import del from '../img/Delete.svg'
import redact from '../img/Redact.svg'

export const FAQPU=()=>{
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
                <p className={styles.text_hi}>Вопрос ответ</p>
                <p className={styles.text}>Здесь собраны самые частозадаваемые вопросы. Весь список вопросов можно найти в нашей группе ВКонтакте - <span className={styles.spantext}>“ПОКС Диплом”</span>.</p>
                
                <div className={styles.conteiner}>
                    <div className={styles.quest}>
                    <div className={styles.dip_box2}>
                    <div className={styles.box_red}>
                        <p className={styles.text1}>Какой то вопрос</p>
                        <img className={styles.red} src ={redact} alt="Photos"/>
                        <img className={styles.del} src ={del} alt="Photos"/>
                    </div>
                        <p className= {answer1 ? `${styles.dip_text1} ${styles.active}`:`${styles.dip_text1} ${styles.no_active}`}>Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком.</p>
                        <p className={styles.dip_text2} onClick={() => setAnswer1(!answer1)}>Ответ</p>
                    </div>
                    <div className={styles.dip_box2}>
                    <div className={styles.box_red}>
                        <p className={styles.text1}>Какой то вопрос</p>
                        <img className={styles.red} src ={redact} alt="Photos"/>
                        <img className={styles.del} src ={del} alt="Photos"/>
                    </div>
                        <p className= {answer2 ? `${styles.dip_text1} ${styles.active}`:`${styles.dip_text1} ${styles.no_active}`}>Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком.</p>
                        <p className={styles.dip_text2} onClick={() => setAnswer2(!answer2)}>Ответ</p>
                    </div>
                    <div className={styles.dip_box2}>
                    <div className={styles.box_red}>
                        <p className={styles.text1}>Какой то вопрос</p>
                        <img className={styles.red} src ={redact} alt="Photos"/>
                        <img className={styles.del} src ={del} alt="Photos"/>
                    </div>
                        <p className= {answer3 ? `${styles.dip_text1} ${styles.active}`:`${styles.dip_text1} ${styles.no_active}`}>Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком.</p>
                        <p className={styles.dip_text2} onClick={() => setAnswer3(!answer3)}>Скрыть ответ</p>
                    </div>
                    <div className={styles.dip_box2}>
                    <div className={styles.box_red}>
                        <p className={styles.text1}>Какой то вопрос</p>
                        <img className={styles.red} src ={redact} alt="Photos"/>
                        <img className={styles.del} src ={del} alt="Photos"/>
                    </div>
                        <p className= {answer4 ? `${styles.dip_text1} ${styles.active}`:`${styles.dip_text1} ${styles.no_active}`}>Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком.</p>
                        <p className={styles.dip_text2} onClick={() => setAnswer4(!answer4)}>Скрыть ответ</p>
                    </div>
                    <div className={styles.dip_box2}>
                    <div className={styles.box_red}>
                        <p className={styles.text1}>Какой то вопрос</p>
                        <img className={styles.red} src ={redact} alt="Photos"/>
                        <img className={styles.del} src ={del} alt="Photos"/>
                    </div>
                        <p className= {answer5 ? `${styles.dip_text1} ${styles.active}`:`${styles.dip_text1} ${styles.no_active}`}>Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком. Какой то очень длинный и развернутый ответ на вопрос понятным языком.</p>
                        <p className={styles.dip_text2} onClick={() => setAnswer5(!answer5)}>Скрыть ответ</p>
                    </div>
                    </div>
                    <div className={styles.categor}>
                    <p className={styles.dip_text}>Критерии</p>
                        <div className={styles.catqw}>
                            <p className={styles.dip_text1}>Тестирование</p>
                            <p className={styles.dip_text3}>ПЗ</p>
                            <p className={styles.dip_text3}>Документы</p>
                            <p className={styles.dip_text3}>Разработка</p>
                            <p className={styles.dip_text3}>Защита</p>
                            <p className={styles.dip_text3}>Другое</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
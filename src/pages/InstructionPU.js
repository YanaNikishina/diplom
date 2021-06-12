import React, {useState}from 'react'
import styles from '../modules/instruction.module.css'
import {MenuPU} from '../components/MenuPU'
import redact from '../img/Redact.svg'
import { FooterPU } from '../components/FooterPU'

export const InstructPU=()=>{
    const [cat, setCat] = useState(1)

    return(
        <div className={styles.body}>
             <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <MenuPU className={styles.menu}></MenuPU>
            <div className={styles.big_conteiner}>
            <p className={styles.text_hi}>Инструкции</p>
                <div className={styles.conteiner}>
                    
                    <div className={styles.dip_box1}>
                        <div className={styles.subject}>
                            <p className={styles.subject_text1}>Твоя тема диплома</p>
                            <p className={styles.subject_text2}>Разработка клиентской части портала дипомников ГБПОУ <br/>РО "РКСИ"</p>
                        </div> 
                        <div className={styles.check1}>
                            <p className={styles.subject_text1}>Критерии ВКР</p>
                            <p className={styles.subject_text2}>Все просто и<br/> понятно </p>
                        </div> 
                        <div className={styles.check2}>
                            <p className={styles.subject_text1}>Написание ПЗ</p>
                            <p className={styles.subject_text2}>Пиши ПЗ легко и просто</p>
                        </div> 
                        <div className={styles.material}>
                            <p className={styles.subject_text1}>Преддипломная <br/> практика</p>
                            <p className={styles.subject_text2}>Что ты должен <br/>знать.</p>
                        </div> 
                        <div className={styles.dip_ruc}>
                            <p className={styles.subject_text1}>Твой дипломный руководитель</p>
                            <p className={styles.subject_text2}>Как правильно найти соего дипломного руководителя</p>
                        </div> 
                        <div className={styles.tema_dip}>
                            <p className={styles.subject_text1}>Тема твоего диплома</p>
                            <p className={styles.subject_text2}>Выбери свою тему дипломного проекта! </p>
                        </div> 
                        <div className={styles.present_dip}>
                            <p className={styles.subject_text1}>Презинтация диплома</p>
                            <p className={styles.subject_text2}>Как правильно и грматно создать презинтацию</p>
                        </div> 
                        <div className={styles.defens_dip}>
                            <p className={styles.subject_text1}>Защита диплома</p>
                            <p className={styles.subject_text2}>Чего ожидать к <br/>чему готовится</p>
                        </div> 
                    </div>
                    <p className={styles.dip_h2}>Критерии выпускной квалификационной работы</p>
                    
                    


                    <div className={ cat===1 ? `${styles.dip_box2} ${styles.active}` : `${styles.dip_box2} ${styles.no_active}`} >
                        <div className={styles.box_red}>
                        <p className={styles.dip_text}>Общие требования и критерии ВКР:</p>
                        <img  className={styles.del} src ={redact} 
                        onClick={() => setCat(2)}
                        alt="Photos"/>
                        </div>
                        <p className={styles.dip_text1}>Самым важным критерием успеха разработки ПП является соответсвие готового продукта его предназначению, а также достижению при этом определенных целей в проекте. Другими словами разработанный Программный продукт должен соотвествовать теме диплома, целям самого проекта и конечно заданию от заказчика.
                        </p>
                        <p className={styles.dip_text}>Критерии для разработки ПП:</p>
                        <p className={styles.dip_text1}>Критерии разработки это некий перечень требований, которые ты должен выполнить при написании своего дипломного проекта. <br/>Все требования были написаны с пояснениями, различными определениями и вспомогательными ссылками, которые помогут тебе в понимании и написании проекта.</p>
                        <p className={styles.dip_text1}>Актуальные критерии для твоего дипломного проекта можно посмотреть в гугл документе.</p>
                        <p className={styles.dip_text1}>Ссылка на гугл док</p>
                    </div>

                    <form className={ cat===2 ? `${styles.dip_box2} ${styles.active}` : `${styles.dip_box2} ${styles.no_active}`}>
                    <p className={styles.text_form}>Форма редактирования</p>
                    <input type="text" name="h1" className={styles.input} placeholder="Общие требования и критерии ВКР:"/>
                    <textarea type="text" name="text1" className={styles.input2} defaultValue="Самым важным критерием успеха разработки ПП является соответсвие готового продукта его предназначению, а также достижению при этом определенных целей в проекте. Другими словами разработанный Программный продукт должен соотвествовать теме диплома, целям самого проекта и конечно заданию от заказчика.
                    Критрии для разработки ПП:
                    Критерии разработки это некий перечень требований, которые ты должен выполнить при написании своего дипломного проекта.Все требования были написаны с пояснениями, различными определениями и вспомогательными ссылками, которые помогут тебе в понимании и написании проекта.
                    Актуальные критерии для твоего дипломного проекта можно посмотреть в гугл документе.">
                    </textarea>
                    <button   
                    onClick={() => setCat(1)}
                    className ={styles.btn}><span className ={styles.txakk}>Сохрнить</span></button> 
                    </form>
                    
                    <p className={styles.dip_h2}>Написание пояснительной записки</p>
                    
                    <div className={styles.dip_box3}>
                        <div className={styles.box_red}>
                            <p className={styles.dip_text}>Требования к написанию ПЗ:</p>
                            <img  className={styles.del} src ={redact} alt="Photos"/>
                        </div>
                        <p className={styles.dip_text1}>Самым важным критерием успеха разработки ПП является соответсвие готового продукта его предназначению, а также достижению при этом определенных целей в проекте. Другими словами разработанный Программный продукт должен соотвествовать теме диплома, целям самого проекта и конечно заданию от заказчика.
                        </p>
                        <p className={styles.dip_text}>Критерии для разработки ПП:</p>
                        <p className={styles.dip_text1}>Критерии разработки это некий перечень требований, которые ты должен выполнить при написании своего дипломного проекта. <br/>Все требования были написаны с пояснениями, различными определениями и вспомогательными ссылками, которые помогут тебе в понимании и написании проекта.</p>
                        <p className={styles.dip_text1}>Актуальные критерии для твоего дипломного проекта можно посмотреть в гугл документе.</p>
                        <p className={styles.dip_text1}>Ссылка на гугл док</p>
                    </div>
                </div>   
            </div>
            <FooterPU/>
        </div>
    )
}
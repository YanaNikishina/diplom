import React from 'react'
import styles from '../modules/document.module.css'
import {MenuPU} from '../components/MenuPU'
import photo from '../img/photo.svg'
import paper from '../img/Paper.svg'
import del from '../img/Delete.svg'
import { FooterPU } from '../components/FooterPU'


export const DocumentsPU=()=>{
    return(
        <div className={styles.body}>
            <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <MenuPU className={styles.menu}></MenuPU>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Документы</p>
                
                <div className={styles.conteiner}>
                    <p className={styles.dip_h2}>Шаблоны документов, ГОСТб порядок сшивки диплома</p>
                    <div className={styles.divbox}>
                    <div className={styles.dip_box2}>
                        <p className={styles.dip_text1}>Ниже представлены шаблоны всех документах, которые потребуются при написании дипломной работы.</p>
                        <div className={styles.doc}>
                            <div className={styles.icon}>
                                <img className={styles.icon_photo} src ={paper} alt="Photos"/>
                                <p className={styles.dip_text}>Титульный лист.pdf</p>
                                <img className={styles.del} src ={del} alt="Photos"/>
                                
                            </div>
                            <div className={styles.icon}>
                                <img className={styles.icon_photo} src ={paper} alt="Photos"/>
                                <p className={styles.dip_text}>Титульный лист.pdf</p>
                                <img className={styles.del} src ={del} alt="Photos"/>
                            </div>
                            <div className={styles.icon}>
                                <img className={styles.icon_photo} src ={paper} alt="Photos"/>
                                <p className={styles.dip_text}>Титульный лист.pdf</p>
                                <img className={styles.del} src ={del} alt="Photos"/>
                            </div>
                            <div className={styles.icon}>
                                <img className={styles.icon_photo} src ={paper} alt="Photos"/>
                                <p className={styles.dip_text}>Титульный лист.pdf</p>
                                <img className={styles.del} src ={del} alt="Photos"/>
                            </div>
                            <div className={styles.icon}>
                                <img className={styles.icon_photo} src ={paper} alt="Photos"/>
                                <p className={styles.dip_text}>Титульный лист.pdf</p>
                                <img className={styles.del} src ={del} alt="Photos"/>
                            </div>
                            <div className={styles.icon}>
                                <img className={styles.icon_photo} src ={paper} alt="Photos"/>
                                <p className={styles.dip_text}>Титульный лист.pdf</p>
                                <img className={styles.del} src ={del} alt="Photos"/>
                            </div>
                            <div className={styles.icon}>
                                <img className={styles.icon_photo} src ={paper} alt="Photos"/>
                                <p className={styles.dip_text}>Титульный лист.pdf</p>
                                <img className={styles.del} src ={del} alt="Photos"/>
                            </div>
                            <div className={styles.icon}>
                                <img className={styles.icon_photo} src ={paper} alt="Photos"/>
                                <p className={styles.dip_text}>Титульный лист.pdf</p>
                                <img className={styles.del} src ={del} alt="Photos"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subject}>
                        <p className={styles.dip_text1}>Порядок сшивки дипломного проекта</p>
                        <div className={styles.boxflex}>
                        <div className={styles.div_content}>
                            <p className={styles.dip_text2}>1.Титульный лист</p>
                            <p className={styles.dip_text2}>2.Задание</p>
                            <p className={styles.dip_text2}>3.Отзыв</p>
                            <p className={styles.dip_text2}>4.Рецензия</p>
                            <p className={styles.dip_text2}>5.Содержание</p>
                            <p className={styles.dip_text2}>6.Пояснительная записка</p>
                        </div>
                        <img className={styles.contacts_photo} src ={photo} alt="Photos"/>
                        </div>
                    </div> 
                    <div className={styles.check1}>
                        <p className={styles.dip_text1}>ГОСТ документов</p>
                        <p className={styles.dip_text3}>Для сдачи дипломной работы  необходимо уметь правильно оформлять документы.</p>
                        <p className={styles.dip_text4}>Для этого необходимо ознакомится с правилами оформления документациив соответствии с ГОСТом, которые находятся в рзделе Инструкции.</p>
                    </div> 
                    </div>
                </div>
            </div>
            <FooterPU/>
        </div>
    )
}
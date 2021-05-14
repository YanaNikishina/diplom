import React from 'react'
import styles from '../modules/document.module.css'
import {Footer} from '../components/Footer'
import {Menu} from '../components/Menu'
import photo from '../img/photo.svg'

export const Documents=()=>{
    return(
        <div className={styles.body}>
            <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <Menu className={styles.menu}></Menu>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Документы</p>
                
                <div className={styles.conteiner}>
                    <p className={styles.dip_h2}>Шаблоны документов, ГОСТб порядок сшивки диплома</p>
                    <div className={styles.divbox}>
                    <div className={styles.dip_box2}>
                        <p className={styles.dip_text1}>Здесь вы можете найти шаблоны всех документов начиная с Титульного листа и заканчивая справкой о внедрении</p>
                        <p className={styles.dip_text}>Критерии для разработки ПП:</p>
                        <p className={styles.dip_text1}>Критерии разработки это некий перечень требований, которые ты должен выполнить при написании своего дипломного проекта. <br/>Все требования были написаны с пояснениями, различными определениями и вспомогательными ссылками, которые помогут тебе в понимании и написании проекта.</p>
                        <p className={styles.dip_text1}>Актуальные критерии для твоего дипломного проекта можно посмотреть в гугл документе.</p>
                        <p className={styles.dip_text1}>Ссылка на гугл док</p>
                    </div>
                    <div className={styles.subject}>
                        <p className={styles.dip_text1}>Порядок сшивки дипломного проекта</p>
                        <div className={styles.boxflex}>
                        <div className={styles.div_content}>
                            <p className={styles.dip_text2}>1.Титульный лист</p>
                            <p className={styles.dip_text2}>2.Содержание</p>
                            <p className={styles.dip_text2}>3.Пояснительная     записка</p>
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
            <Footer></Footer>
        </div>
    )
}
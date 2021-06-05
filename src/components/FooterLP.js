import React from 'react'
import styles from '../modules/footerLP.module.css'
import logo2 from '../img/logo2.svg'
import vk from '../img/vkontakte.svg'
import ytub from '../img/youtube2.svg'
import inst from '../img/instagram.svg'

export const FooterLP =()=>{
    return(
        <div className={styles.footer}>
           <header className={styles.header}>
                <img src={logo2} alt="Logo"/>
            </header>
            <div className ={styles.big_conteiner}>
                <div className={styles.box1}>
                    <a href='https://www.rksi.ru/'>
                    <p className={styles.box1_text1}>
                        Ростовский-на-Дону колледж связи и информатики
                    </p>
                    </a>
                    
                    <div className={styles.ul2}> 
                        <a href='https://vk.com/pkcu_college'>
                        <img className={styles.back1} src={vk}alt="Фото 6"/></a>
                        <a href='https://www.youtube.com/channel/UCCQx7F4dRY_LcsRrJcZYGDQ'>
                        <img className={styles.back} src={ytub}alt="Фото 6"/></a>
                        <a href='https://www.instagram.com/rksi_ru/'>
                        <img className={styles.inst} src={inst}alt="Фото 6"/></a>
                    </div> 
                </div>
                <div className={styles.box_flex}>
                    <div className={styles.box2}>
                    <div className={styles.kont}>
                        <p className={styles.kontakts}>Наши контакты</p>
                        <div>
                        <p className={styles.li2} >+7 000 000 00 00</p>
                        <p className={styles.li2}>+7 000 000 00 00</p>
                        <p className={styles.li2} >Email.com</p>
                        </div>
                    </div>
                    <div className={styles.kont}>
                        <p className={styles.kontakts}>Мы находимся</p>
                        <div>
                        <p className={styles.li2} >Ростов-на-Дону</p>
                        <p className={styles.li2}>ул.Тургеневская 10/6</p>
                        </div>
                    </div>
                        
                    </div>
                    <div className={styles.box3}>
                    <p className={styles.box1_text2}>
                    © Государственное бюджетное профессиональное образовательное учреждение Ростовской области «Ростовский-на-Дону колледж связи и информатики»
                <br/>Разработка: Никишина Яна и Мамин Даниэль
                    </p>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
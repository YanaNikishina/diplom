import React from 'react'
import styles from '../modules/LP.module.css'
import Logo from '../img/Лого.svg'
import Group_11 from '../img/Group_11.svg'
import Group_22 from '../img/Group_22.svg'
import Group_3 from '../img/Group_3.svg'
import Group_4 from '../img/Group_4.svg'
import Group_5 from '../img/Group_5.svg'
import Group_6 from '../img/Group_6.svg'

import li1 from '../img/1.svg'
import li2 from '../img/2.svg'
import li3 from '../img/3.svg'
import li4 from '../img/4.svg'
import li5 from '../img/5.svg'
import li6 from '../img/6.svg'
import li7 from '../img/7.svg'
import li8 from '../img/8.svg'

import backimg from '../img/Фон.svg'
import phot from '../img/Rectangle.svg'

import {FooterLP} from '../components/FooterLP'

export const LandPag=()=>{
    return(
        <div className={styles.body}>
             <header className={styles.header} >
                <div className={styles.conteiner}>
                    <div className={styles.logo1}>
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className={styles.text_IT}>
                    <h1>Соберём IT-команду для вашего проекта</h1>
                    <p className={styles.text_p}>Примите участие в пилотном проекте Ростовского-на-Дону колледжа связи и информатики, оставьте заявку на подбор
                    группы студентов для реализации ваших задач.</p>
                    </div>
                    <form className={styles.btn_form}>
                        <button className={styles.btn2}>
                            <p className={styles.btn_text}>Оставить заявку</p>
                        </button>
                    </form>
                </div>
             </header>
             <div className={styles.section_1}>
                <div className={styles.conteiner}>
                <h2 className={styles.h2}>Варианты работ</h2>
                <p className={styles.text_s1}>
                    В рамках дипломного проекта студенты — выпускники лучшего IT-колледжа помогут вам качественно и бесплатно (оплата по желанию) реализовать:
                </p>
                <div className={styles.typ_jobs}>
                <div className={styles.job_1}>
                    <img className={styles.icon_1} src={Group_11} alt="Фото 1"/>
                    <p className={styles.tj_1}> 
                        Сайт, Landing Page или Web-сервис
                    </p>
                </div>
                <div className={styles.job_2}>
                    <img className={styles.icon_2} src={Group_22}alt="Фото 2"/>
                    <p className={styles.tj_2}>
                        Разработать мобильное приложение или игру
                    </p>
                </div>
                <div className={styles.job_3}>
                    <img className={styles.icon_3} src={Group_3}alt="Фото 3"/>
                    <p className={styles.tj_3}>
                        Разработать платформу для тестирования или сервис для опроса
                    </p>
                </div>

                <div className={styles.job_4}>
                    <img className={styles.icon_4} src={Group_4}alt="Фото 4"/>
                    <p className={styles.tj_4}>
                        Спроектировать локальную сеть компании
                    </p>
                </div>
                <div className={styles.job_5}>
                    <img className={styles.icon_5} src={Group_5}alt="Фото 5"/>
                    <p className={styles.tj_5}>
                        Создать и внедрить желаемые системы и сервисы
                    </p>
                </div>
                <div className={styles.job_6}>
                    <img className={styles.icon_6} src={Group_6}alt="Фото 6"/>
                    <p className={styles.tj_6}>
                        Организовать информационную безопасность
                    </p>
                </div>
                </div>
                </div> 
             </div>
             <div className={styles.section_2}>
                <div className={styles.conteiner}>
                <h2 className={styles.h22}>Как это работает?</h2>
                <div className={styles.typ_jobs2}>
                <div className={styles.steps01}>
                    <div className={styles.step1}>
                        <img className={styles.icon_1} src={li1} alt="Фото 1"/>
                        <p className={styles.ts_1}> 
                        Заказчик оставляет заявку. Подробно описывает что конкретно должен содержать его продукт.
                        </p>
                    </div>
                    <div className={styles.step2}>
                        <img className={styles.icon_2} src={li2}alt="Фото 2"/>
                        <p className={styles.ts_2}>
                        С заказчиком связывается сотрудник колледж и уточняет заявленные требоввания путем небольшого опроса.
                        </p>
                    </div>
                    <div className={styles.step3}>
                        <img className={styles.icon_3} src={li3}alt="Фото 3"/>
                        <p className={styles.ts_3}>
                        После этого  колледж подбирает команду студентов.
                        </p>
                    </div>
                    <div className={styles.step4}>
                    <img className={styles.icon_4} src={li4}alt="Фото 4"/>
                    <p className={styles.ts_4}>
                    Команда  так же связывается с заказчиком и проводит интервью.
                    </p>
                </div>
                </div>
                <div className={styles.steps02}>
                <div className={styles.step5}>
                    <img className={styles.icon_5} src={li5}alt="Фото 5"/>
                    <p className={styles.ts_5}>
                    На основании результата интерьвью команда формерует ТЗ .
                    </p>
                </div>
                <div className={styles.step6}>
                    <img className={styles.icon_6} src={li6}alt="Фото 6"/>
                    <p className={styles.ts_6}>
                    Далее  команда студентов начинает разработку заказа.
                    </p>
                </div>
                <div className={styles.step7}>
                    <img className={styles.icon_6} src={li7}alt="Фото 6"/>
                    <p className={styles.ts_7}>
                    Как только продукт уже готов его отдают заказчику, для внедрения в производство.
                    </p>
                </div>
                <div className={styles.step8}>
                    <img className={styles.icon_6} src={li8}alt="Фото 6"/>
                    <p className={styles.ts_8}>
                    Завершающим этапом является защита дипломной работы.
                    </p>
                </div>
                </div>
                </div>
                </div>
            </div>

            <div className={styles.section_3}>
                <div className={styles.conteiner}>
                <h2 className={styles.h22}>Работы студентов</h2>
                <div className={styles.example}>
                        <img className={styles.ex} src={phot}alt="Фото 6"/>
                        <img className={styles.ex} src={phot}alt="Фото 6"/>  
                        <img className={styles.ex} src={phot}alt="Фото 6"/>
                        <img className={styles.ex} src={phot}alt="Фото 6"/>
                        <img className={styles.ex} src={phot}alt="Фото 6"/>
                        <img className={styles.ex} src={phot}alt="Фото 6"/>
                </div>
                </div>
            </div>

            <div className={styles.section_4}>
                <div className={styles.conteiner}>
                    <div className={styles.part}>
                    <div className={styles.photo}>
                    <img className={styles.back2} src={backimg}alt="Фото 6"/>
                    </div>
                    <div className={styles.forma}>
                        <h2 className={styles.h2}>Оставить заявку</h2>
                        <p className={styles.text_s2}>
                           Заполните форму и мы свяжемся с вами в ближайшее время
                        </p>
                        <input type="text" name="fiozak" className={`${styles.input} ${styles.input_fio}`} placeholder=" ФИО"/>
                        <input type="text" name="phon" className={`${styles.input} ${styles.input_phon}`} placeholder=" +7"/>
                        <textarea type="textarea" name="mass" className={`${styles.textarea} ${styles.textarea_mass}`} placeholder=" Расскажите о задании"/>
                        <div className={styles.check_box}>
                        <input type="checkbox"  className={styles.custom_checkbox} id="check" name="check" defaultChecked/>
                        <label htmlFor="check"><p className={styles.text_chex}> Я согласен с <span className={styles.text_a}>Политикой обработки персональных даных.</span></p></label>
                        
                    </div>
                    <button  type ="button" className={styles.btn}><span className={styles.txakk}>Отправить</span></button> 
                    </div>
                    </div>
                </div>
            </div>

            <FooterLP></FooterLP>
        </div>
    )
}
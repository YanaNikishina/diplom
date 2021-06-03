import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import styles from '../modules/menu.module.css'
import Avatar1 from '../img/Avatar1.svg'
import Icon1 from '../img/Icon1.svg'
import Icon2 from '../img/Icon2.svg'
import Icon3 from '../img/Icon3.svg'
import dash from '../img/dash.svg'
import user from '../img/User.svg'
import users from '../img/3User.svg'
import add from '../img/Add_User.svg'
import plus from '../img/Plus.svg'
import doc from '../img/doc.svg'
import inf from '../img/ins.svg'
import faq from '../img/faq.svg'
import news from '../img/news.svg'



export const MenuPU =()=>{
    const [cat, setCat] = useState(false)
    return(
        <div className={styles.menu}
        onClick={() => setCat(!cat)}
        type="checkbox" 
        name="cat" 
        id="check-box" 
        value="false">
            <span className={styles.span}></span>
            <div className={ cat ? `${styles.project_menu} ${styles.active}` : `${styles.project_menu} ${styles.no_active}`}>
                <div className={styles.header_menu}>
                    <img className={styles.percent_img}src ={Avatar1} alt="Photos"/>
                    <div>
                        <p className={styles.header_text1}>Катерина Петровна</p>
                        <p className={styles.header_text2}>Зав. отделения</p>
                    </div>
                    <div className={styles.project_icons}>
                        <Link className={styles.link} to ={'/pages/Avtorisation'}>
                            <img className={styles.percent_icon1}src ={Icon1} alt="Photos"/>
                        </Link>
                        <Link className={styles.link} to ={'/pages/SettingPU'}>
                            <img className={styles.percent_icon2}src ={Icon2} alt="Photos"/>
                        </Link>
                        <img className={styles.percent_icon3}src ={Icon3} alt="Photos"/>
                    </div>
                    
                </div>
                <div className={styles.li_menu}>
                    <Link className={styles.link} to ={'/pages/DashboardPU'}>
                        <div className={styles.dash}>
                            <img className={styles.dash_icon}src ={dash} alt="Photos"/>    
                            <p className={styles.dash_text}>Дашборд</p>
                        </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/GroupStud'}>
                    <div className={styles.stud}>
                        <img className={styles.dash_icon1}src ={users} alt="Photos"/>
                        <p className={styles.stud_text}>Группы и студенты</p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/Dip_ruc'}>
                    <div className={styles.stud}>
                        <img className={styles.dash_icon1}src ={user} alt="Photos"/>
                        <p className={styles.stud_text}>Дип.руководители</p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/Users'}>
                    <div className={styles.stud}>
                        <img className={styles.dash_icon1}src ={add} alt="Photos"/>
                        <p className={styles.stud_text}>Пользователи</p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/InstructionPU'}>
                    <div className={styles.inf}>
                        <img className={styles.dash_icon}src ={inf} alt="Photos"/>
                        <p className={styles.inf_text}>Инструкции</p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/DocumentsPU'}>
                    <div className={styles.doc}>
                        <img className={styles.dash_icon}src ={doc} alt="Photos"/>
                        <p className={styles.doc_text}>Доументы</p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/NewsPU'}>
                    <div className={styles.news}>
                        <img className={styles.dash_icon}src ={news} alt="Photos"/>
                        <p className={styles.new_text}>Новости</p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/Zayavki'}>
                    <div className={styles.stud}>
                        <img className={styles.dash_icon1}src ={plus} alt="Photos"/>
                        <p className={styles.stud_text}>Заявки </p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/FAQ_PU'}>
                    <div className={styles.faq}>
                        <img className={styles.dash_icon}src ={faq} alt="Photos"/>
                        <p className={styles.faq_text}>FAQ</p>
                    </div>
                    </Link>
                    
                </div>
                
            </div>
        </div>
    )
}
import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../modules/menu.module.css'
import Avatar1 from '../img/Avatar1.svg'
import Avatar2 from '../img/Avatar2.svg'
import Icon1 from '../img/Icon1.svg'
import Icon2 from '../img/Icon2.svg'
import Icon3 from '../img/Icon3.svg'
import sun from '../img/sun.svg'
import moon from '../img/moon.svg'
import dash from '../img/dash.svg'
import dip from '../img/dip.svg'
import doc from '../img/doc.svg'
import inf from '../img/ins.svg'
import faq from '../img/faq.svg'
import news from '../img/news.svg'
import ProgressBar from "@ramonak/react-progress-bar"

export const Menu =()=>{
    return(
        // <p className={styles.menu}>Тут будет меню</p>
        <div className={styles.menu}>
            <div className={styles.project_menu}>
                <div className={styles.header_menu}>
                    <img className={styles.percent_img}src ={Avatar2} alt="Photos"/>
                    <div>
                        <p className={styles.header_text1}>Никишина Яна</p>
                        <p className={styles.header_text2}>ПОКС-42</p>
                    </div>
                    <div className={styles.project_icons}>
                        <Link className={styles.link} to ={'/pages/Avtorisation'}>
                            <img className={styles.percent_icon1}src ={Icon1} alt="Photos"/>
                        </Link>
                        <Link className={styles.link} to ={'/pages/SettingStud'}>
                            <img className={styles.percent_icon2}src ={Icon2} alt="Photos"/>
                        </Link>
                        <img className={styles.percent_icon3}src ={Icon3} alt="Photos"/>
                    </div>
                    
                </div>
                <div className={styles.light_check}>
                        <img className={styles.light_check_icon1}src ={sun} alt="Photos"/>
                        <label className={styles.switch}>
                                <input type="checkbox" name="cat" id="check-box" value="false" />
                                <span className={`${styles.slider} ${styles.round}`}></span>
                            </label>  
                        <img className={styles.light_check_icon2}src ={moon} alt="Photos"/>
                </div>
                <div className={styles.li_menu}>
                    <Link className={styles.link} to ={'/pages/Dashboard'}>
                        <div className={styles.dash}>
                            <img className={styles.dash_icon}src ={dash} alt="Photos"/>    
                            <p className={styles.dash_text}>Дашборд</p>
                        </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/MyDiplom'}>
                    <div className={styles.dip}>
                        <img className={styles.dash_icon}src ={dip} alt="Photos"/>
                        <p className={styles.dip_text}>Мой диплом</p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/News'}>
                    <div className={styles.news}>
                        <img className={styles.dash_icon}src ={news} alt="Photos"/>
                        <p className={styles.new_text}>Новости</p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/InstructStud'}>
                    <div className={styles.inf}>
                        <img className={styles.dash_icon}src ={inf} alt="Photos"/>
                        <p className={styles.inf_text}>Инструкции</p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/Documents'}>
                    <div className={styles.doc}>
                        <img className={styles.dash_icon}src ={doc} alt="Photos"/>
                        <p className={styles.doc_text}>Доументы</p>
                    </div>
                    </Link>
                    <Link className={styles.link} to ={'/pages/FAQ'}>
                    <div className={styles.faq}>
                        <img className={styles.dash_icon}src ={faq} alt="Photos"/>
                        <p className={styles.faq_text}>FAQ</p>
                    </div>
                    </Link>
                    
                </div>
                <div className={styles.progres_menu}>
                    <div className={styles.pr_m}>
                        <p className={styles.progres_text}>Готовность</p>  
                        <p className={styles.progres_prosent}>40%</p> 
                    </div>                
                    <div className={styles.prbar}>
                        <ProgressBar  completed={40} 
                        height={'5px'}
                        bgColor={'#6E17F2'}
                        labelSize={"0px"} 
                        baseBgColor={"#E9EBED"}
                        // width={'100%'}
                        />
                    </div>
                    <div className={styles.pr_data}>
                        <p className={styles.data1}>01.11.2020</p>  
                        <p className={styles.data2}>01.06.2021</p> 
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
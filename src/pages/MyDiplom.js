import React, { useContext, useEffect, useState } from 'react'
import styles from '../modules/myDiplom.module.css'
import {Footer} from '../components/Footer'
import {Menu} from '../components/Menu'
import {Kviz} from '../components/Kviz'
import { ProfileContext } from '../components/ProfileWrapper'
export const MyDiplom=()=>{
    const [kvizEnd, setKvizEnd] = useState(null)
    const profile =useContext(ProfileContext)

    useEffect(()=>{
        setKvizEnd(!!profile.diplom)
        console.log(profile.diplom)
    },[profile])
    const hendleKvizEnd =()=>{
        setKvizEnd(true)
    }
    if(kvizEnd===null){
        return null
    }
    return(
        <div className={styles.body}>
            <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <Menu className={styles.menu}></Menu>
            {
                kvizEnd
                ?(
                    <>
                        <p className={styles.text_hi}>Мой диплом</p> 
                        <div className={styles.conteiner2}>
                            <div className={styles.dip_box1}>
                                <div className={styles.subject}>
                                    <p className={styles.subject_text1}>Твоя тема диплома</p>
                                    <p className={styles.subject_text2}>Разработка клиентской части портала дипомников ГБПОУ <br/>РО "РКСИ"</p>
                                </div> 
                                <div className={styles.check1}>
                                    <p className={styles.subject_text1}>Чеклист ПП</p>
                                    <p className={styles.subject_text2}>Создай ПП<br/> пошагово </p>
                                </div> 
                                <div className={styles.check2}>
                                    <p className={styles.subject_text1}>Чеклист ПЗ</p>
                                    <p className={styles.subject_text2}>Напиши ПЗ легко и просто</p>
                                </div> 
                                <div className={styles.material}>
                                    <p className={styles.subject_text1}>Материалы</p>
                                    <p className={styles.subject_text2}>Сдавай материалы вовремя!</p>
                                </div> 
                            </div>     
                            <p className={styles.dip_h2}>Чеклист Программного продукта</p>
                            <div className={styles.dip_box2}>
                                <p className={styles.dip_text}>Следуй инструкциям и у тебя все получится</p>
                                <p className={styles.dip_text1}>Отмечай пункты по мере их выполнения!</p>
                                <div className={styles.div}>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check1" name="check" />
                                        <label htmlFor="check1">Пунтк 1</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check2" name="check" />
                                        <label htmlFor="check2">Пункт 2</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check3" name="check" />
                                        <label htmlFor="check3">Пункт 3</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check4" name="check" />
                                        <label htmlFor="check4">Пункт 4</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check5" name="check" />
                                        <label htmlFor="check5">Пункт 5</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check6" name="check" />
                                        <label htmlFor="check6">Пункт 6</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check7" name="check" />
                                        <label htmlFor="check7">Пункт 7</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check8" name="check" />
                                        <label htmlFor="check8">Пункт 8</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check9" name="check" />
                                        <label htmlFor="check9">Пункт 9</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check10" name="check" />
                                        <label htmlFor="check10">Пункт 10</label>
                                    </div>
                                </div>
                                
                            </div>
                            <p className={styles.dip_h2}>Чеклист Пояснительной записки</p>
                            <div className={styles.dip_box2}>
                                <p className={styles.dip_text}>Следуй инструкциям и у тебя все получится</p>
                                <p className={styles.dip_text1}>Отмечай пункты по мере их выполнения!</p>
                                <div className={styles.div}>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check01" name="check" />
                                        <label htmlFor="check01">Пунтк 1</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check02" name="check" />
                                        <label htmlFor="check02">Пункт 2</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check03" name="check" />
                                        <label htmlFor="check03">Пункт 3</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check04" name="check" />
                                        <label htmlFor="check04">Пункт 4</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check05" name="check" />
                                        <label htmlFor="check05">Пункт 5</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check06" name="check" />
                                        <label htmlFor="check06">Пункт 6</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check07" name="check" />
                                        <label htmlFor="check07">Пункт 7</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check08" name="check" />
                                        <label htmlFor="check08">Пункт 8</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check09" name="check" />
                                        <label htmlFor="check09">Пункт 9</label>
                                    </div>
                                    <div className={styles.check_box}>
                                        <input type="checkbox"  className={styles.custom_checkbox} id="check010" name="check" />
                                        <label htmlFor="check010">Пункт 10</label>
                                    </div>
                                </div>
                                
                            </div>
                            <p className={styles.dip_h2}>Материалы на проверку</p>
                            <div className={styles.material_div}>
                            <p className={styles.material_text}>Не забывай вовремя отправлять на проверку материалы своему дипломному руководителю.</p>
                            <p className={styles.material_text2}>Оставь ссыку на материалы тут!</p>
                            <input type="text" name="dipruc" className={styles.input_material} placeholder="Ссылка.."/>
                            <button type="button" className ={styles.btn_mater} name="cat" id="button" ><span className ={styles.text_btn2}>Прикрепить</span></button>
                        </div>
                    </div>
                    </>
                )
                :(
                    <>
                        <p className={styles.text_hi}>Мой диплом</p>
                        <p className={styles.text_1}>Перед началом работы в данном разделе давай кое-что уточним. Пройди небольшой опрос для внесения данных о твоей дипломной работе.</p>
                        <p className={styles.text_2}>После прохождения тестирования тебе будет доступна вся информация на странице.</p>
                        <div className={styles.conteiner}>
                            <Kviz onKvizEnd={hendleKvizEnd}/>
                        </div> 

                    </>
                )

            }
                
            <Footer></Footer>
            
        </div>
    )
}
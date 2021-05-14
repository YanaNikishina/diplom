import React, { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import styles from '../modules/myDiplom.module.css'
import {Footer} from '../components/Footer'
import {Menu} from '../components/Menu'
import PhotoBox1 from '../img/PhotoBox1.svg'
import PhotoBox2 from '../img/PhotoBox2.svg'
import PhotoBox3 from '../img/PhotoBox3.svg'
import PhotoBox4 from '../img/PhotoBox4.svg'
import PhotoBox5 from '../img/PhotoBox5.svg'
import Photo_box from '../img/Photo_check_boxes.svg'
import Photo_radio_dip from '../img/Photo_radio_dip.svg'
import Photo_dipruc from '../img/Photo_dipruc.svg'

export const MyDiplom=()=>{
    const [cat, setCat] = useState(1)

    const[cat2,setCat2]=useState(1)

    return(
        <div className={styles.body}>
            <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <Menu className={styles.menu}></Menu>
            
            <div className={ cat2===1 ? `${styles.big_conteiner} ${styles.active}` : `${styles.big_conteiner} ${styles.no_active}`}>
                <p className={styles.text_hi}>Мой диплом</p>
                <p className={styles.text_1}>Перед началом работы в данном разделе давай кое-что уточним. Пройди небольшой опрос для внесения данных о твоей дипломной работе.</p>
                <p className={styles.text_2}>После прохождения тестирования тебе будет доступна вся информация на странице.</p>
                <div className={styles.conteiner}>
               
                    <div className={ cat===1 ? `${styles.boxes01} ${styles.active}` : `${styles.boxes01} ${styles.no_active}`}>
                    <p className={styles.text_conteiner1}>Выбери вид твоего дипломного проекта:</p>
                        <div className={styles.boxes1}>
                            <div className={styles.box_1}>
                                <img className={styles.box1_img}src ={PhotoBox1} alt="Photos"/>
                                <p className={styles.box1_text}>Web-сайт</p>
                            </div>
                            <div className={styles.box_2}>
                                <img className={styles.box2_img}src ={PhotoBox2} alt="Photos"/>
                                <p className={styles.box2_text}>Приложение</p>
                            </div>
                            <div className={styles.box_3}>
                                <img className={styles.box3_img}src ={PhotoBox3} alt="Photos"/>
                                <p className={styles.box3_text}>Игра</p>
                            </div>
                        </div>
                        <div className={styles.boxes2}>
                            <div className={styles.box_4}>
                                <img className={styles.box4_img}src ={PhotoBox4} alt="Photos"/>
                                <p className={styles.box4_text}>Сервис</p>
                            </div>
                            <div className={styles.box_5}>
                                <img className={styles.box5_img}src ={PhotoBox5} alt="Photos"/>
                                <p className={styles.box5_text}>Landing Page</p>
                            </div>
                        </div>
                        <div className={styles.boxes3}>
                            <div className={styles.prbar}>
                            <ProgressBar  completed={25} 
                            height={'15'}
                            bgColor={'#6E17F2'}
                            labelSize={"0px"} 
                            baseBgColor={"#E9EBED"}
                            width={'100%'}
                            />
                            </div>
                            <button
                                onClick={() => setCat(2)}
                                type="button" 
                                name="cat" 
                                id="button" 
                                value="false"
                                className ={styles.btn_next}><span className ={styles.text_next}>Далее</span></button>
                        </div>
                    </div>
                    <div className={ cat===2 ? `${styles.boxes02} ${styles.active}` : `${styles.boxes02} ${styles.no_active}`} >
                        <p className={styles.text_conteiner1}>Выбери желаемую оценку:</p>
                            <div className={styles.boxes_mark}>
                                <div className={styles.radio}>
                                    <label className={styles.radio_label}>
                                        <input className={styles.radio_btn} type="radio" value="false" name='mark1' defaultChecked/>
                                        <span className={styles.faik}></span>
                                        <span className={styles.radio_text}>Оценка 5 (Отлично)</span> 
                                    </label>
                                
                                    <label className={styles.radio_label}>
                                        <input className={styles.radio_btn} type="radio" value="false" name='mark1' />
                                        <span className={styles.faik}></span>
                                        <span className={styles.radio_text}>Оценка 4(Хорошо)</span> 
                                    </label>
                                        
                                    <label className={styles.radio_label}>
                                        <input className={styles.radio_btn} type="radio" value="false" name='mark1' />
                                        <span className={styles.faik}></span>
                                        <span className={styles.radio_text}>Оценка 3(Удовлетворительно)</span> 
                                    </label>
                                </div>
                                
                                <img className={styles.boxmark_img}src ={Photo_box} alt="Photos"/>

                            </div>

                            <div className={styles.boxes3}>
                                <button
                                onClick={() => setCat(1)}
                                type="button" 
                                name="cat" 
                                id="button" 
                                value="2"
                                className ={styles.btn_next}><span className ={styles.text_next}>Назад</span></button>
                                
                                <div className={styles.prbar}>
                                <ProgressBar  completed={50} 
                                height={'15'}
                                bgColor={'#6E17F2'}
                                labelSize={"0px"} 
                                baseBgColor={"#E9EBED"}
                                width={'100%'}
                                />
                                </div>
                                
                                <button
                                    onClick={() => setCat(3)}
                                    type="button" 
                                    name="cat" 
                                    id="button" 
                                    value="2"
                                    className ={styles.btn_next}><span className ={styles.text_next}>Далее</span></button>
                            </div>
                            
                        </div>
                        
                    <div className={ cat===3 ? `${styles.boxes03} ${styles.active}` : `${styles.boxes03} ${styles.no_active}`} >
                        <p className={styles.text_conteiner1}>Выбери свою тему диплома:</p>
                            <div className={styles.diptem}>
                            <div className={styles.radio_dip}>
                                <label className={styles.label_radio_dip}>
                                    <input className={styles.radio_btn_dip} type="radio" value="false" name='dip' />
                                    <span className={styles.faik2}></span>
                                    <p className={styles.rad} name="tema">Разработка клиентской части для кафе “ПитьКфе”</p>
                                    <p className={styles.rad2}>Узнать подробнее</p>
                                </label>
                                <label className={styles.label_radio_dip}>
                                <input className={styles.radio_btn_dip} type="radio" value="false" name='dip' />
                                    <span className={styles.faik2}></span>
                                    <p className={styles.rad} name="tema">Разработка клиентской части для кафе “ПитьКфе”</p>
                                    <p className={styles.rad2}>Узнать подробнее</p>
                                </label>
                                <label className={styles.label_radio_dip}>
                                <input className={styles.radio_btn_dip} type="radio" value="false" name='dip' />
                                    <span className={styles.faik2}></span>
                                    <p className={styles.rad} name="tema">Разработка клиентской части для кафе “ПитьКфе”</p>
                                    <p className={styles.rad2}>Узнать подробнее</p>
                                </label>
                                <label className={styles.label_radio_dip}>
                                <input className={styles.radio_btn_dip} type="radio" value="false" name='dip' />
                                    <span className={styles.faik2}></span>
                                    <p className={styles.rad} name="tema">Разработка клиентской части для кафе “ПитьКфе”</p>
                                    <p className={styles.rad2}>Узнать подробнее</p>
                                </label>
                                <label className={styles.label_radio_dip}>
                                <input className={styles.radio_btn_dip} type="radio" value="false" name='dip' />
                                    <span className={styles.faik2}></span>
                                    <p className={styles.rad} name="tema">Разработка клиентской части для кафе “ПитьКфе”</p>
                                    <p className={styles.rad2}>Узнать подробнее</p>
                                </label>
                                <label className={styles.label_radio_dip}>
                                <input className={styles.radio_btn_dip} type="radio" value="false" name='dip' />
                                    <span className={styles.faik2}></span>
                                    <p className={styles.rad} name="tema">Разработка клиентской части для кафе “ПитьКфе”</p>
                                    <p className={styles.rad2}>Узнать подробнее</p>
                                </label>
                                <label className={styles.label_radio_dip}>
                                <input className={styles.radio_btn_dip} type="radio" value="false" name='dip' />
                                    <span className={styles.faik2}></span>
                                    <p className={styles.rad} name="tema">Разработка клиентской части для кафе “ПитьКфе”</p>
                                    <p className={styles.rad2}>Узнать подробнее</p>
                                </label>
                                <label className={styles.label_radio_dip}>
                                <input className={styles.radio_btn_dip} type="radio" value="false" name='dip' />
                                    <span className={styles.faik2}></span>
                                    <p className={styles.rad} name="tema">Разработка клиентской части для кафе “ПитьКфе”</p>
                                    <p className={styles.rad2}>Узнать подробнее</p>
                                </label>
                                <label className={styles.label_radio_dip}>
                                <input className={styles.radio_btn_dip} type="radio" value="false" name='dip' />
                                    <span className={styles.faik2}></span>
                                    <p className={styles.rad} name="tema">Разработка клиентской части для кафе “ПитьКфе”</p>
                                    <p className={styles.rad2}>Узнать подробнее</p>
                                </label>
                                <label className={styles.label_radio_dip}>
                                <input type="text" name="diplom" className={`${styles.input} ${styles.input_fio}`} placeholder="Другое.."/>
                                </label>
                            </div>
                            <img className={styles.boxmark_im}src ={Photo_radio_dip} alt="Photos"/>
                            </div>
                            <div className={styles.boxes3}>
                            <button
                                onClick={() => setCat(2)}
                                type="button" 
                                name="cat" 
                                id="button" 
                                value="2"
                                className ={styles.btn_next}><span className ={styles.text_next}>Назад</span></button>

                                <div className={styles.prbar}>
                                <ProgressBar  completed={75} 
                                height={'15'}
                                bgColor={'#6E17F2'}
                                labelSize={"0px"} 
                                baseBgColor={"#E9EBED"}
                                width={'100%'}
                                />
                                </div>
                                <button
                                    onClick={() => setCat(4)}
                                    type="button" 
                                    name="cat" 
                                    id="button" 
                                    value="3"
                                    className ={styles.btn_next}><span className ={styles.text_next}>Далее</span></button>
                            </div>
                            
                        </div>
                    <div className={ cat===4 ? `${styles.boxes04} ${styles.active}` : `${styles.boxes04} ${styles.no_active}`} >
                        <p className={styles.text_conteiner1}>Выбери своего дипломного руководителя:</p>
                            <div className={styles.dop_box}>
                            <div className={styles.dip_box}>
                                <select name="dip_ruc" className={styles.dip_ruc} >
                                    <option className={styles.group_option} defaultValue disabled >Твой дипломный руководитель</option>
                                    <option>Вербицкая М.А.</option>
                                    <option>Каламбет </option>
                                    <option>Антоненко</option>
                                </select>
                                <p className={styles.dip_text11}>Если твой дипломный руководитель не является сотрудником колледжа РКСИ, ты можешь пригласить его присоединиться к нам!  </p>
                                <p className={styles.dip_text2}>Введи Email и отправляй приглашение!</p>
                                <label className={styles.label_radio_dipruc}>
                                <input type="text" name="dipruc" className={styles.input_dip} placeholder="Email.."/>
                                </label>
                                <button type="button" name="cat" id="button" className ={styles.btn_dip}><span className ={styles.text_btn}>Отправить приглашение</span></button>
                            </div>
                            <img className={styles.photo_dipruc}src ={Photo_dipruc} alt="Photos"/>
                            </div>
                            <div className={styles.boxes3}>
                            <button
                                onClick={() => setCat(3)}
                                type="button" 
                                name="cat" 
                                id="button" 
                                value="2"
                                className ={styles.btn_next}><span className ={styles.text_next}>Назад</span></button>

                                <div className={styles.prbar}>
                                <ProgressBar  completed={100} 
                                height={'15'}
                                bgColor={'#6E17F2'}
                                labelSize={"0px"} 
                                baseBgColor={"#E9EBED"}
                                width={'100%'}
                                />
                                </div>
                                <button
                                    onClick={() => setCat2(2)}
                                    type="button" 
                                    name="cat" 
                                    id="button" 
                                    value="3"
                                    className ={styles.btn_next}><span className ={styles.text_next}>Готово</span></button>
                            </div>
                            
                        </div>
                        
                </div>               
            </div>
            <div className={ cat2===2 ? `${styles.big_conteiner_2} ${styles.active}` : `${styles.big_conteiner_2} ${styles.no_active}`} >
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
                
            </div>
            <Footer></Footer>
            
        </div>
    )
}
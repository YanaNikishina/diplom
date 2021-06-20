import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import classes from '../modules/classes.module.css'
import styles from './Kviz.module.css'
import PhotoBox1 from '../img/PhotoBox1.svg'
// import PhotoBox2 from '../img/PhotoBox2.svg'
// import PhotoBox3 from '../img/PhotoBox3.svg'
// import PhotoBox4 from '../img/PhotoBox4.svg'
// import PhotoBox5 from '../img/PhotoBox5.svg'
import Photo_radio_dip from '../img/Photo_radio_dip.svg'
import Photo_dipruc from '../img/Photo_dipruc.svg'
import{getDipRucs,getViews, getThemes, submitKviz} from '../model/index'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';


const Controls =(props)=>{
    const lastIndex =2;
    const progress =props.index/lastIndex*100;
    
    const hendleChengeIndex=(direction)=>{
        props.setIndex(props.index+direction)          
    }
    
    return(
        <div className={styles.controls}>
            {props.index>0 && <button type="button" className={classes.btn} onClick={()=>hendleChengeIndex(-1)}>Назад</button>}
            <div className={styles.progress_bar}>
                <div className={styles.progress_bar_line} style={{width:progress +'%'}}/>
            </div>
            {
                props.index === lastIndex
                ?<button type="submit" className={classes.btn}onClick={()=>console.log(123)}>Готово</button>
                :<button type="button" className={classes.btn} onClick={()=>hendleChengeIndex(1)}>Далее</button>
            }  
        </div>
    )
}

const Slide =(props)=>{
    return(
        <div className={cn(styles.slide, {[styles.slide_show]:props.show})}>
            {props.children}
        </div>
    )
}

export const Kviz =(props)=>{
    const[index,setIndex]=useState(0);
    const [views, setViews]=useState([]);
    const [themes, setThemes]=useState([]);
    const [dipRucs, setDipRucs]=useState([]);

    useEffect(()=>{
        getViews().then((views)=>setViews(views))
        getThemes().then((themes)=>setThemes(themes))
        getDipRucs().then((dipRucs)=>setDipRucs(dipRucs))
    },[])

    
    return(

        <Formik className={styles.kviz} 
        initialValues={{  
            viewId: "",
            idTheme: "",
            dipRuc: "",
            theme: ""
        }}
        validationSchema={Yup.object().shape({
            // viewId: Yup.string(),
            idTheme: Yup.string(),
            dipRuc: Yup.string(),
            theme: Yup.string()
        })}
        onSubmit={(value)=>{
            props.onKvizEnd()
            // submitKviz(value).then(()=>{
            //     props.onKvizEnd()
            // })
        }} >
            {({values})=>(
                <Form className={styles.form}>
                <Slide show={index===0}>
                    <p className={classes.h1}>Выбери вид твоего дипломного проекта:</p>
                    <div className={styles.diplom_types}>
                        {views.map(view=>(
                                <label className={styles.diplom_type} key={view.id}>
                                    <Field className={classes.hidden} type="radio" name="viewId" value={view.id} checked={values.viewId==view.id}/>
                                    <img src ={PhotoBox1} alt="Photos"/>
                                    <span className={styles.diplom_type_name}>{view.name}</span>
                                </label>
                        
                            ))}
                    </div>
                </Slide>
                <Slide show={index===1}>
                    <p className={classes.h1}>Выбери свою тему диплома:</p>
                    <div className={styles.dip_tems}>
                        <div className={styles.dip_tem}>
                            
                            {themes.map(themes=>(

                                <label className={styles.tema_diploma} key={themes.id}>
                                    <Field className={cn (classes.hidden, styles.check)} type="radio" name='idTheme'value={themes.id} />
                                    <span className={styles.faik2}>
                                        <p className={styles.rad}>{themes.theme}</p>
                                        <p className={styles.rad2}>Узнать подробнее</p>
                                    </span>
                                </label>
                            ))}
                            <label className={styles.tema_diploma}>
                                <Field type="text" name="theme" className={styles.input_fio} placeholder="Другое.."/>
                            </label>
                        </div> 
                        <img className={styles.boxmark_im}src ={Photo_radio_dip} alt="Photos"/>
                    </div>
                    
                </Slide>
                <Slide show={index===2}>
                    <p className={classes.h1}>Выбери своего дипломного руководителя:</p>
                    <div className={styles.box}>
                        <div className={styles.diprucs}>
                            <Field as="select" name="dipRuc" className={styles.dip_ruc} >
                                <option>Твой дипломный руководитель</option>
                                {dipRucs.map(dipRuc=>(
                                    <option value={dipRuc.id} key={dipRuc.id}>{dipRuc.name}</option>  
                                ))}
                            </Field>
                            {/* <p className={styles.dip_text11}>Если твой дипломный руководитель не является сотрудником колледжа РКСИ, ты можешь пригласить его присоединиться к нам!  </p>
                            <p className={styles.dip_text2}>Введи Email и отправляй приглашение!</p>
                            <label className={styles.label_radio_dipruc}>
                                <Field type="text" name="dipruc" className={styles.input_dip} placeholder="Email.."/>
                            </label>
                            <button type="submit" className ={styles.btn_dip}>Отправить приглашение</button> */}
                        </div>
                        <img className={styles.photo_dipruc}src ={Photo_dipruc} alt="Photos"/>
                    </div>
                </Slide>
                <Controls index={index} setIndex={setIndex}/>
            </Form>
            )}
        </Formik>
    )
}
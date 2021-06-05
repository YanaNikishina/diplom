import React from 'react'
import Avatar1 from '../img/Avatar1.svg'
import styles from '../modules/dashboard.module.css'



export const Card =() =>{

    class Card  extends React.Component{
        render(){
            return(
            <div className={styles.dip_guid}>
                            <p className={styles.dip_guid_text1}>{this.props.h1}</p>
                            <div className={styles.box_dip_guid}>
                                <img className={styles.dip_guid_photo1} src ={Avatar1} alt="Photos"/>
                                <div>
                                    <p className={styles.dip_guid_text2}>{this.props.name}</p>
                                    <p className={styles.dip_guid_text3}>{this.props.phone}</p>
                                </div>
                                
                            </div>
                            
                        </div>)
        }
    }

    return(
        <div className={styles.card}>
        <Card h1='Твой дипломный руководитель' name='Иванов Иван Ивановичь' phone ='+7 000 000 00 00'/>
        <Card h1='Твой классный руководитель' name='Иванов Иван Ивановичь' phone ='+7 000 000 00 00'/>
        <Card h1='Твой зав. отделения' name='Иванов Иван Ивановичь' phone ='+7 000 000 00 00'/>
        </div>
    )
}
import React from 'react'
import styles from '../modules/dashboard.module.css'

export const Timer =() =>{

    //1

    var countDownDate = new Date("June 23, 2021 00:00:00").getTime();
        var x = setInterval(function() {
        
            var now = new Date().getTime();
        
            var distance = countDownDate - now;
            
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
            var daysNum = ['день','дня','дней'];
            
            let dayNum = daysNum[1 === days % 10 && 11 !== days % 100 ? 0 : 2 <= days % 10 && 4 >= days % 10 && (10 > days % 100 || 20 <= days % 100) ? 1 : 2]
            if  (days < 0) {
                document.getElementById("timer").innerHTML = "0 дней";
              } else {
                document.getElementById("timer").innerHTML = days + "&nbsp;" + dayNum;
              }
        
            if (distance > 0) {
                document.body.querySelector(".timer")
            } 
            else {
            clearInterval(x);
            document.body.querySelector(".timer");
            } 
            
    }, 1000);


    //2
    var countDownDate2 = new Date(" May 20, 2021 00:00:00").getTime();
    var y = setInterval(function() {
    
      var now = new Date().getTime();
    
      var distance2 = countDownDate2 - now;
      
      var days = Math.floor(distance2 / (1000 * 60 * 60 * 24)) + 1;
      var daysNum = ['день','дня','дней'];
      
      let dayNum = daysNum[1 === days % 10 && 11 !== days % 100 ? 0 : 2 <= days % 10 && 4 >= days % 10 && (10 > days % 100 || 20 <= days % 100) ? 1 : 2]
            if  (days < 0) {
                document.getElementById("timer2").innerHTML = "0 дней";
            } else {
                document.getElementById("timer2").innerHTML = days + "&nbsp;" + dayNum ;
            }
    
      if (distance2 > 0) {
          document.body.querySelector(".timer2")
      } else  {
        clearInterval(y);
        document.body.querySelector(".timer2");
      } 
      
    }, 1000);


    return(
        <div className={styles.term} >
            <p className={styles.term_text1}>Сроки выполнения дипломной работы</p>
            <div className={styles.box_term}>
                <div className={styles.box_term1}>
                    <p className={styles.term_text2}>До предзащиты проекта остлось</p>
                    <div className={styles.box_group1}>
                    <p className={styles.term_text4} ><span id="timer2"></span ></p>
                    </div>    
                </div>
                <div className={styles.box_term2}> 
                    <p className={styles.term_text3}>До защиты проекта осталось</p>
                    <div className={styles.box_group1}>
                    <p className={styles.term_text5}><span id="timer"></span ></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
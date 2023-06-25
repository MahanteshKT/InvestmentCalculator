import React, { useState } from 'react'
import styles from "./InvestCalcInput.module.css"
function InvestCalcInput(props) {
    
    const values={
        currentSaving:"",
        yearlySaving:"",
        ExpectedInterest:"",
        investmentDuration:"",
    }

    const [formInput,setFormInput]=useState(values);
    const [msg,setMsg]=useState("");
    const FormOnSubmit=(e)=>{
        e.preventDefault();
        if(formInput.currentSaving===""||
            formInput.yearlySaving===""||
            formInput.ExpectedInterest===""||
            formInput.investmentDuration===""
            ){
                setMsg("All fields must be field!")
                return;
            }
        const formInputValues={
            ...formInput,
            id:Math.random().toString(),
        }
        props.SendInputValues(formInputValues);
        setFormInput(values);


    }

    const OnResetHandler=(e)=>{
        e.preventDefault();
        setFormInput(values);
        setMsg("")
    }

    const onChangeHandler=(input,value)=>{
        setFormInput({
            ...formInput,
            [input]:value,
        })
    }

    return (
      <form className={styles.formContainer} >

          <div className={styles.formInputEach}>
              <label htmlFor="current-saving">CURRENT SAVINGS ($)</label>
              <input  type="number" name="current-saving" id="current-saving"
                        value={formInput.currentSaving} 
                        onChange={(e)=>onChangeHandler('currentSaving',e.target.value)}
              />
          </div>

          <div className={styles.formInputEach}>
              <label htmlFor="yearly-saving">YEARLY SAVINGS ($)</label>
              <input  type="number" name="yearly-saving" id="yearly-saving" 
                        value={formInput.yearlySaving}
                        onChange={(e)=>onChangeHandler('yearlySaving',e.target.value)}

                />
          </div>

          <div className={styles.formInputEach}>
              <label htmlFor="expected-interest">EXPECTED-INTEREST (%,PER YEAR)</label>
              <input type="number" name="expected-interest" id="expected-interest" 
                                    value={formInput.ExpectedInterest}
                                    onChange={(e)=>onChangeHandler('ExpectedInterest',e.target.value)}

              />
          </div>
  
          <div className={styles.formInputEach}>
              <label htmlFor="duration">INVESTMENT DURATION (YEARS)</label>
              <input type="number" name="duration" id="duration" 
                                value={formInput.investmentDuration}
                                onChange={(e)=>onChangeHandler('investmentDuration',e.target.value)}

              />
          </div>
            
          <div className={styles.formButtons}>
                <button onClick={OnResetHandler } className={styles.ResetButton}>Reset</button>
                <button onClick={FormOnSubmit} className={styles.CalcButton}>Calculate</button>
          </div>
          <div className={styles.msg}>
                {msg}
            </div>

      </form>        
  )
}

export default InvestCalcInput

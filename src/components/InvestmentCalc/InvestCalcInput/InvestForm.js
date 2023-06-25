import React from 'react'
import InvestCalcInput from './InvestCalcInput'
import styled from "styled-components";

const CalcForm=styled.div`
    {
        width:30rem;
        max-height:40rem;
        display:flex;
        margin:2rem auto;
        background-color: rgb(29, 83, 36);
        border-radius:0.5rem;
        color:white;
        border:2px solid rgb(29,83,36);
        box-shadow:0 0 5px grey;
    }
    @media screen and (max-width:700px){
        {
            width:20rem;
        }
    }

`

function InvestForm(props) {
  return (
    <CalcForm>
        <InvestCalcInput SendInputValues={props.FormInputValues}/>
    </CalcForm>
  )
}

export default InvestForm

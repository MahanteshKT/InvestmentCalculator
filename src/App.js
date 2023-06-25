import { useState } from 'react';
import './App.css';
import InvestHeader from './components/Heading/InvestHeader';
import InvestForm from './components/InvestmentCalc/InvestCalcInput/InvestForm';
import InvestTable from './components/InvestmentCalc/InvestTable/InvestTable';

function App() {
  const [inputForm,setInputForm]=useState(null);

  const FormInputValues=(inputValues)=>{
      setInputForm(inputValues);
  }
  const yearlyData=[];
  if(inputForm){
    
    let currentSaving=parseFloat(inputForm.currentSaving)
    let yearlyContribution=parseFloat(inputForm.yearlySaving)
    let ExpectedInterest=parseFloat(inputForm.ExpectedInterest)/100;
    let investmentDuration=parseInt(inputForm.investmentDuration);

    for(let i=0;i<investmentDuration;i++){
        const yearlyInterest=parseFloat(currentSaving*ExpectedInterest);
        currentSaving += parseFloat(yearlyInterest+yearlyContribution);
        yearlyData.push({
          year:i+1,
          yearlyInterest:yearlyInterest,
          savingsEndOfYear:currentSaving,
          yearlyContribution:yearlyContribution,
        });
          }
    
  }

  return (
    <div className="App">
      <InvestHeader/>
      <InvestForm FormInputValues={FormInputValues}/>
      {inputForm?<InvestTable data={yearlyData} intialInvestment={parseFloat(inputForm['currentSaving'])} />:<h2>No result found!</h2>}
      
    </div>
  );
}

export default App;

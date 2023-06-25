import React from 'react'
import "./InvestTable.css"
function InvestTable(props) {
  const formatter=new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',
    minimumFractionDigits:2,
    maximumFractionDigits:2,
  });
  return (
    <div>
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((value)=>{
              return <tr key={value.year1}>
                <td>{value.year}</td>
                <td>{formatter.format(value.savingsEndOfYear)}</td>
                <td>{formatter.format(value.yearlyInterest)}</td>
                <td>{formatter.format(
                  value.savingsEndOfYear-props.intialInvestment-value.yearlyContribution*value.year)}</td>
                <td>{formatter.format(props.intialInvestment+value.yearlyContribution*value.year)}</td>
              </tr>
            })
          
          }
        </tbody>
      </table>
    </div>
  )
}

export default InvestTable

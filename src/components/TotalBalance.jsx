import React, { useContext } from 'react'
import { ExpenseContext } from '../context/expenseContext'


const TotalBalance = () => {
    const {entries} = useContext(ExpenseContext)
    let sum = 0
    entries.forEach(el => {
        sum += parseInt(el.amount)
    })

        useContext(ExpenseContext)
    return (
        <div>
            <h2 className="display-3 text-center">£{sum}</h2>
        </div>
    )
}

export default TotalBalance

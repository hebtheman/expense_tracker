import React, { useContext, useState } from 'react'
import { ExpenseContext } from '../context/expenseContext'

const AddEntry = () => {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")

    const {addEntry} = useContext(ExpenseContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newEntry = {
            id: Math.floor(Math.random() *99999),
            description,
            amount
        }
        addEntry(newEntry);
        console.log(newEntry)
    }
    return (
        <div className="border border-info rounded p-4 mt-4">
            <form className="form-group">
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" id="description" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input onChange={(e) => setAmount(e.target.value)} type="number" id="amount" className="form-control"/>
                </div>
                <button onClick={handleSubmit} value={amount} className="btn btn-info">
                    Add Entry
                </button>
            </form>
        </div>
    )
}

export default AddEntry

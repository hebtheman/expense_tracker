import React, { createContext, useState } from 'react'

export const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {

    const [entries, setEntries] = useState([
        {id: 1, description: 'Pizza', amount: -20},
        {id: 2, description: 'Salary', amount: 100},
        {id: 3, description: 'Uber', amount: -50},
        {id: 4, description: 'Extra large condoms', amount: -6},
        {id: 5, description: 'Tax return', amount: 50},
    ])

    const handleDelete = (id) => {
        setEntries(entries.filter((entry) => entry.id !== id))
    }


    const addEntry = (newEntry) => {
        setEntries([...entries, newEntry])
    }

    return (
        <ExpenseContext.Provider value={{entries, handleDelete, addEntry}}>
            {props.children}
        </ExpenseContext.Provider>
    )
}
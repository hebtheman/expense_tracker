import React from 'react'
import TotalBalance from '../src/components/TotalBalance'
import AddEntry from './components/AddEntry'
import Entries from './components/Entries'
import Summary from './components/Summary'
import { ExpenseContextProvider } from './context/expenseContext'
import "./App.css"

const App = () => {
    return (
        <ExpenseContextProvider>
        <div className="container justify-content-center">
            
            <TotalBalance />
            <Summary />
            <AddEntry />
            <Entries />
        </div>
        </ExpenseContextProvider>
    )
}

export default App

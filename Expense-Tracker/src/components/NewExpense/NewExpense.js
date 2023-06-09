import { useState } from "react"
import ExpenseForm from "./ExpenseForm"

import "./NewExpense.css"

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        //console.log('추가한 데이터', expenseData)
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () => {
        setEditing(true)
    }

    const stopEditingHandler = () => {
        setEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                onCancel = {stopEditingHandler}
                />
            )}
        </div>
    )
}

export default NewExpense

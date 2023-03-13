import { useState } from "react"

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    /*
    const [enterdTitle, setEnteredTitle] = useState('')
    const [enterdAmount, setEnteredAmount] = useState('')
    const [enterdDate, setEnterdDate] = useState('')
    */

    const [userInput, setUserInput] = useState({
        title: "",
        amount: "",
        date: "",
    })

    const titleChangeHandler = (event) => {
        // 방법 1.
        //setEnteredTitle(event.target.value)
        //console.log('title :', enterdTitle)
        /* 방법 2.
        setUserInput({
            ...userInput,
            enteredTitle : event.target.value
        })
        */
        // 방법 3. 항상 최신의 스냅샷에서 작업하도록 하는 안전한 방법
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }

    const amountChangeHandler = (event) => {
        //setEnteredAmount(event.target.value)
        //console.log('amount :', enterdAmount)
        /*
        setUserInput({
            ...userInput,
            enteredAmount : event.target.value
        })
        */
        setUserInput((prevState) => {
            return { ...prevState, amount: event.target.value }
        })
    }

    const dateChangeHandler = (event) => {
        //setEnterdDate(event.target.value)
        //console.log('date :', enterdDate)
        /*
        setUserInput({
            ...userInput,
            enteredDate : event.target.value
        })
        */
        const selectedDate = new Date(event.target.value)
        setUserInput((prevState) => {
            return { ...prevState, date: selectedDate }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = userInput

        props.onSaveExpenseData(expenseData)
        setUserInput({
            title: "",
            amount: "",
            date: "",
        })
        console.log(userInput)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInput.enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        step="2025-12-31"
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm

import { useState } from "react"

import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter"

import "./Expenses.css"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredItems = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    )

    let expenseContent = <p>No Expenses Found.</p>

    if (filteredItems.length > 0) {
        expenseContent = filteredItems.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilterChange={filterChangeHandler}
                />
                {expenseContent}
            </Card>
        </div>
    )
}

export default Expenses

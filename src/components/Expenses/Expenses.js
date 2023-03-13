import { useState } from "react"

import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter"

import "./Expenses.css"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear.toString())

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredItems = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    )

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilterChange={filterChangeHandler}
                />

                {filteredItems.map((expense) => (
                    <ExpenseItem
                        key = {expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
                
            </Card>
        </div>
    )
}

export default Expenses

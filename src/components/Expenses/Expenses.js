import { useState } from "react"

import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

import "./Expenses.css"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredItems = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    )

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilterChange={filterChangeHandler}
                />
                <ExpensesChart expense={filteredItems}/>
                <ExpensesList items={filteredItems}/>
            </Card>
        </li>
    )
}

export default Expenses

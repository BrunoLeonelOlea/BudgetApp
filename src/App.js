import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
];

function App() {
    const [expensesEntered, setExpensesEntered] = useState(expenses);

    const addExpenseHandler = (expense) => {
        setExpensesEntered((prev) => {
            return [...prev, expense];
        });
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expensesEntered} />
        </div>
    );
}

export default App;

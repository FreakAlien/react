import React, {useState} from "react";

import './ExpenseForm.css';



const ExpenseForm = (props) => {

    const [enteredTitile, setEnteredTitle] = useState ('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
 


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
};

    const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
};

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitile,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input 
                type="text"
                 value={enteredTitile}
                  onChange={titleChangeHandler}
                  />
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input 
                type="number" 
                min="0.01" 
                step="0.01" 
                value={enteredAmount}
                onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input 
                type="date" 
                min="2019-01-01" 
                max="2023-12-31S" 
                value={enteredDate}
                onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit" >Add Expense</button>
        </div>
      </form>
    );
};
    
export default ExpenseForm;
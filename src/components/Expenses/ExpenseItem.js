
import React from "react";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import'./ExpenseItem.css';

const ExpenseItem = (props) => {


  return (
<Card className="expense-item">
   <ExpenseDate date={props.date}/>
    <div className='expence-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
    </div>
    <div>
    <button onClick={() => {console.log('Clicked!')}}>Change Title</button>
    </div>
</Card>
  );
}
  
export default ExpenseItem;

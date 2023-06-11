
import React from "react";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import'./ExpenseItem.css';

const ExpenseItem = (props) => {

 
const styles = {
  h2:{
    display:"flex" , 
    justifyContent:"centar"
  }
}

  return (
    <li>
<Card className="expense-item">
   <ExpenseDate date={props.date}/>
   
    <div className='expence-item__description'>
        <h2 style={styles.h2}>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
    </div>
</Card></li>
  );
}
  
export default ExpenseItem;

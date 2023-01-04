import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = (props) => (
  <div className="expenses">
    <ExpenseItem
      date={props.items[0].date}
      title={props.items[0].title}
      amount={props.items[0].amount}
    />
    <ExpenseItem
      date={props.items[1].date}
      title={props.items[1].title}
      amount={props.items[1].amount}
    />
    <ExpenseItem
      date={props.items[2].date}
      title={props.items[2].title}
      amount={props.items[2].amount}
    />
  </div>
);

export default Expenses;

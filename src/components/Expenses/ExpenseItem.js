import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../layout/Card";

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log("Clickeado!!");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Tittle</button>
        </Card>
    );
};

export default ExpenseItem;

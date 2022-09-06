import React, {useContext} from 'react';
import classes from "./Counter.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";

const Counter = (props) => {
  const ctx = useContext(CartContext)

  const addButtonHandler = () => {
    ctx.cartDispatch({type: 'ADD', meal: props.meal})
  }

  const subButtonHandler = () => {
    ctx.cartDispatch({type: 'REMOVE', meal: props.meal})
  }


  return (
    <div className={classes.Counter}>
      {
        (props.meal.amount && props.meal.amount !== 0) ? (
          <>
            <button
              onClick={subButtonHandler}
              className={classes.Sub}>
              <FontAwesomeIcon icon={faMinus}/>
            </button>
            <span className={classes.count}>{props.meal.amount}</span>
          </>) : null
      }
      <button
        onClick={addButtonHandler}
        className={classes.Add}>
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    </div>
  );
};

export default Counter;

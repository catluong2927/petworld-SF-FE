import { useReducer , useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment": 
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function ItemCounter({ price, count , onCountChange }) {
  const currentCount = ((count !== 1)? count : 1);
  const initialState = { count: currentCount};
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
    onCountChange(state.count + 1);
  };

  const decrement = () => {
    if (state.count > 1) {
      dispatch({ type: "decrement" });
      onCountChange(state.count - 1);
    }
  };

  return (
    <>
      <button onClick={decrement} type="button">
        <i className="bi bi-dash"></i>
      </button>
      <span style={{ margin: "0 20px", fontFamily: "Cabin" }}>
        {state.count}
      </span>
      <button onClick={increment} type="button">
        <i className="bi bi-plus"></i>
      </button>
    </>
  );
}
export default ItemCounter;

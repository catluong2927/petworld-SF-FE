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
function ItemCounter({ price, count , getTotalPrice }) {
  const currentCount = ((count !== 1)? count : 1);
  const initialState = { count: currentCount};
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    if (state.count > 1) {
      dispatch({ type: "decrement" });
    }
  };

  const totalPrice = state.count * price;

  useEffect(() => {
    getTotalPrice(totalPrice);
  }, [totalPrice]);

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

import {useEffect, useReducer, useState} from "react";
import {sentRequest} from "../../pages/ServicePackage";
import {redirect} from "react-router-dom";


function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1};
    case "decrement":
      return { count: state.count - 1};
    default:
      throw new Error();
  }
}
function ItemCounter(props) {
  const [products, setProducts] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const URL_CART = 'cart';
  const [state, dispatch] = useReducer(reducer, {count: props.amount});
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(prevState => prevState + 1);
    dispatch({ type: "increment" });
    if (!isAdding) {
      setIsAdding(true);
      setTimeout(() => {
        console.log(quantity);
        setQuantity(1);
        addInCartHandler();
      }, 100);
    }
  };

  const decrement = () => {
    if (state.count > 1) {
      setQuantity(prevState => prevState + 1);
      dispatch({ type: "decrement" });
      if (!isDeleting) {
        setIsDeleting(true);
        setTimeout(() => {
          setQuantity(1);
          deleteInCartHandler()
        }, 100)
      }
    }
  };
  useEffect(()=> {
    setProducts(props)
  }, [products])

  const body = {
    userEmail: "luong@codegym.com",
    ...props,
    amount: quantity,
  };

  const deleteInCartHandler = async () => {
    try {
      const result = await sentRequest(URL_CART, 'PUT', body);
      setIsDeleting(false);
    } catch (error) {

    }
  };

  const addInCartHandler = async () => {
    try {
      const result = await sentRequest(URL_CART, 'POST', body);
      setIsAdding(false)
    } catch (error) {
    }
  };

  props.onSetAmount(state, quantity, increment, decrement)

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

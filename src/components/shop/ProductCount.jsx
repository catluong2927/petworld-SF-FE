import {useEffect, useReducer, useState} from "react";
import {sentRequest} from "../../pages/ServicePackage";
import {redirect} from "react-router-dom";


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
function ItemCounter(props) {
  const [products, setProducts] = useState({});
  const [state, dispatch] = useReducer(reducer, {count: props.amount});

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    if (state.count > 1) {
      dispatch({ type: "decrement" });
    }
  };
  useEffect(()=> {
    setProducts(props)
  }, [products])

  const body = {
    userEmail: "luong@codegym.com",
    ...props,
    amount:  1,
  };

  const deleteInCartHandler = async () => {
    try {
      const url = 'cart/';
      const result = await sentRequest(url, 'DELETE', body);

      return redirect('/cart')
    } catch (error) {

    }
  };


  const addInCartHandler = async (event) => {
    event.preventDefault();

    try {
      const url = 'cart/';
      const result = await sentRequest(url, 'POST', body);
      console.log('Result:', result);
      props.toast.current.show({severity:'success', summary: 'Success', detail:`Add successfully`, life: 3000});
    } catch (error) {
      props.toast.current.show({severity:'error', summary: 'Fail', detail:`Failed to add to cart `, life: 3000});
      console.error('Error:', error.message);
    }
  };
  return (
      <>
        <button onClick={deleteInCartHandler} type="button">
          <i className="bi bi-dash"></i>
        </button>
        <span style={{ margin: "0 20px", fontFamily: "Cabin" }}>
        {state.count}
      </span>
        <button onClick={addInCartHandler} type="button">
          <i className="bi bi-plus"></i>
        </button>
      </>
  );
}
export default ItemCounter;

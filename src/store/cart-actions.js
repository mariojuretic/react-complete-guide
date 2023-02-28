import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartFromDatabase = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching...",
        message: "Fetching cart data...",
      })
    );

    try {
      const response = await fetch(
        "https://react-http-ced8b-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data.");
      }

      const responseData = await response.json();
      dispatch(cartActions.replaceCart(responseData));

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data fetched successfully.",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Could not fetch cart data.",
        })
      );
    }
  };
};

export const saveCartToDatabase = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Saving...",
        message: "Saving cart data...",
      })
    );

    try {
      const response = await fetch(
        "https://react-http-ced8b-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Saving cart data failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Saved cart data successfully",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Saving cart data failed.",
        })
      );
    }
  };
};

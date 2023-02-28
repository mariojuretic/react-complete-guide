import { uiActions } from "./ui-slice";

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

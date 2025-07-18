import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AX8Jl1xK8nwSu-fP_1GuLou3a9068lTM9L8uOBfjJDP01mo_BijzdY_QSsULjvL7-IsamsjC5KqQqdJB",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      ></PayPalButtons>
    </PayPalScriptProvider>
  );
};

export default PayPalButton;

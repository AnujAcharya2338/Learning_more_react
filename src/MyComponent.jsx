import { func } from "prop-types";
import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");

  const [quantity, setQualtity] = useState(0);

  const [comment, setComment] = useState("");

  const [payment, setPayment] = useState("");

  const [shipping, setShipping] = useState("");

  function HandleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function HandleNameChange(event) {
    setName(event.target.value);
  }

  function HandleCommentChange(event) {
    setComment(event.target.value);
  }

  function HandlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function HandleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={HandleNameChange} type="text" />
      <p>Name: {name}</p>

      <input value={quantity} onChange={HandleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        placeholder="Type Here"
        value={comment}
        onChange={HandleCommentChange}
        type="text"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={HandlePaymentChange}>
        <option value="">Select an option:</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment : {payment}</p>

      <label htmlFor="">
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={HandleShippingChange}
        />
        Pick up
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="Delivary"
          checked={shipping === "Delivary"}
          onChange={HandleShippingChange}
        />
        Delivary
      </label>
      <p>Shipping : {shipping}</p>
    </div>
  );
}

export default MyComponent;

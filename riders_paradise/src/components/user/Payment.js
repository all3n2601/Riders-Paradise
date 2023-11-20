import React, { useState } from 'react';
import '../../styles/Payment.css';

const Payment = () => {
  return (
    <div className="container-pay">
      <div className="headpay">
      <h1 className='heading-pay'>Payment</h1>
      </div>
      <form action="#">
        <div className="form-pay">
          <div className="payment details">
            <div className="fields-pay">
              <div className="input-field-pay">
                <label>Card Holder </label>
                <input type="text" placeholder="Enter card holdername" />
              </div>
              <div className="input-field-pay">
                <label>Card Number</label>
                <input type="text" placeholder="Enter Card Number" />
              </div>
              <div className="input-field-pay">
                <label>Expiry</label>
                <input type="text" placeholder="Enter expiry" />
              </div>
              <div className="input-field-pay">
                <label>CVV</label>
                <input type="text" placeholder="Enter CVV" />
              </div>
            </div>
          </div>
        </div>
        <div className="button-submit">
            <button
              className={("Checkout")}
              type="submit"
            >
              Checkout
            </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;

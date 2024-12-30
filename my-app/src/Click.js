import React, { useState } from 'react';

const Click = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox toggle
  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div>
      <h2>Payment Method</h2>

      {/* Checkbox to toggle the payment method view */}
      <label>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
        />
        Show Payment Method Form
      </label>

      {/* Conditionally render the payment form based on checkbox state */}
      {isChecked && (
        <div className="payment-method-form">
          <h3>Enter your payment details</h3>
          <form>
            <div>
              <label>Card Number:</label>
              <input type="text" placeholder="Card Number" />
            </div>
            <div>
              <label>Expiration Date:</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div>
              <label>CVV:</label>
              <input type="text" placeholder="CVV" />
            </div>
            <button type="submit">Submit Payment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Click;

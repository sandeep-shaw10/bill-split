import React from 'react';

const Payment = ({ paymentID, setPaymentID }) => {
  const title = "Payment ID";

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <input
        type="text"
        value={paymentID}
        onChange={(e) => setPaymentID(e.target.value)}
        placeholder="Enter Payment ID"
        className="input input-bordered input-sm w-full max-w-xs dark:text-gray-600"
      />
    </div>
  );
};

export default Payment;

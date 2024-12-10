import React from 'react';

const Report = () => {
  const handlePrint = () => {
    window.print();  // This triggers the browser's print dialog
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md rounded-lg p-4 no-print">
      <h2 className="text-xl font-semibold">Generate Report</h2>
      <button
        className="mt-3 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
        onClick={handlePrint}
      >
        Print
      </button>
    </div>
  );
};

export default Report;

import React, { useState } from 'react';

const Expenditure = ({ members, expenditures, setExpenditures }) => {
  const title = "Expenditure";
  
  // State for form fields and the list of expenditures
  const [details, setDetails] = useState('');
  const [expenditure, setExpenditure] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [editIndex, setEditIndex] = useState(null); // Track which expenditure is being edited

  // Handle adding or updating the expenditure entry
  const handleAddOrUpdateExpenditure = () => {
    if (details && expenditure && paidBy) {
      const newExpenditure = { details, expenditure: parseFloat(expenditure), paidBy };

      if (editIndex !== null) {
        // Update the existing expenditure
        const updatedExpenditures = [...expenditures];
        updatedExpenditures[editIndex] = newExpenditure;
        setExpenditures(updatedExpenditures);
        setEditIndex(null); // Reset edit index
      } else {
        // Add new expenditure
        setExpenditures([...expenditures, newExpenditure]);
      }

      // Reset the form fields
      setDetails('');
      setExpenditure('');
      setPaidBy('');
    }
  };

  // Handle delete expenditure
  const handleDeleteExpenditure = (index) => {
    const updatedExpenditures = expenditures.filter((_, i) => i !== index);
    setExpenditures(updatedExpenditures);
  };

  // Calculate the total and per-person expenditure
  const totalExpenditure = expenditures.reduce((sum, item) => sum + item.expenditure, 0);
  const perPersonExpenditure = totalExpenditure / members.length;

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {/* Form Inputs */}
      <div className="flex flex-col sm:flex-row sm:space-x-2 mb-4 no-print">
        <input
          type="text"
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="input input-bordered input-sm w-full max-w-xs mb-2 sm:mb-0 dark:text-gray-600"
        />
        <input
          type="number"
          placeholder="Expenditure"
          value={expenditure}
          onChange={(e) => setExpenditure(e.target.value)}
          className="input input-bordered input-sm w-full max-w-xs mb-2 sm:mb-0 dark:text-gray-600"
        />
        <select
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
          className="select select-bordered select-sm w-full max-w-xs mb-2 sm:mb-0 dark:text-gray-600"
        >
          <option value="">Paid By</option>
          {members.map((member, index) => (
            <option key={index} value={member}>{member}</option>
          ))}
        </select>
        <button
          onClick={handleAddOrUpdateExpenditure}
          className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white border-none"
        >
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      {/* Table for displaying expenditures */}
      {expenditures.length > 0 && (
        <div className="overflow-x-auto mb-4">
            <table className="table w-full">
                <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                    <th className="text-gray-700 dark:text-gray-300">Details</th>
                    <th className="text-gray-700 dark:text-gray-300">Expenditure</th>
                    <th className="text-gray-700 dark:text-gray-300">Paid By</th>
                    <th className="text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
                </thead>
                <tbody>
                {expenditures
                  .slice()
                  .reverse()
                  .map((item, reversedIndex) => {
                    const originalIndex = expenditures.length - 1 - reversedIndex; // Map reversed index to the original index
                    return (
                      <tr
                        key={originalIndex}
                        className={`${
                          reversedIndex % 2 === 0
                            ? "bg-gray-100 dark:bg-gray-800"
                            : "bg-white dark:bg-gray-900"
                        }`}
                      >
                        <td className="text-gray-800 dark:text-gray-200">{item.details}</td>
                        <td className="text-gray-800 dark:text-gray-200">{item.expenditure}</td>
                        <td className="text-gray-800 dark:text-gray-200">{item.paidBy}</td>
                        <td>
                          <button
                            onClick={() => {
                              setDetails(item.details);
                              setExpenditure(item.expenditure);
                              setPaidBy(item.paidBy);
                              setEditIndex(originalIndex); // Use the original index for editing
                            }}
                            className="btn btn-xs bg-yellow-500 hover:bg-yellow-600 text-white dark:bg-yellow-600 dark:hover:bg-yellow-500 mr-2 border-none"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteExpenditure(originalIndex)} // Use the original index for deletion
                            className="btn btn-xs bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-500 border-none"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
            </table>
        </div>
      )}

      {/* Total and Per Person Expenditure */}
      {expenditures.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold text-lg">Total: ₹{totalExpenditure.toFixed(2)}</p>
          <p className="font-semibold text-lg">Per Person: ₹{perPersonExpenditure.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Expenditure;

import React, { useState } from 'react';

const Members = ({ isDarkMode, members, setMembers, expenditures }) => {

  const [inputValue, setInputValue] = useState('');

  const handleAddMember = () => {
    if (inputValue.trim().length > 16) {
      alert('Member name cannot exceed 16 characters.');
      return;
    }
    if (inputValue.trim() !== '' && !members.includes(inputValue.trim())) {
      setMembers([...members, inputValue.trim()]);
      setInputValue(''); // Clear input field after adding
    } else if (members.includes(inputValue.trim())) {
      alert('This member is already added!');
    }
  };
  
  

  const handleRemoveMember = (member) => {
    // Check if the member is in the expenditures array
    const isMemberInExpenditure = expenditures.some(expenditure => expenditure.paidBy === member);
  
    if (isMemberInExpenditure) {
      alert('This member cannot be removed as they are part of an expenditure!');
    } else {
      setMembers(members.filter((m) => m !== member));
    }
  };
  

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md rounded-lg p-4 no-print">
      <h2 className="text-xl font-semibold mb-4">Members</h2>
      {/* Input and Button in same row */}
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Type here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input input-bordered input-sm w-full max-w-xs dark:text-gray-600"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddMember();
            }
          }}
        />
        <button
          onClick={handleAddMember}
          className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white border-none"
        >
          Add
        </button>
      </div>
      
      {/* Display added members as badges with delete option */}
      <div className="flex flex-wrap gap-2">
        {members.map((member, index) => (
          <div
            key={index} 
            className={`badge bg-blue-500 flex items-center border-none text-white h-auto py-1`}
            style={{ wordBreak: 'break-word', maxWidth: '150px' }}
          >
            {member}
            <button
              onClick={() => handleRemoveMember(member)}
              className={`ml-2 text-white ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-full w-6 h-4 flex items-center justify-center`}
            >
              <span className={` text-xs ${!isDarkMode ? 'text-gray-900' : 'text-gray-100'}`}>x</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;

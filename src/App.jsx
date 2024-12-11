import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Members from './components/Members';
import Expenditure from './components/Expenditure';
import Contribution from './components/Contribution';
import Payment from './components/Payment';
import Report from './components/Report';

const App = () => {
  // Initialize state with data from localStorage
  const [members, setMembers] = useState(() => {
    const storedMembers = localStorage.getItem('members');
    return storedMembers ? JSON.parse(storedMembers) : [];
  });

  const [expenditures, setExpenditures] = useState(() => {
    const storedExpenditures = localStorage.getItem('expenditures');
    return storedExpenditures ? JSON.parse(storedExpenditures) : [];
  });

  const [paymentID, setPaymentID] = useState(() => {
    const storedPaymentID = localStorage.getItem('paymentID');
    return storedPaymentID ? JSON.parse(storedPaymentID) : ``;
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('isDarkMode');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  // Save `members` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  // Save `expenditures` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('expenditures', JSON.stringify(expenditures));
  }, [expenditures]);

  // Save `expenditures` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('paymentID', JSON.stringify(paymentID));
  }, [paymentID]);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} flex flex-col items-center p-4`}>
      
      <div className='print-view'>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl space-y-4 overflow-hidden">
        {/* Section Container */}
        <div className="space-y-4">
          <Members
            isDarkMode={isDarkMode}
            members={members}
            setMembers={setMembers}
            expenditures={expenditures}
          />
          <Expenditure
            members={members}
            expenditures={expenditures}
            setExpenditures={setExpenditures}
          />
          <Contribution members={members} expenditures={expenditures} />
        </div>
        {/* Add spacing between groups on large screens */}
        <div className="space-y-4 lg:space-y-0 lg:mt-6 lg:grid lg:grid-cols-2 lg:gap-4">
          <Payment
            paymentID={paymentID}
            setPaymentID={setPaymentID}
          />
          <Report />
        </div>
      </main>

      </div>

      <Footer />
    </div>
  );
};

export default App;

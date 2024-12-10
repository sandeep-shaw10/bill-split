const Contribution = ({ members, expenditures }) => {
    const title = "Contribution";
  
    // Calculate total expenditure and per person cost
    const totalExpenditure = expenditures.reduce((sum, item) => sum + item.expenditure, 0);
    const perPersonExpenditure = totalExpenditure / members.length;
  
    // Calculate total contribution by each member
    const memberContributions = members.reduce((acc, member) => {
      acc[member] = 0;
      expenditures.forEach((item) => {
        if (item.paidBy === member) {
          acc[member] += item.expenditure;
        }
      });
      return acc;
    }, {});
  
    // Determine the net amount to receive or pay
    const memberBalance = members.map((member) => {
      const totalContribution = memberContributions[member];
      const netAmount = totalContribution - perPersonExpenditure;
      return { name: member, totalContribution, netAmount };
    }).filter(member => member.totalContribution > 0); // Only include members who contributed
  
    const nonContributingMembers = members.filter(
      (member) => !expenditures.some((expenditure) => expenditure.paidBy === member)
    );
  
    return (
      <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
  
        {/* Table for showing contributions and net amount */}
        <div className="overflow-x-auto mb-4">
            <table className="table w-full">
                <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                    <th className="text-gray-700 dark:text-gray-300">Name</th>
                    <th className="text-gray-700 dark:text-gray-300">Total Contribution</th>
                    <th className="text-gray-700 dark:text-gray-300">Flow</th>
                    <th className="text-gray-700 dark:text-gray-300">Net Amount</th>
                </tr>
                </thead>
                <tbody>
                {memberBalance.map((member, index) => (
                    <tr
                    key={index}
                    className={`${
                        index % 2 === 0
                        ? "bg-gray-100 dark:bg-gray-800"
                        : "bg-white dark:bg-gray-900"
                    }`}
                    >
                    <td className="text-gray-800 dark:text-gray-200">{member.name}</td>
                    <td className="text-gray-800 dark:text-gray-200">
                        {member.totalContribution.toFixed(2)}
                    </td>
                    <td className="text-gray-800 dark:text-gray-200">
                        {-1 * member.netAmount.toFixed(2) > 0 ? "To Pay" : "Will Receive"}
                    </td>
                    <td
                        className={`${
                        -1 * member.netAmount.toFixed(2) > 0
                            ? "text-red-500 dark:text-red-400"
                            : "text-green-500 dark:text-green-400"
                        }`}
                    >
                        {(-1 * member.netAmount).toFixed(2) > 0
                        ? (-1 * member.netAmount).toFixed(2)
                        : member.netAmount.toFixed(2)}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

  
        {/* Display members who didn't contribute */}
        {nonContributingMembers.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold">Other Members needs to pay: ₹{perPersonExpenditure.toFixed(2)}</h3>
              {nonContributingMembers.map((member, index) => (
                <span key={index} className="">{member}{index !== nonContributingMembers.length - 1 && ", "} </span>
              ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Contribution;
  
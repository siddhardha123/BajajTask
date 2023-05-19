import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setShowAll(false);
  };
  
  const filteredEmployees = employees.filter((employee: any) => {
    const { name } = employee;
    if (name && name.toLowerCase().includes(searchQuery)) {
      return true;
    }
    return false;
  });

  const handleShowAll = () => {
    setShowAll(true);
    setSearchQuery('');
  };


  const displayedEmployees = showAll ? employees : filteredEmployees;

  return (
    <div className="rounded shadow p-4">
      <div className="mb-4 px-72">
        <input
          type="text"
          placeholder="Search employee"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      {filteredEmployees.length === 0 && !showAll && (
        <button onClick={handleShowAll} className="bg-blue-500 text-white px-4 py-2 rounded">
          Show All Employees
        </button>
      )}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
  {displayedEmployees.length > 0 ? (
    displayedEmployees.map((employee: any) => (
      <EmployeeCard key={employee.id} employee={employee} />
    ))
  ) : (
    <p>No matching employees found.</p>
  )}
</div>

    </div>
  );
};

export default EmployeeList;

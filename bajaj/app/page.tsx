"use client"
import React, { useEffect, useState } from 'react';
import EmployeeList from './compoents/EmployeeList';
const HomePage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json');
        const data = await response.json();
        console.log(data)
        setEmployees(data.employees);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1 className='text-center text-3xl mt-10'>Employee List</h1>
      <p className='text-center'>click on the card to view more details</p>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default HomePage;

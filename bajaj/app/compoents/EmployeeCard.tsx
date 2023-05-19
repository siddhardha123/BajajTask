import React, { useState } from 'react';

const EmployeeCard = ({ employee }: any) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-blue-200 rounded shadow p-4 mb-8 mx-8  " onClick={toggleModal}>
      <h2 className="text-2xl font-bold mb-2">{employee.name}</h2>
      <p className="text-lg mb-2">Designation: {employee.designation}</p>
      <p className="text-lg mb-4">Skills: {employee.skills.join(', ')}</p>
      
      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-black text-white w-1/2 rounded shadow p-4">
      <h2 className="text-2xl font-bold mb-2">{employee.name}</h2>
      <p className="text-lg mb-2">Designation: {employee.designation}</p>
     
      <h3 className="text-2xl font-bold mb-2">Projects:</h3>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="text-lg font-bold border-b border-gray-400 px-4 py-2">Project Name</th>
            <th className="text-lg font-bold border-b border-gray-400 px-4 py-2">Team Size</th>
            <th className="text-lg font-bold border-b border-gray-400 px-4 py-2">Completed Tasks</th>
            <th className="text-lg font-bold border-b border-gray-400 px-4 py-2">Team Members</th>
          </tr>
        </thead>
        <tbody>
          {employee.projects &&
            employee.projects.map((project: any, index: any) => (
              <tr key={index}>
                <td className="text-lg border-b border-gray-400 px-4 py-2">{project.name}</td>
                <td className="text-lg border-b border-gray-400 px-4 py-2">{project.team.length}</td>
                <td className="text-lg border-b border-gray-400 px-4 py-2">
                  {project.tasks && project.tasks.filter((task: any) => task.status === 'completed').length}
                </td>
                <td className="text-lg border-b border-gray-400 px-4 py-2">
                  <ul>
                    {project.team.map((member: any, memberIndex: any) => (
                      <li key={memberIndex}>{member.name}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Close
      </button>
    </div>
  </div>
)}





    </div>
  );
};

export default EmployeeCard;

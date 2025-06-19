import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function JobListForm(){
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://final-project-api-alpha.vercel.app/api/jobs') // Sample API
      .then(response => response.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;


return(
<div className="w-screen h-screen bg-white flex items-center justify-full p-10">
    
  <div className="w-full h-full">
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
      {/* Table Header */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Jobs List</h2>
            <p className="text-gray-600">
              Manage your jobs list here.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/AddJobListForm">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
              Add a New Job
            </button>
            </Link>
          </div>
        </div>
        {/* Search and Filter */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full "
              placeholder="Search jobs..."
            />
          </div>
          <div>
            <select className="border border-gray-300 rounded-lg px-4 py-2  w-full sm:w-auto">
              <option value="">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
            </select>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="w-full overflow-x-auto">
      <table className="min-w-full table-auto">
      <thead className="bg-gray-50 sticky top-0 z-10">
        <tr>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualifications</th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tenure</th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
  </tr>

            <tr key={jobs.id}>
            <td>{jobs.title}</td>
            <td>{jobs.job_description}</td>
            <td>{jobs.job_qualification}</td>
            <td>{jobs.job_type}</td>
            <td>{jobs.job_tenure}</td>
            <td>
              <span>
                {jobs.job_status}
              </span>
            </td>
            <td>{jobs.company_name}</td>
            <td>
              <img src={jobs.image_url} alt={jobs.company_name}/>
            </td>
            <td>{jobs.company_city}</td>
            <td>{jobs.salary_min}{jobs.salary_max}</td>
            <td>{jobs.created_at}</td>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {jobs.map(job => (
    <tr key={job.id} className="hover:bg-gray-50 transition-colors duration-150">
      <td className="px-6 py-4 whitespace-nowrap">{job.title}</td>
      <td className="px-6 py-4 whitespace-normal break-words">{job.job_description}</td>
      <td className="px-6 py-4 whitespace-normal break-words">{job.job_qualification}</td>
      <td className="px-6 py-4 whitespace-nowrap">{job.job_type}</td>
      <td className="px-6 py-4 whitespace-nowrap">{job.job_tenure}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {job.job_status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{job.company_name}</td>
       <td>
          <img
            src={job.company_image_url}
            className="h-12 w-12 rounded-full object-cover"
          />
        </td>
      <td className="px-6 py-4 whitespace-nowrap">{job.company_city}</td>
      <td className="px-6 py-4 whitespace-nowrap">{job.salary_min} - {job.salary_max}</td>
      <td className="px-6 py-4 whitespace-nowrap">{job.createdAt}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
        <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <div className="flex items-center justify-between flex-col sm:flex-row">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">5</span> of{" "}
              <span className="font-medium">24</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

)

}

export default JobListForm;
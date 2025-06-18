import { useState } from "react";

function AddJobListForm(){
return(
<form className="w-screen h-screen p-10 bg-gray-50 overflow-auto">
  <div className="max-w-1xl mx-auto space-y-8 divide-y divide-gray-300 bg-white p-8 rounded-xxl shadow">
    <div className="pt-8">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Add New Job Form
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Use this form to add your New Job
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Job Title{" "}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Job Qualifications{" "}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Job Type{" "}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="region"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Tenure{" "}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="postal-code"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Status{" "}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="region"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Company Name{" "}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="region"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            City{" "}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Company Image{" "}
          </label>
          <div className="mt-1 flex items-center">
            <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <button
              type="button"
              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change
            </button>
          </div>
        </div>
        
        <div className="sm:col-span-3">
          <label
            htmlFor="region"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Salary Min{" "}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="region"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Salary Max{" "}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="pt-5">
    <div className="flex justify-end">
      <button
        type="button"
        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save
      </button>
    </div>
  </div>
</form>

)

}

export default AddJobListForm;
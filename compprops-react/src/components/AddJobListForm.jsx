import { useState } from "react";

function AddJobListForm(){
  const [formData, setFormData] = useState({
    title: "",
    job_description:"",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
    createdAt: "",
    __v: 0
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.job_description ||
      !formData.job_qualification ||
      !formData.job_type ||
      !formData.job_tenure ||
      !formData.job_status ||
      !formData.company_name ||
      !formData.company_image_url ||
      !formData.company_city ||
      !formData.salary_min ||
      !formData.salary_max ||
    ) {
      alert("Please fill all fields correctly.");
      return;
    }
  
    try {
      const response = await fetch("https://final-project-api-alpha.vercel.app/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert(`Registration failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };


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
                id="title"
                type="text"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={formData.title}
                onChange={handleChange}
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
            id="job_description"
            type="text"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            value={formData.job_description}
            onChange={handleChange}
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
            id="job_type"
            type="text"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            value={formData.job_type}
            onChange={handleChange}
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
              id="job_tenure"
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.job_tenure}
              onChange={handleChange}
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
              id="job_status"
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.job_status}
              onChange={handleChange}
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
              id="company_name"
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.company_name}
              onChange={handleChange}
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
              id="company_city"
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.company_city}
              onChange={handleChange}
            />
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
              id="salary_min"
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.salary_min}
              onChange={handleChange}
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
              id="salary_max"
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.salary_max}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            htmlFor="region"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Company Image Url{" "}
          </label>
          <div className="mt-1">
          <input
              id="company_image_url"
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.company_image_url}
              onChange={handleChange}
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
      <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} />
      <input name="qualification" value={formData.qualification} onChange={handleChange} />
      {/* Add the rest of your fields similarly */}
      <button type="submit">Save</button>
    </form>

    </div>
  </div>
</form>

)

}

export default AddJobListForm;
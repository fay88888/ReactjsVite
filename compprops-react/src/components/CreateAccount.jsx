import { useState } from "react";


function CreateAccount() {
  const [formData, setFormData] = useState({
    email: "",
    image_url: "",
    name: "",
    password: "",
    termsAccepted: false,
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
      !formData.email ||
      !formData.image_url ||
      !formData.name ||
      !formData.password
    ) {
      alert("Please fill all fields correctly.");
      return;
    }
  
    try {
      const response = await fetch("https://final-project-api-alpha.vercel.app/api/auth/register", {
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center min-h-screen w-full px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border sm:max-w-md xl:p-0">
          <div className="p-6
           space-y-4 sm:p-8">
            <p className="text-xl font-bold tracking-tight text-gray-900">Create an account</p>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
              <input
                id="email"
                type="text"
                placeholder="example@yopmail.com"
                className="bg-gray-50 border rounded-lg w-full p-2.5"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Image Url</label>
              <textarea
                id="image_url"
                className="bg-gray-50 border rounded-lg w-full p-2.5"
                value={formData.image_url}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
              <input
                id="name"
                type="text"
                className="bg-gray-50 border rounded-lg w-full p-2.5"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                id="password"
                type="text"
                className="bg-gray-50 border rounded-lg w-full p-2.5"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-start">
              <input
                id="termsAccepted"
                type="checkbox"
                className="w-4 h-4 border rounded bg-gray-50"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label className="ml-3 text-sm text-gray-500">I accept the <a href="#" className="text-primary-600 hover:underline">Terms and Conditions</a></label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 rounded-lg text-white px-5 py-2.5"
            >
              Create an account
            </button>
            
            <div className="flex justify-center mt-6 mb-4">
            <label className="ml-3 text-sm text-gray-500">
            <a href="/LoginForm" className="text-primary-600 hover:underline">
            Back to Login Form
            </a>
            </label>
            </div>
            
          </div>
          
        </div>
      </div>
    </form>
  );
}

export default CreateAccount;

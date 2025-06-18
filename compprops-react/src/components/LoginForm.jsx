import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || formData.password !== formData.confirmPassword) {
      alert("Please fill all fields correctly.");
      return;
    }
    alert("Login successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center min-h-screen w-full px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 sm:p-8">
            <p className="text-xl font-bold tracking-tight text-gray-900">Create an account</p>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Your username</label>
              <input
                id="username"
                type="text"
                placeholder="JohnDoe"
                className="bg-gray-50 border rounded-lg w-full p-2.5"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-gray-50 border rounded-lg w-full p-2.5"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="bg-gray-50 border rounded-lg w-full p-2.5"
                value={formData.confirmPassword}
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
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;

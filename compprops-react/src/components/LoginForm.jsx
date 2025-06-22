import React, { useState } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";



function LoginForm(){
    

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
          alert("Please enter both email and password.");
          return;
        }
      
        try {
          const response = await fetch("https://final-project-api-alpha.vercel.app/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            Cookies.set("token", data.token, { expires: 7, path: "/" });
            Cookies.set("user", JSON.stringify(data.user), {
              expires: 1, // 1 hari
              path: "/",
              secure: false,
            });
          
            alert("Login successful!");
            console.log("Received token:", data.token);
            navigate("/JobListForm");
          
          } else {
            alert(`Login failed: ${data.message || "Invalid credentials"}`);
          }
        } catch (error) {
          alert(`Error: ${error.message}`);
        }
      }; 
    
    
return(
    <div className="min-h-screen bg-white-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Sign in to your account
    </h2>
    <p className="mt-2 text-center text-sm text-gray-600 max-w">
      Or
      <a href="/CreateAccount" className="font-medium text-blue-600 hover:text-blue-500">
        create an account
      </a>
    </p>
  </div>
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
               id="password"
               name="password"
               type="password"
               value={formData.password}
               onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-100 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div>
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <img
                className="h-5 w-5"
                src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <img
                className="h-5 w-5"
                src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <img
                className="h-6 w-6"
                src="https://www.svgrepo.com/show/506498/google.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);}
export default LoginForm;


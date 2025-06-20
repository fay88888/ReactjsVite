import { Link } from 'react-router-dom';
import JobDetailDialog from './JobDetailDialog';
import React, { useEffect, useState } from 'react';


function LandingPages (){
  const [isOpen, setIsOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);


  useEffect(() => {
    fetch('https://final-project-api-alpha.vercel.app/api/jobs') // Replace with your API
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setSelectedJob(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);



    return (

<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JobFlow - Your Dream Career Awaits</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');\n        \n        * {\n            font-family: 'Inter', sans-serif;\n        }\n        \n        .gradient-bg {\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n        }\n        \n        .glass-effect {\n            background: rgba(255, 255, 255, 0.1);\n            backdrop-filter: blur(10px);\n            border: 1px solid rgba(255, 255, 255, 0.2);\n        }\n        \n        .floating {\n            animation: floating 3s ease-in-out infinite;\n        }\n        \n        .floating-delayed {\n            animation: floating 3s ease-in-out infinite;\n            animation-delay: 1.5s;\n        }\n        \n        @keyframes floating {\n            0%, 100% { transform: translateY(0px); }\n            50% { transform: translateY(-20px); }\n        }\n        \n        .slide-in-left {\n            animation: slideInLeft 0.8s ease-out;\n        }\n        \n        .slide-in-right {\n            animation: slideInRight 0.8s ease-out;\n        }\n        \n        @keyframes slideInLeft {\n            from { transform: translateX(-100px); opacity: 0; }\n            to { transform: translateX(0); opacity: 1; }\n        }\n        \n        @keyframes slideInRight {\n            from { transform: translateX(100px); opacity: 0; }\n            to { transform: translateX(0); opacity: 1; }\n        }\n        \n        .fade-in-up {\n            animation: fadeInUp 0.6s ease-out;\n        }\n        \n        @keyframes fadeInUp {\n            from { transform: translateY(30px); opacity: 0; }\n            to { transform: translateY(0); opacity: 1; }\n        }\n        \n        .pulse-glow {\n            animation: pulseGlow 2s ease-in-out infinite;\n        }\n        \n        @keyframes pulseGlow {\n            0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.4); }\n            50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.8); }\n        }\n        \n        .job-card {\n            transition: all 0.3s ease;\n        }\n        \n        .job-card:hover {\n            transform: translateY(-10px) scale(1.02);\n            box-shadow: 0 20px 40px rgba(0,0,0,0.1);\n        }\n        \n        .category-card {\n            transition: all 0.3s ease;\n        }\n        \n        .category-card:hover {\n            transform: scale(1.05);\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            color: white;\n        }\n        \n        .stats-counter {\n            animation: countUp 2s ease-out;\n        }\n        \n        @keyframes countUp {\n            from { opacity: 0; transform: scale(0.5); }\n            to { opacity: 1; transform: scale(1); }\n        }\n        \n        .blob {\n            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;\n            animation: morphing 8s ease-in-out infinite;\n        }\n        \n        @keyframes morphing {\n            0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }\n            25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }\n            50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }\n            75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }\n        }\n    "
    }}
  />
  {/* Navigation */}
  
  <nav className="fixed w-full z-50 glass-effect">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center slide-in-left">

            
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2"
              />
            </svg>
          </div>
          <span className="ml-2 text-xl font-bold text-white">JobFlow</span>
        </div>
        <div className="hidden md:flex space-x-8 slide-in-right">
          <a
            href="#"
            className="text-white hover:text-purple-300 transition-colors"
          >
            Jobs
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-300 transition-colors"
          >
            Companies
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-300 transition-colors"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-300 transition-colors"
          >
            About
          </a>
        </div>
        <div className="flex space-x-4 slide-in-right">
          <Link to="/LoginForm">
            <button className="text-white hover:text-purple-300 transition-colors">
              Sign In
            </button>
          </Link>

          <Link to="/JobListForm">
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors pulse-glow">
              Post Job
            </button>
          </Link>
        </div>

      </div>
    </div>
  </nav>
  {/* Hero Section */}
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-300 via-blue-300 to-indigo-400">
    {/* Animated Background Elements */}
    <div className="absolute inset-0">
      <div className="blob absolute top-20 left-10 w-72 h-72 bg-purple-300 opacity-20 floating" />
      <div className="blob absolute bottom-20 right-10 w-96 h-96 bg-blue-300 opacity-20 floating-delayed" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full opacity-70 floating" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-50 floating-delayed" />
      <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-white rounded-full opacity-60 floating" />
    </div>
    <div className="relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white slide-in-left pl-12">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Find Your
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Dream Job
            </span>
            Today
          </h1>
          <p className="text-xl mb-8 text-purple-100">
            Connect with top companies and discover opportunities that match
            your skills and passion. Your career journey starts here.
          </p>
          {/* Search Bar */}
          <div className="bg-white p-2 rounded-2xl shadow-2xl mb-8">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:outline-none text-gray-700"
                />
              </div>
              <div className="flex-1 relative">
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:outline-none text-gray-700"
                />
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Search Jobs
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-purple-100">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-yellow-400 stats-counter">
                10K+
              </span>
              <span className="ml-2">Active Jobs</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-yellow-400 stats-counter">
                5K+
              </span>
              <span className="ml-2">Companies</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-yellow-400 stats-counter">
                50K+
              </span>
              <span className="ml-2">Job Seekers</span>
            </div>
          </div>
        </div>
        <div className="slide-in-right mr-12">
          <div className="relative">
            <div className="bg-white p-8 rounded-3xl shadow-2xl floating">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">
                    Application Sent!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Senior Developer at TechCorp
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Match Score</span>
                  <span className="text-sm font-semibold text-green-600">
                    95%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                    style={{ width: "95%" }}
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl floating-delayed">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-800">
                    Interview Scheduled
                  </p>
                  <p className="text-xs text-gray-600">Tomorrow 10 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Job Categories */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in-up">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Job Categories
        </h2>
        <p className="text-xl text-gray-600">
          Find opportunities in your field of expertise
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="category-card bg-white p-8 rounded-2xl shadow-lg cursor-pointer">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Technology</h3>
          <p className="text-gray-600 mb-4">
            Software development, AI, cybersecurity and more
          </p>
          <span className="text-blue-600 font-medium">2,341 jobs</span>
        </div>
        <div className="category-card bg-white p-8 rounded-2xl shadow-lg cursor-pointer">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Marketing</h3>
          <p className="text-gray-600 mb-4">
            Digital marketing, content creation, branding
          </p>
          <span className="text-green-600 font-medium">1,892 jobs</span>
        </div>
        <div className="category-card bg-white p-8 rounded-2xl shadow-lg cursor-pointer">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Finance</h3>
          <p className="text-gray-600 mb-4">
            Banking, investment, financial planning
          </p>
          <span className="text-purple-600 font-medium">1,567 jobs</span>
        </div>
        <div className="category-card bg-white p-8 rounded-2xl shadow-lg cursor-pointer">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
          <p className="text-gray-600 mb-4">Medical, nursing, pharmaceutical</p>
          <span className="text-orange-600 font-medium">2,103 jobs</span>
        </div>
      </div>
    </div>
  </section>
  {/* Featured Jobs */}
{selectedJob && (
  <JobDetailDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <div className="bg-white border rounded-2xl p-6 shadow-lg">

    </div>
  </JobDetailDialog>
)}

  <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Opportunities</h2>
          <p className="text-xl text-gray-600">Hand-picked jobs from top companies</p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading jobs...</p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white border rounded-2xl p-6 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">{job.company?.charAt(0) || '?'}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 ">{job.title}</h3>
                      <p className="text-gray-600 text-sm">{job.company_name}</p>
                      
                      <div className="flex items-center text-gray-600">
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                              </svg>
                              <span className="text-sm">{job.company_city}</span>   
                      </div>
                      
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-small whitespace-nowrap">
                    {job.job_type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                <span className="ml-auto text-2xl bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                Salary: Rp.{job.salary_min} - Rp.{job.salary_max}
                </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedJob(jobs);
                    setIsOpen(true);
                  }}
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>

  {/* CTA Section */}
  <section className="py-20 gradient-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
          Join thousands of professionals who have found their dream careers
          through JobFlow. Your next opportunity is just a click away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 pulse-glow">
            Get Started Free
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all">
            Learn More
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-effect p-6 rounded-2xl">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-purple-100">
              Apply to multiple jobs with one click using our smart application
              system.
            </p>
          </div>
          <div className="glass-effect p-6 rounded-2xl">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Perfect Matches
            </h3>
            <p className="text-purple-100">
              Our AI algorithm finds jobs that perfectly match your skills and
              preferences.
            </p>
          </div>
          <div className="glass-effect p-6 rounded-2xl">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Expert Support
            </h3>
            <p className="text-purple-100">
              Get personalized career advice and interview tips from industry
              experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in-up">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What Our Users Say
        </h2>
        <p className="text-xl text-gray-600">
          Real stories from real professionals
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b589?w=64&h=64&fit=crop&crop=face"
              alt="Sarah"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4">
              <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
              <p className="text-gray-600">Software Engineer</p>
            </div>
          </div>
          <div className="flex mb-4">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-gray-600 italic">
            "JobFlow helped me land my dream job at a top tech company. The
            match algorithm is incredibly accurate, and I received interview
            requests within days!"
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
              alt="Michael"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4">
              <h4 className="font-semibold text-gray-800">Michael Chen</h4>
              <p className="text-gray-600">Product Manager</p>
            </div>
          </div>
          <div className="flex mb-4">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-gray-600 italic">
            "The user experience is fantastic! The platform made it so easy to
            track my applications and communicate with recruiters. Highly
            recommend!"
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
              alt="Emily"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4">
              <h4 className="font-semibold text-gray-800">Emily Rodriguez</h4>
              <p className="text-gray-600">UX Designer</p>
            </div>
          </div>
          <div className="flex mb-4">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-gray-600 italic">
            "JobFlow's career advice and resources are top-notch. I improved my
            portfolio based on their feedback and got hired within a month!"
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2"
                />
              </svg>
            </div>
            <span className="ml-2 text-2xl font-bold">JobFlow</span>
          </div>
          <p className="text-gray-400 mb-6">
            Connecting talented professionals with their dream careers
            worldwide.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              ></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>


)}

export default LandingPages;
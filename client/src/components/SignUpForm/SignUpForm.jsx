import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    admissionNumber: '',
    mobileNumber: '',
    personalEmail: '',
    instituteEmail: '',
    branch: '',
    linkedInProfile: '',
    githubProfile: '',
    leetcodeProfile: '',
    codeforcesProfile: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { fullName, admissionNumber, mobileNumber, personalEmail, instituteEmail, branch, linkedInProfile, githubProfile, leetcodeProfile, codeforcesProfile, password } = formData;

    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const instituteEmailPattern = /^u\d{2}(cs|ai)\d{3}@coed\.svnit\.ac\.in$/;

    if (!admissionNumber.match(/U\d{2}(CS|AI)\d{3}/)) {
      toast.error("Invalid Admission Number");
      return false;
    }
    if (!mobileNumber.match(/^[0-9]{10}$/)) {
      toast.error("Invalid Mobile Number");
      return false;
    }
    if (!personalEmail.match(emailPattern)) {
      toast.error("Invalid Personal Email");
      return false;
    }
    if (!instituteEmail.match(instituteEmailPattern)) {
      toast.error("Invalid Institute Email");
      return false;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return false;
    }

    return true;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;

  //   try {
  //     const res = await fetch('http://localhost:8080/auth/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });

  //     const result = await res.json();
  //     if (res.ok) {
  //       toast.success("Sign up successful! Redirecting to Login Page...");
  //       setTimeout(() => {
  //         window.location.href = '/login';  // Change this to your desired route
  //       }, 2000);
  //     } else {
  //       toast.error(result.message || "Sign up failed");
  //     }
  //   } catch (error) {
  //     toast.error("Error signing up");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    try {
      const toastId = toast.loading('Logging in...');
      const res = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
      if (res.ok) {
        toast.success('Sign up successful! Please check your email to verify your account.', { id: toastId });
        setTimeout(() => {
          window.location.href = '/login';  // Change this to your desired route
        }, 2000);
      } else {
        toast.error(result.message || 'Sign up failed', { id: toastId });
      }
    } catch (error) {
      toast.remove()
      toast.error('Error signing up');
    }
  };
  

  return (
    <div className='bg-black-2 p-16'>
      <div className='flex justify-center mb-5'>
        <img
          src="/assets/NEXUStext.png"
          alt="NEXUS"
          className="flex w-[20rem] items-center object-cover"
        />
      </div>

      <div className="min-h-screen flex items-center justify-center bg-black-2">

        <Toaster position="top-center" reverseOrder={false} />
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-center text-white text-2xl font-semibold mb-6">Sign Up</h2>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="w-full p-2 bg-gray-200 text-black rounded"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="admissionNumber">
              Admission Number
            </label>
            <input
              className="w-full p-2 bg-gray-200 text-black rounded"
              type="text"
              id="admissionNumber"
              name="admissionNumber"
              pattern="U\d{2}(CS|AI)\d{3}"
              value={formData.admissionNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              className="w-full p-2 bg-gray-200 text-black rounded"
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              pattern="^[0-9]{10}$"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="personalEmail">
              Personal Email
            </label>
            <input
              className="w-full p-2 bg-gray-200 text-black rounded"
              type="email"
              id="personalEmail"
              name="personalEmail"
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              value={formData.personalEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="instituteEmail">
              Institute Email
            </label>
            <input
              className="w-full p-2 bg-gray-200 text-black rounded"
              type="email"
              id="instituteEmail"
              name="instituteEmail"
              pattern="^u\d{2}(cs|ai)\d{3}@coed\.svnit\.ac\.in$"
              value={formData.instituteEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="branch">
              Branch
            </label>
            <select
              className="w-full p-2 bg-gray-200 text-black rounded"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="AI">AI</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="linkedInProfile">
              LinkedIn Profile
            </label>
            <input
              className="w-full p-2 bg-gray-200 text-black rounded"
              type="url"
              id="linkedInProfile"
              name="linkedInProfile"
              pattern="^(https?:\/\/)?([\w]+\.)?linkedin\.com\/.*$"
              value={formData.linkedInProfile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="githubProfile">
              GitHub Profile
            </label>
            <input
              className="w-full p-2 bg-gray-200 text-black rounded"
              type="url"
              id="githubProfile"
              name="githubProfile"
              pattern="^(https?:\/\/)?(www\.)?github\.com\/[A-z0-9_-]+\/?$"
              value={formData.githubProfile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="leetcodeProfile">
              LeetCode Profile
            </label>
            <input
              className="w-full p-2 bg-gray-200 text-black rounded"
              type="url"
              id="leetcodeProfile"
              name="leetcodeProfile"
              pattern="^(https?:\/\/)?(www\.)?leetcode\.com\/[A-z0-9_-]+\/?$"
              value={formData.leetcodeProfile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="codeforcesProfile">
              Codeforces Profile
            </label>
            <input
              className="w-full p-2 bg-gray-2 text-black rounded"
              type="url"
              id="codeforcesProfile"
              name="codeforcesProfile"
              pattern="^(https?:\/\/)?(www\.)?codeforces\.com\/profile\/[A-z0-9_-]+\/?$"
              value={formData.codeforcesProfile}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 bg-gray-2 text-black rounded"
              type="password"
              id="password"
              name="password"
              minLength="8"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;

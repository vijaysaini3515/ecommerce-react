import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate =useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [formData,setFormData] = useState({
    email:'',
    password:''
  });

  const forgetPassword =()=>{
    navigate('/verify')
  }

  return (
    <div className="flex items-center justify-center p-10">
      <div className="bg-white w-[400px]  shadow-lg rounded-lg flex flex-col justify-center p-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Register</h2>

        <form className="space-y-3">
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
              name='email'
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
              name='email'
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="block w-full px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
                name='password'
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>

          <p className='w-full text-center text-[rgba(0,0,0,0.6)] font-[400]'>Already have an account <span className="text-[var(--primary)] cursor-pointer font-[600]">Login</span></p>
         

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="btn-org !w-[250px] !rounded-[200px] transition-all"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;
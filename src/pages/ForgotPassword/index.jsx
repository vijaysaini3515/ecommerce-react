import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate =useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);  

  const forgetPassword =()=>{
    navigate('/verify')
  }

  return (
    <div className="flex items-center justify-center p-10">
      <div className="bg-white w-[400px]  shadow-lg rounded-lg flex flex-col justify-center p-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Forgot Password</h2>

        <form className="space-y-3">
          

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="mt-1 relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="block w-full px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
                name='password'
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            
          </div>

         

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="btn-org"
            >
              Change Password
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword;
import React, { useRef, useState } from 'react';
import ShieldImg from '../../assets/images/shield.png'

const Verify = () => {
    const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        if (index > 0) inputRefs.current[index - 1].focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('Text').slice(0, 6).split('');
    const newOtp = [...otp];

    pasteData.forEach((char, idx) => {
      if (!/^\d$/.test(char)) return;
      if (idx < 6) {
        newOtp[idx] = char;
        inputRefs.current[idx].value = char;
      }
    });

    setOtp(newOtp);
    const nextEmpty = newOtp.findIndex(d => d === '');
    if (nextEmpty !== -1) inputRefs.current[nextEmpty].focus();
  };

  const handleSubmit = () => {
    const fullOtp = otp.join('');
    if (fullOtp.length === 6) {
      console.log('Submitting OTP:', fullOtp);
      // Add your logic here (API call, navigation, etc.)
    } else {
      alert('Please enter all 6 digits');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center m-3 sm:m-10">
      <div className="bg-white p-5 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="img overflow-hidden flex items-center justify-center">
          <img width='80' src={ShieldImg} alt="" />
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Verify OTP</h2>
        <p className='!mt-0 !mb-2 text-center'>OTP send to <span className='text-[var(--primary)] font-bold'>text@gmail.com</span> </p>


        <div className="flex justify-center space-x-3 mb-6" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 text-center text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={otp[index]}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Verify
        </button>
      </div>
    </div>
  )
}

export default Verify
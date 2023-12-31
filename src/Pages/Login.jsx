import React from "react";
import { FaFacebookF, FaGoogle, FaMicrosoft, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import '../App.css';

function Login() {
  return (
    <div id="main-bg" className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl w-2/3 max-w-4xl">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-3/5 p-5">
              <a href=" #">
                <img src="https://app.salescaptain.com/static/media/loginLogo.3814067f45867b0a416c.png" alt="logo" className="w-40 mx-auto" />
              </a>
              <div className="md:py-10 py-5">
                <div className="font-bold text-blue-700 mb-2 text-center">
                  <h1 className="text-3xl">Sign in to Account</h1>
                  <div className="border-2 w-10 border-blue-700 inline-block"></div>
                </div>
                <div className="flex justify-center my-2">
                  <a href=" #" target="_blank" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a href=" #" target="_blank" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                    <FaMicrosoft className="text-sm" />
                  </a>
                  <a href=" #" target="_blank" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                    <FaGoogle className="text-sm" />
                  </a>
                </div>
                <p className="text-gray-400 my-3 text-center">or use your email account</p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-48 md:w-64 p-2 flex items-center mb-3">
                    <FaRegEnvelope className="text-gray-400 md:m-2 mr-1" />
                    <input type="email" name="email" placeholder="email" className="bg-gray-100 outline-none text-sm flex-1" />
                  </div>
                  <div className="bg-gray-100 w-48 md:w-64 p-2 flex items-center mb-3">
                    <MdLockOutline className="text-gray-400 md:m-2 mr-1" />
                    <input type="password" name="password" placeholder="password" className="bg-gray-100 outline-none text-sm flex-1" />
                  </div>
                  <div className="flex justify-between w-44 md:w-64 md:mb-5">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />
                      Remember Me
                    </label>
                    <a href=" #" target="_blank" className="text-xs hover:text-blue-700">Forgot Password?</a>
                  </div>
                  <a href=" #" className="mt-2 md:mt-0 border-2 border-blue-700 text-blue-700 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-700 hover:text-white">
                    Sign In
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-2/5 bg-blue-700 text-white rounded-tr-2xl rounded-br-2xl py-10 sm:py-30 px-4 sm:px-10 text-center">
              <h2 className="text-3xl font-bold mb-2 mt-6">Give your business a SalesCaptain Upgrade</h2>
              <div className="border-2 w-10 border-white inline-block mb-2 "></div>
              <div className="mb-3">Our AI-powered tools help local businesses modernize how they communicate with their customers by facilitating online reviews, personalized marketing campaigns, web chats, payments, and more.</div>
              <span className="font-semibold">To learn more talk to an expert today.</span>
              <a href=" #" className="mt-4 border-2 border-white rounded-full py-2 px-12 inline-block font-semibold hover:bg-white hover:text-blue-700">
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;

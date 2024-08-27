import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full p-8 overflow-hidden">
      <div className="rounded-lg p-20 w-full">
        <h2 className="text-4xl font-semibold mb-2">Create an account</h2>
        <p className="mb-4">Join us and start your journey today. Already have an account? Sign in.</p>
        <form className="space-y-4">
          <div className="flex flex-col gap-y-4 w-full justify-between">
            <div className="mt-6 flex w-full gap-x-4">
              <div className="w-full">
                <Link href="#" className="text-sm font-medium w-full">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 
                  py-2 rounded-md shadow-lg hover:bg-white transition">
                    <FcGoogle className="w-5 h-5" /> 
                    <span>Sign up with Google</span>
                  </button>
                </Link>
              </div>
              <div className="w-full">
                <Link href="#" className="text-sm font-medium w-full">
                  <button className="w-full flex items-center 
                  justify-center space-x-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                    <FaApple className="w-5 h-5" />
                    <span>Sign up with Apple</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2 w-full">
              <hr className="flex-grow border-t border-gray-400 mt-1" />
              <span className="text-gray-500 font-medium">or</span>
              <hr className="flex-grow border-t border-gray-400 mt-1" />
            </div>
            <div className="flex gap-x-4">
              <div className="w-full">
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md 
                  shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md 
                  shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="name@email.com"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="***********"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="***********"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign up
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

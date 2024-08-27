import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SignInPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full p-8">
      <div className="rounded-lg p-20 w-full">
        <h2 className="text-4xl font-semibold mb-2">Welcome back</h2>
        <p className="mb-4">Start your website in seconds. Don&apos;t have an account? Sign up.</p>
        <form className="space-y-4">
          <div className="flex flex-col gap-y-4 w-full justify-between">
           
            <div className="mt-6 flex w-full gap-x-4">
              <div className="w-full">
                <Link href="#" className="text-sm font-medium w-full">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 
                  py-2 rounded-md shadow-lg hover:bg-white transition">
                    <FcGoogle className="w-5 h-5" /> 
                    <span>Sign in with Google</span>
                  </button>
                </Link>
              </div>
              <div className="w-full">
                <Link href="#" className="text-sm font-medium w-full">
                  <button className="w-full flex items-center 
                  justify-center space-x-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                    <FaApple className="w-5 h-5" />
                    <span>Sign in with Apple</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2 w-full">
              <hr className="flex-grow border-t border-gray-400 mt-1" />
              <span className="text-gray-500 font-medium">or</span>
              <hr className="flex-grow border-t border-gray-400 mt-1" />
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
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in to your account
          </button>
          
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;

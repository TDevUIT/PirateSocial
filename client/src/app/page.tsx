import React from 'react';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div className="max-h-screen container mx-auto">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-10vh)] text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Make Awesome Things!</h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">We connect people who have a pirate mindset to do pirate things.</p>
          <div className="flex space-x-4">
            <Link href="/sign-in">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded" aria-label="Get started by signing in">
                Get Started
              </Button>
            </Link>
            <Link href="https://github.com/TDevUIT/PirateSocial">
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded" aria-label="Visit GitHub repository">
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;

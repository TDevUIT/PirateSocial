import React from 'react';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const Page = () => {
  return (
    <div className="max-h-screen container mx-auto ">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-10vh)] text-center px-4">
        <h1 className="text-4xl font-bold text-black mb-4">Make awesome things!</h1>
        <p className="text-gray-600 mb-8">We connect a public who have a pirate mind to do pirate things.</p>
        <div className="flex space-x-4">
          <Link href="/sign-in">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">Get started</Button>
          </Link>
          <Link href="https://github.com/TDevUIT/PirateSocial">
            <Button className="px-6 py-2 rounded text-white">Github</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;

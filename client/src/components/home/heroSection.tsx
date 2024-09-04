import React from 'react';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full text-center px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg mb-10">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          Embark on an Unforgettable Journey of Discovery and Adventure!
        </h1>
        <p className="text-lg text-black/80 mb-8 max-w-3xl mx-auto">
          Join a community of adventurers and free spirits! Connect with those who have a pirate&apos;s mind, ready to explore new horizons and create unforgettable stories. Set sail with us and discover a world of endless possibilities with Pirate Sociaal.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 ease-in-out">
          Start Your Journey
        </button>
      </div>

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {/* <div className="bg-gradient-to-r from-pink-500 to-yellow-500 opacity-30 w-48 h-48 rounded-full absolute top-20 left-20 animate-pulse" />
        <div className="bg-gradient-to-r from-green-500 to-blue-500 opacity-30 w-72 h-72 rounded-full absolute bottom-20 right-20 animate-pulse" /> */}
      </div>
    </section>
  );
}

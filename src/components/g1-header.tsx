import React from 'react';
import Image from 'next/image';

export default function G1Header() {
  return (
    <header className="bg-white py-3 border-b border-gray-300 w-full">
      <div className="container mx-auto flex items-center justify-center relative px-4">
        <div className="absolute left-4">
          <Image
            src="https://i.imgur.com/KoCXCf6.png"
            alt="G1 Logo"
            width={49}
            height={28}
          />
        </div>
        <div className="text-center">
          <span className="text-gray-800 font-semibold text-lg tracking-widest">CIÊNCIA</span>
        </div>
      </div>
    </header>
  );
}

import React from 'react';

export default function G1Header() {
  return (
    <header className="bg-white py-3 border-b border-gray-300 w-full">
      <div className="container mx-auto flex items-center justify-center relative px-4">
        <div className="absolute left-4">
          <svg width="49" height="28" viewBox="0 0 49 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.833 27.2488H19.7422V0.832825H25.833V27.2488Z" fill="#C4170C"></path>
            <path d="M48.2422 27.25V0.833984H31.0254V6.79198H42.4414V11.22H31.0254V16.942H42.4414V21.37H31.0254V27.25H48.2422Z" fill="#C4170C"></path>
            <path d="M16.9585 14.0415C16.9585 19.3367 13.1675 23.1252 7.87549 23.1252C2.58349 23.1252 -1.20751 19.3367 -1.20751 14.0415C-1.20751 8.74948 2.58349 4.9585 7.87549 4.9585C13.1675 4.9585 16.9585 8.74948 16.9585 14.0415Z" transform="translate(1.2085 0)" fill="#0669DE"></path>
          </svg>
        </div>
        <div className="text-center">
          <span className="text-gray-800 font-semibold text-lg tracking-widest">CIÊNCIA</span>
        </div>
      </div>
    </header>
  );
}

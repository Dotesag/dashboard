import React from "react";

export default function Header(){
  return (
      <header className="header flex items-center justify-between">
        <div className='text-3xl font-bold'>
          Welcome back Taylor👋
        </div>
        <div className="flex-grow mx-4">
          <input
            type="text"
            className=" search-input border-1 border-gray-600 rounded-2xl w-70 h-10 ml-190 pl-3 text-base"
            placeholder="🔍︎Введите текст"
          />
        </div>
        <div className="absolute top-2 right-4">
          <img
            src="/group-svgrepo-com.svg"
            alt="avatar"
            className="inline-block object-cover object-center rounded-full w-12 h-12"
          />
        </div>
      </header>
  );
}
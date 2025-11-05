import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-nowrap w-320 mb-5">
      <div className="text-3xl font-bold">Welcome back Taylor👋</div>
      <div className="flex gap-5">
        <input
          type="text"
          className="search-input border-1 border-gray-600 rounded-2xl w-70 h-10 pl-3 text-base"
          placeholder="🔍︎ Search courses"
        />
        <img
          src="/group-svgrepo-com.svg"
          alt="avatar"
          className="inline-block object-cover object-center w-12 h-12"
        />
      </div>
    </header>
  );
}

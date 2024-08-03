import React from "react";

const SideBar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4 text-center text-2xl font-bold border-b border-gray-700">
        Sidebar
      </div>
      <nav className="mt-4">
        <a href="#dashboard" className="block py-2.5 px-4 hover:bg-gray-700">
          Dashboard
        </a>
        <a href="#profile" className="block py-2.5 px-4 hover:bg-gray-700">
          Profile
        </a>
        <a href="#settings" className="block py-2.5 px-4 hover:bg-gray-700">
          Settings
        </a>
        <a href="#logout" className="block py-2.5 px-4 hover:bg-gray-700">
          Logout
        </a>
      </nav>
    </div>
  );
};

export default SideBar;

import React from "react";
import { FaBars } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
function Navbar() {
  return (
    <nav className="bg-white px-4 py-3 flex justify-between ml-64 ">
      <div className=" items-center text-3xl flex">
        <FaBars className="text-black me-4 cursor-pointer " />
        <div>
          <span className="font-bold">Money </span>
          <span className="font-bold text-cyan-700">Pay</span>
          <h6 className="text-sm ">Get Track your online transactions here</h6>
        </div>
      </div>
      <div className="flex items-center gap-x-5 ">
        <MdEmail className="w-6 h-6" />
        <IoNotifications className="w-6 h-6" />
        <RxAvatar className="w-6 h-6" />
        <div className="text-sm">
          <h6 className="text-cyan-800">Test User</h6>
          <h6>testuser@gmail.com</h6>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

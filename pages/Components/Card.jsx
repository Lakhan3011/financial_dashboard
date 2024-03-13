import React from "react";
import { IoWallet } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Credit from "./Credit";
function Card() {
  return (
    <div className="grid grid-cols-5 gap-4 ml-64">
      <div className="bg-gray-800 rounded-xl flex flex-col p-4 m-4 gap-y-4">
        <IoWallet className="rounded-full bg-gray-50 w-6 h-6" />
        <div>
          <h6 className="text-gray-300">Total Balance</h6>
          <h2 className="text-white font-bold">$13120.54</h2>
        </div>
      </div>
      <div className="bg-gray-300 rounded-xl flex flex-col p-4 m-4 gap-y-4">
        <IoWallet className="rounded-full bg-gray-50 w-6 h-6" />
        <div>
          <h6 className="text-gray-800">Total Spending</h6>
          <h2 className="text-black font-bold">$92.54</h2>
        </div>
      </div>
      <div className="bg-gray-300 rounded-xl flex flex-col p-4 m-4 gap-y-4">
        <IoWallet className="rounded-full bg-gray-50 w-6 h-6" />
        <div>
          <h6 className="text-gray-800">Money Saved</h6>
          <h2 className="text-black font-bold">$881.54</h2>
        </div>
      </div>
      <div className="bg-gray-300 rounded-xl flex flex-col p-4 m-4 gap-y-4">
        <RiMoneyDollarCircleFill className="rounded-full bg-gray-50 w-6 h-6" />
        <div>
          <h6 className="text-gray-800">Money Sent</h6>
          <h2 className="text-black font-bold">$120.54</h2>
        </div>
      </div>
      <div className="bg-gray-300 rounded-xl flex flex-col p-4 m-4 gap-y-4">
        <RiMoneyDollarCircleFill className="rounded-full bg-gray-50 w-6 h-6" />
        <div>
          <h6 className="text-gray-800">Online Payment</h6>
          <h2 className="text-black font-bold">$501.54</h2>
        </div>
      </div>
      <Credit />
    </div>
  );
}

export default Card;

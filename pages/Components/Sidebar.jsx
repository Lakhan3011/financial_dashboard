import React from "react";
import {
  MdDashboardCustomize,
  MdHistory,
  MdOutlinePayments,
} from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa";
function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">Financial</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 font-light">
            <MdDashboardCustomize className="inline-block w-6 h-6 mr-2 -mt-2" />
            Dashboard
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 font-light">
            <IoDocumentTextOutline className="inline-block w-6 h-6 mr-2 -mt-2" />
            My Documents
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 font-light">
            <TbBrandGoogleAnalytics className="inline-block w-6 h-6 mr-2 -mt-2" />
            Analytics
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 font-light">
            <MdHistory className="inline-block w-6 h-6 mr-2 -mt-2" />
            History
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 font-light">
            <FaRegNewspaper className="inline-block w-6 h-6 mr-2 -mt-2" />
            News
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 font-light">
            <MdOutlinePayments className="inline-block w-6 h-6 mr-2 -mt-2" />
            E-pay
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

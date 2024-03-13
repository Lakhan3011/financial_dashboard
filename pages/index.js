import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

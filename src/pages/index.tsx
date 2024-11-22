import Image from "next/image";
import { Inter } from "next/font/google";
import MainDashboard from "@/views/main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainDashboard />
  );
}

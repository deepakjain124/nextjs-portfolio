import { Inter } from "next/font/google";
import "./globals.css";
import {
  FaDownload,
  FaFacebook,
  FaGit,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deepak Jain",
  description: "Know about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" top-0 flex bg-transparent opacity-105  h-16  w-full justify-between px-4  items-center">
          <Image alt="logo" src={"/logo.svg"} width={40} height={40} />
          <a
            href="/Deepak's Resume.pdf"
            download="Deepak's Resume"
            target="_blank"
          >
            <div className="bg-primary p-2 cursor-pointer rounded-lg">
              <FaDownload size={22} color="white" />
            </div>
          </a>
        </div>
        <div className="relative ">{children}</div>
        <div className="flex gap-8 my-8 justify-center items-center">
          <FaFacebook size={20} color="gray" className="cursor-pointer" />
          <FaInstagram size={20} color="gray" className="cursor-pointer" />
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/deepak-jain-998576181/"
          >
            <FaLinkedin size={20} color="gray" className="cursor-pointer" />
          </Link>
          <Link target="_blank" href="https://github.com/deepakjain124">
            <FaGithub size={20} color="gray" className="cursor-pointer" />
          </Link>
        </div>
        <div className="flex justify-center mb-2 items-center text-gray-400">
          <p className="text-xs">Deepak © 2023</p>
        </div>
      </body>
    </html>
  );
}

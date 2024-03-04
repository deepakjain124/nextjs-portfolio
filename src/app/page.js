"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { HiMiniCake } from "react-icons/hi2";
import Tabs from "@/components/Tabs/Tabs";
import Head from "next/head";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" sizes="any" />
      </Head>
      <div className="mt-[15px] mx-[10px] md:mx-[80px] lg:mx-[120px] xl:mx-[350px] text-white">
        <div className="backgroinImage w-full h-48 md:h-72 bg-primary relative">
          <div className="">
            <Image
              alt="profile"
              className="absolute aspect-square border-4 border-white rounded-full w-32 md:w-44 md:h-44 h-32 object-contain -bottom-20 left-4 md:left-10  "
              src="/self.png"
              priority
              width={176}
              height={176}
            />
          </div>
          <div
            onClick={() => setOpenContactModal(true)}
            className="absolute animate-pulse cursor-pointer bg-black p-2 rounded-full -bottom-16 left-28 md:left-44"
          >
            <IoIosCall />
          </div>
        </div>
        <div className="flex justify-end pr-4 md:pr-6 items-center mt-12 md:mt-8">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/deepak-jain-998576181/"
          >
            <div className="cursor-pointer transition-opacity flex justify-end items-center gap-x-3 bg-primary rounded-full px-4 py-2 ">
              <p className="font-bold">Follow</p>
              <FaLinkedin
                className="hover:animate-spin transition-all"
                size={20}
              />
            </div>
          </Link>
        </div>
        <div className="mt-8 ml-2 md:ml-8 lg:ml-16">
          <div className="flex justify-start items-start gap-x-3">
            <h1 className="text-4xl font-bold uppercase">Deepak Jain</h1>
            <Image alt="small-logo" src={"/logo.svg"} width={20} height={20} />
          </div>

          <p className="mt-2">Brings ideas to life with code! ✨</p>
          <p className="mt-1">
            Senior React Js Developer @ Ezulix Software Private Limited. Web
            Portal Specialist
          </p>
        </div>
        <div className="mt-8 ml-2 md:ml-8 lg:ml-16 flex justify-start flex-wrap items-center gap-4">
          <div className="flex justify-center items-center gap-x-2">
            <MdOutlineWork color="gray" />
            <p className="text-gray-400 font-medium">Available</p>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <HiMiniCake color="gray" />
            <p className="text-gray-400 font-medium">June 14th</p>
          </div>{" "}
          <div className="flex justify-center items-center gap-x-2">
            <SlCalender color="gray" />
            <p className="text-gray-400 font-medium">Joined Jan 2022</p>
          </div>
        </div>
        <div className="mt-8 ml-2 md:ml-8 lg:ml-16">
          <Tabs />
        </div>
      </div>
      {openContactModal && (
        <ContactForm
          isOpen={openContactModal}
          setIsOpen={setOpenContactModal}
        />
      )}
    </>
  );
}

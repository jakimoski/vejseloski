"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/app/assets/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        },
      }}
      className="w-full overflow-hidden mt-20 relative"
    >
      <div className="w-[70%] sm:w-full xm:w-full padding-x mx-auto flex justify-between gap-[50px] flex-col sm:flex-row">
        <div className="flex justify-center w-full   gap-y-[20px]">
          <div className="flex flex-col gap-4">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo"
                width={200}
                className="w-[200px] object-contain mx-auto"
              />
            </Link>
            <div className="flex items-center gap-2">
              <CiLocationOn size={25} className="text-black" />
              <p className="text-black  text-[16px] leading-normal font-bold">
                Кичево | Маршал Тито бр. 443
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h3 className="text-black text-[24px] font-extrabold uppercase leading-normal">
            Контакт
          </h3>
          <div className="flex flex-col gap-y-6 mt-2">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-black text-[16px] font-extrabold uppercase leading-normal">
                Телефон:
              </h1>
              <div className="flex gap-2 items-center">
                <CiPhone size={25} className="text-black" />
                <p className="text-black text-[16px] leading-normal font-medium">
                  +38971302391
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-black text-[18px]  font-extrabold uppercase leading-normal">
                Е-пошта:
              </h1>
              <div className="flex gap-2 items-center">
                <MdOutlineEmail size={25} className="text-black" />
                <p className="text-black  text-[16px] leading-normal font-medium">
                  vejseloski-kicevo@hotmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-black text-[18px]  font-extrabold uppercase leading-normal">
                Социјални мрежи:
              </h1>
              <div className="flex gap-2 items-center ">
                <FaInstagram size={25} className="text-black" />
                <SlSocialFacebook size={25} className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-20 padding-x border-t border-black">
        <p className="text-[16px] text-black tracking-wider font-medium py-3 text-center">
          Vejseloski © <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </motion.footer>
  );
}

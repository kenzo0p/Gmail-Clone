import React from "react";
import Avatar from "react-avatar";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100  cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
            alt="Gmail-logo"
          />
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            className="rounded-full w-full bg-transparent outline-none px-1 "
            placeholder="Search mail"
          />
        </div>
      </div>
      <div className="md:block hidden ">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiSettings size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className="cursor-pointer">
            <Avatar name="Wim Mostmans"
              src="data:image/jpeg;base64,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"
              size="40"
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
// import styles from "./Navbar.module.css";
import search from "../../assets/Icon/search.svg";
import Message from "../../assets/Icon/Message.svg";
import Notification from "../../assets/Icon/Notification.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import Profile from "../../assets/Images/Profile.jpeg";

const Navbar = () => {
  return (
    <div>
   
      <header
        class="self-stretch z-2000  bg-white flex flex-row items-center justify-between py-[1rem] pr-[3rem] pl-[17.75rem] gap-[1.25rem] top-[0] z-[0] sticky text-left text-[0.88rem] text-text-100 font-poppins lg:pl-[1.38rem] lg:pr-[1.5rem] lg:box-border"
      >
        <div class="h-[2.5rem] w-[18.56rem] rounded-xl bg-ghostwhite box-border flex flex-row items-start justify-start py-[0.69rem] px-[0.75rem] relative gap-[1.31rem] border-[1px] border-solid border-stroke">
          <div class="h-[2.5rem] w-[18.56rem] relative rounded-xl bg-ghostwhite box-border hidden z-[0] border-[1px] border-solid border-stroke"></div>
          <input
            class="w-[7.5rem] [border:none] [outline:none] font-poppins text-[0.75rem] bg-[transparent] h-[1.13rem] absolute my-0 mx-[!important] top-[0.69rem] left-[3.19rem] text-bodytext-50 text-left flex items-center z-[1]"
            placeholder="Search "
            type="text"
          />

          <img
            class="h-[45%] w-[6.06%] absolute my-0 mx-[!important] top-[27.5%] right-[89.87%] bottom-[27.5%] left-[4.07%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src={search}
          />
        </div>
        <div class="flex flex-row items-center justify-start gap-[2rem] mq450:gap-[2rem]">
          <div class="flex flex-row items-start justify-start gap-[1rem]">
            <img
              class="h-[2.5rem] w-[2.5rem] relative object-contain min-h-[2.5rem]"
              loading="eager"
              alt=""
              src={Notification}
            />
            <img
              class="h-[2.5rem] w-[2.5rem] relative object-contain min-h-[2.5rem]"
              loading="eager"
              alt=""
              src={Message}
            />
          </div>
          <div class="flex flex-row items-center justify-start py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.94rem]">
            <div class="flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[0.25rem]">
              <div class="flex flex-row items-start justify-start py-[0rem] px-[0rem]">
                <div class="h-[1.31rem] relative font-semibold flex items-center whitespace-nowrap">
                  Gracetrans
                </div>
              </div>
              <div class="relative text-[0.69rem] text-bodytext-50">
                @gracetrans
              </div>
            </div>
            <img
              class="h-[2.75rem] w-[2.75rem] relative rounded-31xl object-cover"
              alt=""
              src={Profile}
            />

            <img
              class="h-[1.25rem] w-[1.25rem] relative"
              alt=""
              src={arrowdown}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
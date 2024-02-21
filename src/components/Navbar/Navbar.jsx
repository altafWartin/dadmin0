import React from "react";
// import styles from "./Navbar.module.css";
import search from "../../assets/Icon/search.svg";
import Message from "../../assets/Icon/Message.svg";
import Notification from "../../assets/Icon/Notification.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import Profile from "../../assets/Images/Profile.jpeg";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
// import Dropdown from "react-bootstrap/Dropdown";

// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
// Initialization for ES Users
import { Dropdown, Ripple, initTE } from "tw-elements";

initTE({ Dropdown, Ripple });

const Navbar = () => {
  return (
    <div>
      <header class="self-stretch z-2000  bg-white flex flex-row items-center justify-between py-[1rem] pr-[3rem] pl-[17.75rem] gap-[1.25rem] top-[0] z-[0] sticky text-left text-[0.88rem] text-text-100 font-poppins lg:pl-[1.38rem] lg:pr-[1.5rem] lg:box-border">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>

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

            <div class="relative" data-te-dropdown-ref>
              <a
                class="flex items-center whitespace-nowrap rounded bg-white px-1 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white "
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  class="h-[1.25rem] w-[1.25rem] relative"
                  alt=""
                  src={arrowdown}
                />
              </a>
              <ul
                class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref
              >
                <li>
                  <a
                    class="block w-full justify-center  hover:bg-orange  py-2 text-sm font-normal "
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    <button className="bg-white mr-8 justify-center  hover:bg-orange "> Logout</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

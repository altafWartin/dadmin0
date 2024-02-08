import React, { useState } from "react";
import "./Workspace.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import { Link } from "react-router-dom";
import close from "../../assets/Icon/close.png";
import logo from "../../assets/logo.svg";
import setting from "../../assets/Icon/setting.svg";
import threedots from "../../assets/Icon/threedots.svg";
import p2 from "../../assets/Images/p2.svg";
import icon4 from "../../assets/Icon/icon-4.svg";
import p3 from "../../assets/Images/p3.svg";
import p4 from "../../assets/Images/p4.svg";
import plusicon from "../../assets/Icon/plusicon.svg";
import send from "../../assets/Icon/send.svg";
import icon1 from "../../assets/Icon/icon-1.svg";
import icon2 from "../../assets/Icon/icon-2.svg";
import icon3 from "../../assets/Icon/icon-3.svg";

const Workspace = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      {isPopupOpen && (
        <div class="fixed top-1/2 left-1/2 transform bg-blend-difference -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-[25.88rem] p-8 bg-white rounded-3xl shadow-lg backdrop-blur-[8px]">
          <button
            class="absolute top-2 right-2 bg-white"
            onClick={() => setPopupOpen(false)}
          >
            {/* Add your cut icon SVG here */}
            <img src={close} class="h-6 w-6 text-gray-500" alt="" />
          </button>
          <div class="relative h-[21.31rem] text-[0.88rem] text-dimgray font-poppins">
            <div class="w-full relative h-[21.31rem]  text-[0.88rem] text-dimgray font-poppins">
              <div class="absolute w-full top-[9.19rem] right-[0rem] left-[0rem] h-[12.13rem]">
                <button class="mb-3 w-full top-[0rem] right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200">
                  Start
                </button>
                <button class=" mb-3 w-full  right-[0rem] left-[0rem]  hover:bg-coral-100  rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200">
                  Stop
                </button>
                <button class=" w-full  right-[0rem] left-[0rem]  hover:bg-coral-100  rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200">
                  Recreate
                </button>
              </div>
              <div class="absolute top-[calc(50%_-_139.5px)] left-[calc(50%_-_89.5px)] text-[1.25rem] leading-[2.5rem] capitalize font-medium text-darkslategray-100">
                Workspace Actions
              </div>
              <img
                class="absolute top-[0rem] left-[10.19rem] w-[2.15rem] h-[1.94rem]"
                alt=""
                src={logo}
              />

              <div class="absolute top-[4.44rem] justify-center left-[2.06rem] tracking-[-0.02em] whitespace-pre-wrap text-center inline-block w-[18.31rem]">
                Improve business performance with ABCD dashboards
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className=" bg-slate-100 pt-10 pl-[260px] h-[108vh]  z-[20]">
          <section class=" w-[71.25rem] px-[var(--padding-xl)] box-border gap-[var(--gap-57xl)] text-left text-5xl text-bodytext-100 font-poppins flex justify-start flex flex-col items-start max-w-full">
            <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-[1.5rem] text-bodytext-100 mq750:flex-wrap">
              <h2 class="m-0 h-[2.25rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit flex items-center mq450:text-[1.19rem]">
                List Workspace
              </h2>
              <div class="flex flex-row items-start justify-start gap-[1.38rem] max-w-full text-right text-[0.75rem] mq450:flex-wrap">
                <Link
                  to="/addNewWorkspace"
                  class="cursor-pointer no-underline [border:none] py-[0.38rem] pr-[1.38rem] pl-[1.81rem] bg-coral-100 rounded-3xs flex flex-row items-center justify-end whitespace-nowrap hover:bg-chocolate-100"
                >
                  <div class="h-[2rem] w-[7.63rem] relative rounded-3xs bg-coral-100 hidden"></div>
                  <div class="relative text-[0.94rem] leading-[1.25rem] font-semibold font-poppins text-white text-left z-[1]">
                    Add New
                  </div>
                </Link>
                <div class="flex flex-row items-start justify-start gap-[0.25rem]">
                  <div class="rounded-lg bg-white flex flex-row items-center justify-start py-[0.25rem] pr-[0.56rem] pl-[0.5rem] gap-[0.38rem]">
                    <img
                      class="h-[1.31rem] w-[1.31rem] relative"
                      alt=""
                      src={calendar}
                    />

                    <div class="relative font-medium">Oct 16 - Oct 23</div>
                    <img
                      class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                      alt=""
                      src={arrowdown}
                    />
                  </div>
                  <div class="rounded-lg bg-white flex flex-row items-center justify-start p-[0.25rem]">
                    <img
                      class="h-[1.31rem] w-[1.31rem] relative"
                      alt=""
                      src={setting}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="self-stretch flex flex-col items-end justify-start gap-[1.44rem] max-w-full">
              <div class="w-[68.31rem] relative text-[1.13rem] pb-0 tracking-[-0.02em] capitalize font-medium font-poppins text-black whitespace-pre-wrap text-left inline-block max-w-full">
                <thead className=" flex justify-between pr-4 ">
                  <p>Workspace ID</p>
                  <p className="pl-2">Name</p>
                  <p className="pl-4">Created</p>
                  <p>Status</p>
                  <p>IsActive</p>
                  <p>edit</p>
                  <p>action</p>
                </thead>
              </div>

              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>
                    {/* <div class="h-[1.94rem] w-[3.19rem] relative rounded-2xl bg-coral-100 overflow-hidden shrink-0 z-[1]">
                      <div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-coral-100 hidden"></div>
                      <div class="absolute h-[87.1%] w-[52.94%] top-[6.45%] right-[3.92%] bottom-[6.45%] left-[43.14%] rounded-2xl bg-white shadow-[0px_3px_7px_rgba(0,_0,_0,_0.12)] z-[1]"></div>
                    </div> */}
                    <Form>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        className="custom-switch"
                      />
                    </Form>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                      <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                      <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                        
                      </div>
                    </div>
                    {/* <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                    /> */}
                  </div>
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>
                    {/* <div class="h-[1.94rem] w-[3.19rem] relative rounded-2xl bg-coral-100 overflow-hidden shrink-0 z-[1]">
                      <div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-coral-100 hidden"></div>
                      <div class="absolute h-[87.1%] w-[52.94%] top-[6.45%] right-[3.92%] bottom-[6.45%] left-[43.14%] rounded-2xl bg-white shadow-[0px_3px_7px_rgba(0,_0,_0,_0.12)] z-[1]"></div>
                    </div> */}
                    <Form>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        className="custom-switch"
                      />
                    </Form>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                      <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                      <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                        
                      </div>
                    </div>
                    {/* <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                    /> */}
                  </div>
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>
                    {/* <div class="h-[1.94rem] w-[3.19rem] relative rounded-2xl bg-coral-100 overflow-hidden shrink-0 z-[1]">
                      <div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-coral-100 hidden"></div>
                      <div class="absolute h-[87.1%] w-[52.94%] top-[6.45%] right-[3.92%] bottom-[6.45%] left-[43.14%] rounded-2xl bg-white shadow-[0px_3px_7px_rgba(0,_0,_0,_0.12)] z-[1]"></div>
                    </div> */}
                    <Form>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        className="custom-switch"
                      />
                    </Form>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                      <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                      <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                        
                      </div>
                    </div>
                    {/* <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                    /> */}
                  </div>
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>
                    {/* <div class="h-[1.94rem] w-[3.19rem] relative rounded-2xl bg-coral-100 overflow-hidden shrink-0 z-[1]">
                      <div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-coral-100 hidden"></div>
                      <div class="absolute h-[87.1%] w-[52.94%] top-[6.45%] right-[3.92%] bottom-[6.45%] left-[43.14%] rounded-2xl bg-white shadow-[0px_3px_7px_rgba(0,_0,_0,_0.12)] z-[1]"></div>
                    </div> */}
                    <Form>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        className="custom-switch"
                      />
                    </Form>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                      <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                      <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                        
                      </div>
                    </div>
                    {/* <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                    /> */}
                  </div>
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
              <div class="flex flex-row items-start justify-start">
                <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-manrope text-bodytext-100 text-left">
                  Showing 8 of 32 Results
                </div>
              </div>
              <div class="w-[9.5rem] flex flex-col items-start justify-start">
                <div class="self-stretch h-[2.5rem] flex flex-row items-start justify-start relative gap-[1rem]">
                  <div class="overflow-hidden flex flex-row items-center justify-center py-[0.63rem] pr-[1.25rem] pl-[1rem] relative">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs bg-coral-100"></div>
                    <div class="relative text-[1.13rem] leading-[1.25rem] font-semibold font-manrope text-white text-left z-[1]">
                      1
                    </div>
                  </div>
                  <div class="h-[2.56rem] w-[2.56rem] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.63rem] pr-[1rem] pl-[0.94rem] relative border-[1px] border-solid border-black">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs"></div>
                    <div class="relative text-[0.94rem] leading-[1.25rem] font-semibold font-manrope text-bodytext-100 text-left z-[1]">
                      2
                    </div>
                  </div>
                  <div class="h-[calc(100%_+_1px)] w-[2.56rem] my-0 mx-[!important] absolute top-[0rem] right-[-0.06rem] bottom-[-0.06rem] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.63rem] pr-[1.06rem] pl-[0.88rem] border-[1px] border-solid border-black">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs"></div>
                    <div class="relative text-[0.94rem] leading-[1.25rem] font-semibold font-manrope text-bodytext-100 text-left z-[1]">
                      3
                    </div>
                  </div>
                </div>
                <div class="self-stretch h-[2.5rem] flex flex-row items-start justify-start relative gap-[1rem] z-[1] mt-[-2.5rem]">
                  <div class="overflow-hidden flex flex-row items-center justify-center py-[0.63rem] pr-[1.25rem] pl-[1rem] relative">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs bg-coral-100"></div>
                    <div class="relative text-[1.13rem] leading-[1.25rem] font-semibold font-manrope text-white text-left z-[1]">
                      1
                    </div>
                  </div>
                  <div class="h-[2.56rem] w-[2.56rem] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.63rem] pr-[1rem] pl-[0.94rem] relative border-[1px] border-solid border-black">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs"></div>
                    <div class="relative text-[0.94rem] leading-[1.25rem] font-semibold font-manrope text-bodytext-100 text-left z-[1]">
                      2
                    </div>
                  </div>
                  <div class="h-[calc(100%_+_1px)] w-[2.56rem] my-0 mx-[!important] absolute top-[0rem] right-[-0.06rem] bottom-[-0.06rem] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.63rem] pr-[1.06rem] pl-[0.88rem] border-[1px] border-solid border-black">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs"></div>
                    <div class="relative text-[0.94rem] leading-[1.25rem] font-semibold font-manrope text-bodytext-100 text-left z-[1]">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Workspace;

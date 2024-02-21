import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Dashboard.module.css";
import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";
import Group239444 from "../../assets/Icon/Group 239444.png"
import Progresswheel from "../../assets/Icon/Progresswheel.png"
import chart2 from "../../assets/Icon/chart2.svg";
import chartsuccess from "../../assets/Icon/chartsuccess.svg";
import donoughtChart from "../../assets/Icon/donought-chart.svg";
import vector1 from "../../assets/Icon/vector-1.svg";
import vector2 from "../../assets/Icon/Vector 10.png";
import vector3 from "../../assets/Icon/Vector3.svg";
import vector8 from "../../assets/Icon/Vector 8.png";
import elipes from "../../assets/Icon/elipes.svg";
import trendup from "../../assets/Icon/trendup.svg";
import trenddown from "../../assets/Icon/trendup-1.svg";
import graph from "../../assets/Icon/graph.svg";
import reportFrame from "../../assets/Icon/report-frame.svg";
import line from "../../assets/Icon/line.svg";
import vectro6 from "../../assets/Icon/Vector 6.png";
import menu from "../../assets/Icon/Menu.svg";

const Dashboard = () => {
  return (
    <>
   <main
        class="self-stretch mt-[5rem] flex flex-row items-start justify-start py-[0rem] px-[2rem] box-border max-w-full shrink-0"
      > 
        <section
          class="flex-1 flex flex-col items-start justify-start gap-[0.75rem] max-w-full text-center text-[1.13rem] text-darkslateblue-300 font-lato"
        > 
          <div
            class="self-stretch flex flex-row items-start justify-center gap-[0.63rem] lg:flex-wrap"
          >
            <div
              class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-[1.25rem] pr-[0.75rem] pl-[0.88rem] box-border gap-[4.56rem] min-w-[13.56rem] max-w-[13.81rem] min-h-[15.31rem] lg:min-h-[auto]"
            >
              <div
                class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden"
              ></div>
              <h3
                class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]"
              >
                Stat title here
              </h3>
              <div
                class="w-[6.31rem] h-[1.75rem] relative text-[2.25rem] font-semibold font-poppins flex items-center justify-center shrink-0 z-[1] mq450:text-[1.38rem] mq1050:text-[1.81rem]"
              >
                68%
              </div>
            </div>
            <div
              class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-[1.25rem] pr-[0.75rem] pl-[0.88rem] box-border gap-[4.56rem] min-w-[13.56rem] max-w-[13.81rem] min-h-[15.31rem] lg:min-h-[auto]"
            >
              <div
                class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden"
              ></div>
              <h3
                class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]"
              >
                Stat title here
              </h3>
              <div
                class="w-[6.31rem] h-[1.75rem] relative text-[2.25rem] font-semibold font-poppins flex items-center justify-center shrink-0 z-[1] mq450:text-[1.38rem] mq1050:text-[1.81rem]"
              >
                68%
              </div>
            </div>
            <div
              class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start pt-[1.25rem] pb-[1.75rem] pr-[0.75rem] pl-[0.88rem] box-border min-w-[13.56rem] max-w-[13.81rem]"
            >
              <div
                class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden z-[1]"
              ></div>
              <div
                class="self-stretch flex flex-col items-center justify-start gap-[0.75rem]"
              >
                <h3
                  class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]"
                >
                  Stat title here
                </h3>
                <div
                  class="self-stretch flex flex-row items-center justify-center py-[0rem] px-[1.19rem]"
                >
                  <div class="h-[9.81rem] flex-1 relative">
                    <div
                      class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-100 w-full h-full z-[1]"
                    ></div>
                    <div
                      class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue w-full h-full z-[2]"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.44rem] pl-[1.69rem] mt-[-1.19rem] text-[1rem] text-darkslateblue-200"
              >
                <div
                  class="flex-1 flex flex-row items-start justify-between gap-[1.25rem]"
                >
                  <b
                    class="w-[1.75rem] relative flex items-center justify-center shrink-0 z-[4]"
                    >00</b
                  >
                  <div
                    class="w-[3rem] flex flex-row items-start justify-start relative"
                  >
                    <b class="flex-1 relative z-[4]">100</b>
                    <div
                      class="h-[8.75rem] w-[8.75rem] my-0 mx-[!important] absolute top-[-8.06rem] left-[-6.06rem] flex flex-col items-center justify-start text-[2rem] text-darkslateblue-300"
                    >
                      <div
                        class="self-stretch h-[8.75rem] relative rounded-[50%] bg-white z-[3]"
                      ></div>
                      <div
                        class="w-[6.31rem] h-[1.75rem] relative flex items-center justify-center shrink-0 z-[4] mt-[-5.5rem] mq450:text-[1.19rem] mq1050:text-[1.63rem]"
                      >
                        68%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start pt-[1.25rem] pb-[1.75rem] pr-[0.75rem] pl-[0.88rem] box-border min-w-[13.56rem] max-w-[13.81rem]"
            >
              <div
                class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden z-[1]"
              ></div>
              <div
                class="self-stretch flex flex-col items-center justify-start gap-[0.75rem]"
              >
                <h3
                  class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]"
                >
                  Stat title here
                </h3>
                <div
                  class="self-stretch flex flex-row items-center justify-center py-[0rem] px-[1.19rem]"
                >
                  <div class="h-[9.81rem] flex-1 relative">
                    <div
                      class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-100 w-full h-full z-[1]"
                    ></div>
                    <div
                      class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue w-full h-full z-[2]"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.44rem] pl-[1.69rem] mt-[-1.19rem] text-[1rem] text-darkslateblue-200"
              >
                <div
                  class="flex-1 flex flex-row items-start justify-between gap-[1.25rem]"
                >
                  <b
                    class="w-[1.75rem] relative flex items-center justify-center shrink-0 z-[4]"
                    >00</b
                  >
                  <div
                    class="w-[3rem] flex flex-row items-start justify-start relative"
                  >
                    <b class="flex-1 relative z-[4]">100</b>
                    <div
                      class="h-[8.75rem] w-[8.75rem] my-0 mx-[!important] absolute top-[-8.06rem] left-[-6.06rem] flex flex-col items-center justify-start text-[2rem] text-darkslateblue-300"
                    >
                      <div
                        class="self-stretch h-[8.75rem] relative rounded-[50%] bg-white z-[3]"
                      ></div>
                      <div
                        class="w-[6.31rem] h-[1.75rem] relative flex items-center justify-center shrink-0 z-[4] mt-[-5.5rem] mq450:text-[1.19rem] mq1050:text-[1.63rem]"
                      >
                        68%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start pt-[1.25rem] pb-[1.75rem] pr-[0.75rem] pl-[0.88rem] box-border min-w-[13.56rem] max-w-[13.81rem]"
            >
              <div
                class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden z-[1]"
              ></div>
              <div
                class="self-stretch flex flex-col items-center justify-start gap-[0.75rem]"
              >
                <h3
                  class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]"
                >
                  Stat title here
                </h3>
                <div
                  class="self-stretch flex flex-row items-center justify-center py-[0rem] px-[1.19rem]"
                >
                  <div class="h-[9.81rem] flex-1 relative">
                    <div
                      class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-100 w-full h-full z-[1]"
                    ></div>
                    <div
                      class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue w-full h-full z-[2]"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.44rem] pl-[1.69rem] mt-[-1.19rem] text-[1rem] text-darkslateblue-200"
              >
                <div
                  class="flex-1 flex flex-row items-start justify-between gap-[1.25rem]"
                >
                  <b
                    class="w-[1.75rem] relative flex items-center justify-center shrink-0 z-[4]"
                    >00</b
                  >
                  <div
                    class="w-[3rem] flex flex-row items-start justify-start relative"
                  >
                    <b class="flex-1 relative z-[4]">100</b>
                    <div
                      class="h-[8.75rem] w-[8.75rem] my-0 mx-[!important] absolute top-[-8.06rem] left-[-6.06rem] flex flex-col items-center justify-start text-[2rem] text-darkslateblue-300"
                    >
                      <div
                        class="self-stretch h-[8.75rem] relative rounded-[50%] bg-white z-[3]"
                      ></div>
                      <div
                        class="w-[6.31rem] h-[1.75rem] relative flex items-center justify-center shrink-0 z-[4] mt-[-5.5rem] mq450:text-[1.19rem] mq1050:text-[1.63rem]"
                      >
                        68%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-[1.25rem] pr-[0.75rem] pl-[0.88rem] box-border gap-[4.56rem] min-w-[13.56rem] max-w-[13.81rem] min-h-[15.31rem] lg:min-h-[auto]"
            >
              <div
                class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden"
              ></div>
              <h3
                class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]"
              >
                Stat title here
              </h3>
              <div
                class="w-[6.31rem] h-[1.75rem] relative text-[2.25rem] font-semibold font-poppins flex items-center justify-center shrink-0 z-[1] mq450:text-[1.38rem] mq1050:text-[1.81rem]"
              >
                68%
              </div>
            </div>
          </div>
          <div
            class="self-stretch flex flex-row items-start justify-start gap-[0.63rem] max-w-full text-left text-[1rem] text-bodytext-50 font-poppins"
          >
            <div
              class="flex-1 flex flex-col items-start justify-start gap-[0.75rem] max-w-[calc(100%_-_231px)] mq1050:max-w-full"
            >
              <div
                class="self-stretch flex flex-row items-start justify-center gap-[0.63rem] mq1050:flex-wrap"
              >
                <div
                  class="flex-[0.933] rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-[1.25rem] pr-[0.75rem] pl-[0.88rem] box-border gap-[4.56rem] min-w-[13.56rem] max-w-[13.81rem] min-h-[15.31rem] text-center text-[1.13rem] text-darkslateblue-300 font-lato mq450:flex-1 mq1050:min-h-[auto]"
                >
                  <div
                    class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden"
                  ></div>
                  <h3
                    class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]"
                  >
                    Stat title here
                  </h3>
                  <div
                    class="w-[6.31rem] h-[1.75rem] relative text-[2.25rem] font-semibold font-poppins flex items-center justify-center shrink-0 z-[1] mq450:text-[1.38rem] mq1050:text-[1.81rem]"
                  >
                    68%
                  </div>
                </div>
                <div
                  class="flex-1 rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.38rem] pb-[0.38rem] box-border gap-[3.13rem] min-w-[13.56rem] max-w-[13.81rem]"
                >
                  <div
                    class="w-[13.81rem] h-[15.31rem] relative rounded-3xs bg-white hidden"
                  ></div>
                  <div
                    class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.06rem] box-border z-[1]"
                  >
                    <div
                      class="h-[1.44rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border"
                    >
                      <div class="relative leading-[1.75rem] font-semibold">
                        Reports
                      </div>
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.19rem] text-right text-[0.75rem] text-darkslateblue-100"
                  >
                    <div
                      class="w-[6.69rem] flex flex-col items-start justify-start gap-[1rem]"
                    >
                      <div
                        class="w-[0.44rem] flex flex-col items-start justify-start gap-[0.81rem]"
                      >
                        <div
                          class="h-[1.38rem] relative inline-block shrink-0 z-[2]"
                        >
                          0
                        </div>
                        <div class="relative z-[2]">0</div>
                      </div>
                      <div
                        class="self-stretch flex flex-row items-start justify-between relative gap-[1.25rem]"
                      >
                        <div
                          class="w-[0.44rem] flex flex-col items-end justify-start gap-[1rem]"
                        >
                          <div class="relative z-[2]">0</div>
                          <div class="relative z-[2]">0</div>
                          <div class="relative z-[2]">0</div>
                        </div>
                        <div
                          class="h-[4.99rem] w-[0.06rem] relative box-border z-[1] border-r-[1px] border-dashed border-coral-100"
                        ></div>
                        <img
                          class="h-[5rem] w-[10.63rem] absolute my-0 mx-[!important] top-[-2.54rem] right-[-5.31rem] z-[2]"
                          loading="eager"
                          alt=""
                          src={Group239444}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex-1 rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.38rem] pb-[0.38rem] box-border gap-[3.13rem] min-w-[13.56rem] max-w-[13.81rem]"
                >
                  <div
                    class="w-[13.81rem] h-[15.31rem] relative rounded-3xs bg-white hidden"
                  ></div>
                  <div
                    class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.06rem] box-border z-[1]"
                  >
                    <div
                      class="h-[1.44rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border"
                    >
                      <div class="relative leading-[1.75rem] font-semibold">
                        Reports
                      </div>
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.19rem] text-right text-[0.75rem] text-darkslateblue-100"
                  >
                    <div
                      class="w-[6.69rem] flex flex-col items-start justify-start gap-[1rem]"
                    >
                      <div
                        class="w-[0.44rem] flex flex-col items-start justify-start gap-[0.81rem]"
                      >
                        <div
                          class="h-[1.38rem] relative inline-block shrink-0 z-[2]"
                        >
                          0
                        </div>
                        <div class="relative z-[2]">0</div>
                      </div>
                      <div
                        class="self-stretch flex flex-row items-start justify-between relative gap-[1.25rem]"
                      >
                        <div
                          class="w-[0.44rem] flex flex-col items-end justify-start gap-[1rem]"
                        >
                          <div class="relative z-[2]">0</div>
                          <div class="relative z-[2]">0</div>
                          <div class="relative z-[2]">0</div>
                        </div>
                        <div
                          class="h-[4.99rem] w-[0.06rem] relative box-border z-[1] border-r-[1px] border-dashed border-coral-100"
                        ></div>
                        <img
                          class="h-[5rem] w-[10.63rem] absolute my-0 mx-[!important] top-[-2.54rem] right-[-5.31rem] z-[2]"
                          loading="eager"
                          alt=""
                          src={Group239444}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex-1 rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.38rem] pb-[0.38rem] box-border gap-[3.13rem] min-w-[13.56rem] max-w-[13.81rem]"
                >
                  <div
                    class="w-[13.81rem] h-[15.31rem] relative rounded-3xs bg-white hidden"
                  ></div>
                  <div
                    class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.06rem] box-border z-[1]"
                  >
                    <div
                      class="h-[1.44rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border"
                    >
                      <div class="relative leading-[1.75rem] font-semibold">
                        Reports
                      </div>
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.19rem] text-right text-[0.75rem] text-darkslateblue-100"
                  >
                    <div
                      class="w-[6.69rem] flex flex-col items-start justify-start gap-[1rem]"
                    >
                      <div
                        class="w-[0.44rem] flex flex-col items-start justify-start gap-[0.81rem]"
                      >
                        <div
                          class="h-[1.38rem] relative inline-block shrink-0 z-[2]"
                        >
                          0
                        </div>
                        <div class="relative z-[2]">0</div>
                      </div>
                      <div
                        class="self-stretch flex flex-row items-start justify-between relative gap-[1.25rem]"
                      >
                        <div
                          class="w-[0.44rem] flex flex-col items-end justify-start gap-[1rem]"
                        >
                          <div class="relative z-[2]">0</div>
                          <div class="relative z-[2]">0</div>
                          <div class="relative z-[2]">0</div>
                        </div>
                        <div
                          class="h-[4.99rem] w-[0.06rem] relative box-border z-[1] border-r-[1px] border-dashed border-coral-100"
                        ></div>
                        <img
                          class="h-[5rem] w-[10.63rem] absolute my-0 mx-[!important] top-[-2.54rem] right-[-5.31rem] z-[2]"
                          loading="eager"
                          alt=""
                          src={Group239444}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex-1 rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.38rem] pb-[0.38rem] box-border gap-[3.13rem] min-w-[13.56rem] max-w-[13.81rem]"
                >
                  <div
                    class="w-[13.81rem] h-[15.31rem] relative rounded-3xs bg-white hidden"
                  ></div>
                  <div
                    class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.06rem] box-border z-[1]"
                  >
                    <div
                      class="h-[1.44rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border"
                    >
                      <div class="relative leading-[1.75rem] font-semibold">
                        Reports
                      </div>
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.19rem] text-right text-[0.75rem] text-darkslateblue-100"
                  >
                    <div
                      class="w-[6.69rem] flex flex-col items-start justify-start gap-[1rem]"
                    >
                      <div
                        class="w-[0.44rem] flex flex-col items-start justify-start gap-[0.81rem]"
                      >
                        <div
                          class="h-[1.38rem] relative inline-block shrink-0 z-[2]"
                        >
                          0
                        </div>
                        <div class="relative z-[2]">0</div>
                      </div>
                      <div
                        class="self-stretch flex flex-row items-start justify-between relative gap-[1.25rem]"
                      >
                        <div
                          class="w-[0.44rem] flex flex-col items-end justify-start gap-[1rem]"
                        >
                          <div class="relative z-[2]">0</div>
                          <div class="relative z-[2]">0</div>
                          <div class="relative z-[2]">0</div>
                        </div>
                        <div
                          class="h-[4.99rem] w-[0.06rem] relative box-border z-[1] border-r-[1px] border-dashed border-coral-100"
                        ></div>
                        <img
                          class="h-[5rem] w-[10.63rem] absolute my-0 mx-[!important] top-[-2.54rem] right-[-5.31rem] z-[2]"
                          loading="eager"
                          alt=""
                          src={Group239444}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="w-[69.81rem] flex flex-row items-start justify-center gap-[1rem] max-w-full mq1050:flex-wrap"
              >
                <div
                  class="w-[33.5rem] rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.31rem] pb-[0.31rem] box-border gap-[1.75rem] min-w-[33.5rem] max-w-full mq750:min-w-full mq1050:flex-1"
                >
                  <div
                    class="self-stretch h-[15.31rem] relative rounded-3xs bg-white hidden"
                  ></div>
                  <div
                    class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-between py-[0rem] pr-[0.81rem] pl-[0.75rem] box-border gap-[1.25rem] z-[1]"
                  >
                    <div
                      class="h-[1.44rem] w-[7.69rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border"
                    >
                      <div
                        class="self-stretch h-[1.63rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border"
                      >
                        <div
                          class="self-stretch relative leading-[1.75rem] font-semibold"
                        >
                          Reports
                        </div>
                      </div>
                    </div>
                    <img
                      class="h-[0.22rem] w-[0.88rem] relative object-contain"
                      loading="eager"
                      alt=""
                      src="/public/menu@2x.png"
                    />
                  </div>
                  <div
                    class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.81rem] pl-[1rem] box-border max-w-full text-right text-[0.75rem] text-darkslateblue-100"
                  >
                    <div
                      class="flex-1 flex flex-row items-end justify-start gap-[0.69rem] max-w-full mq750:flex-wrap"
                    >
                      <div
                        class="w-[0.81rem] flex flex-col items-start justify-start gap-[0.81rem]"
                      >
                        <div
                          class="h-[1.38rem] relative inline-block shrink-0 z-[6]"
                        >
                          00
                        </div>
                        <div
                          class="self-stretch flex flex-col items-start justify-start gap-[1rem]"
                        >
                          <div class="relative z-[6]">00</div>
                          <div class="relative z-[6]">00</div>
                          <div class="relative z-[6]">00</div>
                          <div class="self-stretch h-[1.13rem] relative">
                            <div
                              class="absolute top-[0rem] left-[0rem] inline-block w-full h-full z-[6]"
                            >
                              00
                            </div>
                            <div
                              class="absolute top-[0rem] left-[0rem] w-full h-full"
                            >
                              <div
                                class="absolute top-[0rem] left-[0rem] inline-block w-full h-full z-[7]"
                              >
                                00
                              </div>
                              <div
                                class="absolute top-[0rem] left-[0rem] inline-block w-full h-full z-[8]"
                              >
                                00
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.31rem] box-border min-w-[19.19rem] max-w-full"
                      >
                        <div
                          class="self-stretch flex flex-col items-center justify-start pt-[1.63rem] px-[0rem] pb-[0.13rem] box-border relative max-w-full"
                        >
                          <img
                            class="w-full h-full absolute my-0 mx-[!important] top-[0.03rem] right-[-0.01rem] bottom-[0.1rem] max-h-full z-[1]"
                            alt=""
                            src="/public/line.svg"
                          />

                          <div
                            class="self-stretch flex flex-row items-center justify-center max-w-full"
                          >
                            <div class="h-[7.94rem] flex-1 relative max-w-full">
                              <img
                                class="absolute top-[-0.01rem] left-[0.02rem] w-full h-full z-[2]"
                                alt=""
                                src="/public/vector-11.svg"
                              />

                              <div
                                class="absolute top-[1.31rem] left-[0.13rem] w-[29.44rem] h-[6.5rem]"
                              >
                                <div
                                  class="absolute top-[-0.01rem] left-[-0.01rem] w-full h-full z-[3] flex items-center justify-center"
                                >
                                  <img
                                    class="w-full h-full z-[3] object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(1.116)]"
                                    alt=""
                                    src="/public/vector-22.svg"
                                  />
                                </div>
                                <img
                                  class="absolute top-[0.31rem] left-[5.54rem] w-[20.59rem] h-[4.28rem] z-[4]"
                                  loading="eager"
                                  alt=""
                                  src="/public/elipes.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="w-[0.06rem] h-[4.99rem] relative box-border z-[5] mt-[-3.69rem] border-r-[1px] border-dashed border-coral-100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex-1 rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] pb-[0.31rem] pr-[1.13rem] pl-[1.19rem] box-border gap-[1.75rem] min-w-[22.94rem] max-w-full mq750:min-w-full"
                >
                  <div
                    class="w-[35.31rem] h-[15.31rem] relative rounded-3xs bg-white hidden max-w-full"
                  ></div>
                  <div
                    class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-between gap-[1.25rem] z-[1]"
                  >
                    <div
                      class="h-[1.44rem] w-[7.69rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border"
                    >
                      <div
                        class="self-stretch h-[1.63rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border"
                      >
                        <div
                          class="self-stretch relative leading-[1.75rem] font-semibold"
                        >
                          Reports
                        </div>
                      </div>
                    </div>
                    <img
                      class="h-[0.22rem] w-[0.88rem] relative object-contain"
                      loading="eager"
                      alt=""
                      src="/public/menu-1@2x.png"
                    />
                  </div>
                  <div
                    class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.31rem] box-border max-w-full text-right text-[0.75rem] text-darkslateblue-100"
                  >
                    <div
                      class="flex-1 flex flex-row items-end justify-start gap-[0.69rem] max-w-full mq750:flex-wrap"
                    >
                      <div
                        class="w-[0.81rem] flex flex-col items-start justify-start gap-[0.81rem]"
                      >
                        <div
                          class="h-[1.38rem] relative inline-block shrink-0 z-[6]"
                        >
                          00
                        </div>
                        <div
                          class="self-stretch flex flex-col items-start justify-start gap-[1rem]"
                        >
                          <div class="relative z-[6]">00</div>
                          <div class="relative z-[6]">00</div>
                          <div class="relative z-[6]">00</div>
                          <div class="self-stretch h-[1.13rem] relative">
                            <div
                              class="absolute top-[0rem] left-[0rem] inline-block w-full h-full z-[6]"
                            >
                              00
                            </div>
                            <div
                              class="absolute top-[0rem] left-[0rem] w-full h-full"
                            >
                              <div
                                class="absolute top-[0rem] left-[0rem] inline-block w-full h-full z-[7]"
                              >
                                00
                              </div>
                              <div
                                class="absolute top-[0rem] left-[0rem] inline-block w-full h-full z-[8]"
                              >
                                00
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.31rem] box-border min-w-[20.25rem] max-w-full"
                      >
                        <div
                          class="self-stretch flex flex-col items-center justify-start pt-[1.63rem] pb-[0.13rem] pr-[0.06rem] pl-[0rem] relative"
                        >
                          <img
                            class="w-full h-full absolute my-0 mx-[!important] top-[0.03rem] right-[0.05rem] bottom-[0.1rem] max-h-full z-[1]"
                            alt=""
                            src="/public/line-1.svg"
                          />

                          <div class="self-stretch h-[7.94rem] relative">
                            <img
                              class="absolute top-[-0.01rem] left-[-0.01rem] w-full h-full z-[2]"
                              alt=""
                              src="/public/vector-31.svg"
                            />

                            <div
                              class="absolute top-[1.31rem] left-[0.06rem] w-[31.06rem] h-[6.5rem]"
                            >
                              <div
                                class="absolute top-[-0.01rem] left-[0.02rem] w-full h-full z-[3] flex items-center justify-center"
                              >
                                <img
                                  class="w-full h-full z-[3] object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(1.116)]"
                                  alt=""
                                  src="/public/vector-41.svg"
                                />
                              </div>
                              <img
                                class="absolute top-[0.31rem] left-[5.88rem] w-[21.71rem] h-[4.28rem] z-[4]"
                                loading="eager"
                                alt=""
                                src="/public/elipes-1.svg"
                              />
                            </div>
                          </div>
                          <div
                            class="w-[0.06rem] h-[4.99rem] relative box-border z-[5] mt-[-3.69rem] border-r-[1px] border-dashed border-coral-100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="h-[31.44rem] w-[13.81rem] flex flex-col items-start justify-start gap-[0.75rem] mq1050:hidden"
            >
              <div
                class="self-stretch rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.38rem] pb-[0.38rem] gap-[3.13rem]"
              >
                <div
                  class="w-[13.81rem] h-[15.31rem] relative rounded-3xs bg-white hidden"
                ></div>
                <div
                  class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.06rem] box-border z-[1]"
                >
                  <div
                    class="h-[1.44rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border"
                  >
                    <div class="relative leading-[1.75rem] font-semibold">
                      Reports
                    </div>
                  </div>
                </div>
                <div
                  class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.19rem] text-right text-[0.75rem] text-darkslateblue-100"
                >
                  <div
                    class="w-[6.69rem] flex flex-col items-start justify-start gap-[1rem]"
                  >
                    <div
                      class="w-[0.44rem] flex flex-col items-start justify-start gap-[0.81rem]"
                    >
                      <div
                        class="h-[1.38rem] relative inline-block shrink-0 z-[2]"
                      >
                        0
                      </div>
                      <div class="relative z-[2]">0</div>
                    </div>
                    <div
                      class="self-stretch flex flex-row items-start justify-between relative gap-[1.25rem]"
                    >
                      <div
                        class="w-[0.44rem] flex flex-col items-end justify-start gap-[1rem]"
                      >
                        <div class="relative z-[2]">0</div>
                        <div class="relative z-[2]">0</div>
                        <div class="relative z-[2]">0</div>
                      </div>
                      <div
                        class="h-[4.99rem] w-[0.06rem] relative box-border z-[1] border-r-[1px] border-dashed border-coral-100"
                      ></div>
                      <img
                        class="h-[5rem] w-[10.63rem] absolute my-0 mx-[!important] top-[-2.54rem] right-[-5.31rem] z-[2]"
                        loading="eager"
                        alt=""
                        src={Group239444}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                class="self-stretch flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-[1.25rem] pr-[0.75rem] pl-[0.88rem] gap-[4.56rem] text-center text-[1.13rem] text-darkslateblue-300 font-lato"
              >
                <div
                  class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden"
                ></div>
                <h3
                  class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]"
                >
                  Stat title here
                </h3>
                <div
                  class="w-[6.31rem] h-[1.75rem] relative text-[2.25rem] font-semibold font-poppins flex items-center justify-center shrink-0 z-[1] mq450:text-[1.38rem] mq1050:text-[1.81rem]"
                >
                  68%
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
   
    </>
  );
};

export default Dashboard;

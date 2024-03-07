import React from "react";
import "./AddMember/AddMember.css";
import logo from "../../assets/logo.svg";

import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";

import ArrowRight from "../../assets/Icon/ArrowRight.svg";

const EditMemberInfo = () => {
  return (
    <div className="containerBody">
      <div class="user-setting-frame">
        <h2 class="settings10">Settings</h2>
        <img class="date-text-icon1" alt="" src={ArrowRight} />

        <div class="setting-instance pr-3">
          <div class="calendar6">
            <img class="icon3" alt="" src={calendar} />

            <div class="date3">Oct 16 - Oct 23</div>
            <img class="iconarrow-down3" alt="" src={arrowdown} />
          </div>
          <div class="calendar7">
            <img class="setting-icon3" alt="" src={setting} />
          </div>
        </div>
        <div class="team-members">Edit Member Information</div>
      </div>
      <div class="input-parent1">
        <div class="input10">
          <div class="input11"></div>
          <div class="chevron-down4">
            <div class="chevron-down5"></div>
          </div>
          <div class="placeholder5">role</div>
          <div class="title6">role</div>
        </div>
        <div class="frame-child4"></div>
        <div class="input-with-title">
          <img
            class="input-with-title-child"
            loading="eager"
            alt=""
            src={logo}
          />

          <h3 class="title7">Edit Member Information</h3>
          <div class="label-parent">
            <div class="label1">
              Improve business performance with Comvi dashboards
            </div>
            <div class="input12">
              <div class="title-frame1">
                <div class="title8">First Name</div>
              </div>
              <div class="placeholder6">First Name</div>
              <input class="input13" type="text" />
            </div>
          </div>
        </div>
        <div class="input14">
          <input class="input15" type="text" />

          <div class="title9">Email Address</div>
          <div class="placeholder-input-frame">
            <div class="placeholder7">Email Address</div>
          </div>
        </div>
        <div class="input16">
          <div class="title-wrapper1">
            <div class="title10">password</div>
          </div>
          <div class="placeholder8">password</div>
          <input class="input17" type="text" />
        </div>
        <div class="input-instance">
          <div class="input18">
            <input class="input19" type="text" />

            <div class="title11">Role</div>
            <div class="new-member-text-input">
              <div class="placeholder9">Role</div>
            </div>
          </div>
          <button class="cursor-pointer [border:none] mt-10 mb-8 p-[0.94rem] bg-coral-100 self-stretch rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[2] hover:bg-chocolate-100">
            <div class="h-[3.13rem] w-[24.44rem] relative rounded-lg bg-coral-100 hidden max-w-full"></div>
            <b class="relative text-[0.88rem] leading-[1.25rem] capitalize font-poppins text-white text-left z-[1]">
              save
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMemberInfo;

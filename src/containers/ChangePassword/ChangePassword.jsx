import React from "react";
import "./ChangePassword.css"
import logo from "../../assets/logo.svg";

import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";

import ArrowRight from "../../assets/Icon/ArrowRight.svg";


const ChangePassword = () => {
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
          <div class="team-members">Change Password</div>
        </div>
      <form class="input-parent d-flex justify-content-center ">
        <div class="input">
          <div class="input1"></div>
          <div class="chevron-down">
            <div class="chevron-down1"></div>
          </div>
          <div class="placeholder">role</div>
          <div class="title">role</div>
        </div>
        <div class="frame-child3"></div>
        <div class="frame-with-input">
          <img
            class="frame-with-input-child"
            loading="eager"
            alt=""
            src={logo}
          />

          <div class="title-wrapper">
            <h3 class="title1">Change Password</h3>
          </div>
          <div class="label">
            Improve business performance with Comvi dashboards
          </div>
        </div>
        <div class="input-group">
          <div class="input2">
            <div class="title-container">
              <div class="title2">Current Password</div>
            </div>
            <div class="placeholder1">Current Password</div>
            <input class="input3" type="text" />
          </div>
          <div class="input4">
            <div class="title-frame">
              <div class="title3">New Password</div>
            </div>
            <div class="placeholder2">New Password</div>
            <input class="input5" type="text" />
          </div>
          <div class="input6">
            <input class="input7" type="text" />

            <div class="title4">Repeat New Password</div>
            <div class="placeholder-wrapper">
              <div class="placeholder3">Repeat New Password</div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <button class="input8">
            <div class="input9"></div>
            <div class="chevron-down2">
              <div class="chevron-down3"></div>
            </div>
            <div class="placeholder4"></div>
            <div class="title5">Country</div>
          </button>
          <b class="change-password1">Change Password</b>
        </div>
        <div class="frame-group-title-input">
          <div class="forgot-password">Forgot Password ?</div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;

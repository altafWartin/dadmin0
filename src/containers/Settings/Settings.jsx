import React from "react";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Settings.css";
import calendar from "../../assets/Icon/calendar.svg";
import orgcalendar from "../../assets/Icon/orgcalendar.svg";
import DeleteIcon from "../../assets/Icon/group-239349.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";

import clipboard from "../../assets/Icon/clipboard-text.svg";
import clock from "../../assets/Icon/clock.svg";
import ArrowRight from "../../assets/Icon/ArrowRight.svg";
import file1 from "../../assets/Images/File 1.png";
import file2 from "../../assets/Images/File 2.png";
import file3 from "../../assets/Images/File 3.png";

import Ellips from "../../assets/Icon/Ellipse 1705.svg";

const Settings = () => {
  return (
    <div className="containerBody">
      <section class="workspace-setting-frame">
        <div class="user-setting-frame">
          <h2 class="settings9">Settings</h2>
          <img class="date-text-icon1" alt="" src={ArrowRight} />

          <div class="setting-instance">
            <div class="calendar6">
              <img class="icon3" alt="" src={calendar} />

              <div class="date3">Oct 16 - Oct 23</div>
              <img class="iconarrow-down3" alt="" src={arrowdown} />
            </div>
            <div class="calendar7">
              <img class="setting-icon3" alt="" src={setting} />
            </div>
          </div>
          <div class="team-members">Team members</div>
        </div>
        <div class="rectangle-parent2">
          <div class="frame-child6"></div>
          <div className="Vector306" style={{width: 0, height: 36, marginTop:"70px", border: '2px #FF8548 solid'}}></div>
          <div class="settings-panel">
            <img
              class="settings-panel-child"
              loading="eager"
              alt=""
              src={clipboard}
            />

            <img
              class="settings-panel-item"
              loading="eager"
              alt=""
              src={orgcalendar}
            />

            <img
              class="settings-panel-inner"
              loading="eager"
              alt=""
              src={clock}
            />
          </div>
          <div class="add-member-group-wrapper">
            <div class="add-member-group">
              <Link to="/addMember" class="add-member1 linkText">
                Add member
              </Link>
              <Link class="team-members1 linkText">Team members</Link>
              <Link to="/changePassword" class="change-password2 linkText">
                change password
              </Link>
            </div>
          </div>
          <div class="avatar-frame1">
            <h3 class="team-members2">Team members</h3>
            <div class="team-members-list">
              <img
                class="team-members-list-child"
                loading="eager"
                alt=""
                src={file1}
              />

              <div class="john-fred-parent">
                <div class="john-fred">John Fred</div>
                <div class="johnfredgmailcom">johnfred@gmail.com</div>
              </div>
            </div>
            <div class="team-members-list1">
              <img
                class="team-members-list-item"
                loading="eager"
                alt=""
                src={file2}
              />

              <div class="john-fred-group">
                <div class="john-fred1">John Fred</div>
                <div class="johnfredgmailcom1">johnfred@gmail.com</div>
              </div>
            </div>
            <div class="frame-parent1">
              <div class="invite-members-button-parent">
                <div class="invite-members-button">
                  <img
                    class="invite-members-button-child"
                    loading="eager"
                    alt=""
                    src={file3}
                  />

                  <div class="john-fred-container">
                    <div class="john-fred2">John Fred</div>
                    <div class="johnfredgmailcom2">johnfred@gmail.com</div>
                  </div>
                </div>
                <div class="invite-members-button1">
                  <img
                    class="invite-members-button-item"
                    loading="eager"
                    alt=""
                    src={file1}
                  />

                  <div class="john-fred-parent1">
                    <div class="john-fred3">John Fred</div>
                    <div class="johnfredgmailcom3">johnfred@gmail.com</div>
                  </div>
                </div>
                <div class="invite-members-button2">
                  <img
                    class="invite-members-button-inner"
                    loading="eager"
                    alt=""
                    src={file2}
                  />

                  <div class="john-fred-parent2">
                    <div class="john-fred4">John Fred</div>
                    <div class="johnfredgmailcom4">johnfred@gmail.com</div>
                  </div>
                </div>
              </div>
              <button class="invite-box-parent">
                <div class="invite-box"></div>
                <div class="invite-members">+Invite Members</div>
                {/* <img class="vuesaxboldgallery-icon" alt="" /> */}
              </button>
            </div>
          </div>
          <div class="project-manager-group">
            <div class="i-o-s-toggle-knob">
              <button class="group-button">
                <div class="frame-child7"></div>
                <div class="project-manager">Project Manager</div>
              </button>
              <button class="rectangle-parent3">
                <div class="frame-child8"></div>
                <div class="product-designer">Product Designer</div>
              </button>
              <button class="rectangle-parent4">
                <div class="frame-child9"></div>
                <div class="designer">Designer</div>
              </button>
              <button class="rectangle-parent5">
                <div class="frame-child10"></div>
                <div class="developer">Developer</div>
              </button>
              <button class="rectangle-parent6">
                <div class="frame-child11"></div>
                <div class="copy-writer">Copy Writer</div>
              </button>
            </div>
          </div>

          <img
            class="frame-child12"
            // style={{width: 37, height: 37, opacity: 0.10, background: '#645D5D', borderRadius: 9999}}
            loading="eager"
            alt=""
            src={Ellips}
          />
          <div class="frame-wrapper">
            <img
              class="frame-child13"
              // style={{width: 18, height: 20, background: '#FF8548'}}
              loading="eager"
              alt=""
              src={DeleteIcon}
            />
          </div>
          <div class="frame-wrapper1">
            <div class="ios-toggle-parent">
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  className="custom-switch"
                />
              </Form>
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  className="custom-switch"
                />
              </Form>
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  className="custom-switch"
                />
              </Form>
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  className="custom-switch"
                />
              </Form>
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  className="custom-switch"
                />
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Settings.css";
import calendar from "../../assets/Icon/calendar.svg";
import orgcalendar from "../../assets/Icon/orgcalendar.svg";
import EditButton from "../../assets/Icon/EditButton.svg";
import DeleteIcon from "../../assets/Icon/group-239349.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";
import Deleteiconn from "../../assets/Icon/Deleteiconn.svg";

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
          <div
            className="Vector306"
            style={{
              width: 0,
              height: 36,
              marginTop: "70px",
              border: "2px #FF8548 solid",
            }}
          ></div>
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
            <ul class="user-details-li">
              <li class="user-detai flex mb-2 mr-5">
                <div class="team-members-l">
                   
                  <Link class="no-underline flex text-gray-900" to="teamMember">
                    <img
                      class="team-members-list-item mr-3"
                      loading="eager"
                      alt=""
                      src={file2}
                    />

                    <div class="john-fred-group">
                      <div class="john-fred1">John Fred</div>
                      <div class="johnfredgmailcom1">johnfred@gmail.com</div>
                    </div>
                  </Link>
                </div>
                <button class="group-button mx-8">
                  <div class="frame-child7"></div>
                  <div class="project-manager">Project Manager</div>
                </button>
                <button className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center">
                  <img
                    class="delete-icon justify-content-center align-items-center"
                    loading="eager"
                    alt=""
                    src={Deleteiconn}
                  />
                </button>
                <div class="toggle-button mx-8 d-flex justify-content-center align-items-center">
                  <Form className="content-center">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      className="custom-switch content-center"
                    />
                  </Form>
                </div>

                <Link to="editMemberInfo" className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center">
                  <img
                    class="delete-icon justify-content-center align-items-center"
                    loading="eager"
                    alt=""
                    src={EditButton}
                  />
                </Link>
              </li>
              <li class="user-detai flex mb-2 mr-5">
                <div class="team-members-l">
                   
                  <Link class="no-underline flex text-gray-900" to="teamMember">
                    <img
                      class="team-members-list-item mr-3"
                      loading="eager"
                      alt=""
                      src={file1}
                    />

                    <div class="john-fred-group">
                      <div class="john-fred1">John Fred</div>
                      <div class="johnfredgmailcom1">johnfred@gmail.com</div>
                    </div>
                  </Link>
                </div>
                <button class="group-button mx-8">
                  <div class="frame-child7"></div>
                  <div class="project-manager">Project Manager</div>
                </button>
                <button className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center">
                  <img
                    class="delete-icon justify-content-center align-items-center"
                    loading="eager"
                    alt=""
                    src={Deleteiconn}
                  />
                </button>
                <div class="toggle-button mx-8 d-flex justify-content-center align-items-center">
                  <Form className="content-center">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      className="custom-switch content-center"
                    />
                  </Form>
                </div>

                <Link to="editMemberInfo" className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center">
                  <img
                    class="delete-icon justify-content-center align-items-center"
                    loading="eager"
                    alt=""
                    src={EditButton}
                  />
                </Link>
              </li>
              <li class="user-detai flex mb-2 mr-5">
                <div class="team-members-l">
                   
                  <Link  class="no-underline flex text-gray-900" to="teamMember">
                    <img
                      class="team-members-list-item mr-3"
                      loading="eager"
                      alt=""
                      src={file3}
                    />

                    <div class="john-fred-group">
                      <div class="john-fred1">John Fred</div>
                      <div class="johnfredgmailcom1">johnfred@gmail.com</div>
                    </div>
                  </Link>
                </div>
                <button class="group-button mx-8">
                  <div class="frame-child7"></div>
                  <div class="project-manager">Project Manager</div>
                </button>
                <button className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center">
                  <img
                    class="delete-icon justify-content-center align-items-center"
                    loading="eager"
                    alt=""
                    src={Deleteiconn}
                  />
                </button>
                <div class="toggle-button mx-8 d-flex justify-content-center align-items-center">
                  <Form className="content-center">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      className="custom-switch content-center"
                    />
                  </Form>
                </div>

                <Link to="editMemberInfo" className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center">
                  <img
                    class="delete-icon justify-content-center align-items-center"
                    loading="eager"
                    alt=""
                    src={EditButton}
                  />
                </Link>
              </li>
              <li class="user-detai flex mb-2 mr-5">
                <div class="team-members-l">
                   
                  <Link class="no-underline flex text-gray-900" to="teamMember">
                    <img
                      class="team-members-list-item mr-3"
                      loading="eager"
                      alt=""
                      src={file1}
                    />

                    <div class="john-fred-group">
                      <div class="john-fred1">John Fred</div>
                      <div class="johnfredgmailcom1">johnfred@gmail.com</div>
                    </div>
                  </Link>
                </div>
                <button class="group-button mx-8">
                  <div class="frame-child7"></div>
                  <div class="project-manager">Project Manager</div>
                </button>
                <button className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center">
                  <img
                    class="delete-icon justify-content-center align-items-center"
                    loading="eager"
                    alt=""
                    src={Deleteiconn}
                  />
                </button>
                <div class="toggle-button mx-8 d-flex justify-content-center align-items-center">
                  <Form className="content-center">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      className="custom-switch content-center"
                    />
                  </Form>
                </div>

                <Link to="editMemberInfo" className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center">
                  <img
                    class="delete-icon justify-content-center align-items-center"
                    loading="eager"
                    alt=""
                    src={EditButton}
                  />
                </Link>
              </li>
              <li class="user-detai flex mb-2 mr-5">
                <div class="team-members-l">
                   
                  <Link class="no-underline flex text-gray-900" to="teamMember">
                    <img
                      class="team-members-list-item mr-3"
                      loading="eager"
                      alt=""
                      src={file2}
                    />

                    <div class="john-fred-group">
                      <div class="john-fred1">John Fred</div>
                      <div class="johnfredgmailcom1">johnfred@gmail.com</div>
                    </div>
                  </Link>
                </div>
                <button class="group-button mx-8">
                  <div class="frame-child7"></div>
                  <div class="project-manager">Project Manager</div>
                </button>
                <button className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center">
                  <img
                    class="delete-icon justify-content-center align-items-center"
                    loading="eager"
                    alt=""
                    src={Deleteiconn}
                  />
                </button>
                <div class="toggle-button mx-8 d-flex justify-content-center align-items-center">
                  <Form className="content-center">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      className="custom-switch content-center"
                    />
                  </Form>
                </div>

                <Link to="editMemberInfo" className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center">
                  <img
                    class="delete-icon justify-content-center align-items-center"
                    loading="eager"
                    alt=""
                    src={EditButton}
                  />
                </Link>
              </li>
            </ul>
          </div>
          {/* <div class="project-manager-group">
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
          </div> */}

        </div>
      </section>
    </div>
  );
};

export default Settings;

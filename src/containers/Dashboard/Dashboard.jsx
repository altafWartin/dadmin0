import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Dashboard.module.css";
import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";
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
      <div className={styles.dashboard}>
        <Navbar />
        {/* <Sidebar /> */}
        <div className={styles.dashboardParent}>
          <div className={styles.dashboard2}>Dashboard</div>
          <div className={styles.calendarParent}>
            <div className={styles.calendar}>
              <img className={styles.icon} alt="" src={calendar} />
              <div className={styles.date}>Oct 16 - Oct 23</div>
              <img
                className={styles.vuesaxboldelement3Icon}
                alt=""
                src={arrowdown}
              />
            </div>
            <div className={styles.calendar1}>
              <img className={styles.icon} alt="" src={setting} />
            </div>
          </div>
        </div>
        <div className={styles.overview}>
          <div className={styles.taskInProgress}>
            <div className={styles.chart2Parent}>
              <img className={styles.chart2Icon} alt="" src={chart2} />
              <div className={styles.date}>Task in Progress</div>
            </div>
            <img className={styles.taskInProgressChild} alt="" src={vectro6} />
            <div className={styles.parent}>
              <div className={styles.div}>210</div>
              <div className={styles.vuesaxoutlinetrendUpParent}>
                <img
                  className={styles.vuesaxboldelement3Icon}
                  alt=""
                  src={trendup}
                />
                <div className={styles.workspace}>+11%</div>
                <div className={styles.lastWeek}>last week</div>
              </div>
            </div>
          </div>
          <div className={styles.taskInProgress}>
            <div className={styles.chart2Parent}>
              <img className={styles.chart2Icon} alt="" src={graph} />
              <div className={styles.date}>Task Completed</div>
            </div>
            <img className={styles.taskInProgressChild} alt="" src={vector8} />
            <div className={styles.parent}>
              <div className={styles.div}>185</div>
              <div className={styles.vuesaxoutlinetrendUpGroup}>
                <img
                  className={styles.vuesaxboldelement3Icon}
                  alt=""
                  src={trenddown}
                />
                <div className={styles.workspace}>+15%</div>
                <div className={styles.lastWeek}>last week</div>
              </div>
            </div>
          </div>
          <div className={styles.monthlyTask}>
            <div className={styles.chart2Parent}>
              <img className={styles.chart2Icon} alt="" src={chartsuccess} />
              <div className={styles.date}>Monthly Tasks Summary</div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.lineDiv} />
              <div className={styles.frameChild2} />
              <div className={styles.groupContainer}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupChild} />
                  <div className={styles.div4}>15%</div>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.groupItem} />
                  <div className={styles.div5}>21%</div>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.groupInner} />
                  <div className={styles.div6}>32%</div>
                </div>
              </div>
              <div className={styles.mParent}>
                <div className={styles.date}>$2m</div>
                <div className={styles.date}>$1m</div>
                <div className={styles.date}>$0m</div>
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>1.240</div>
              <div className={styles.vuesaxoutlinetrendUpParent}>
                <img
                  className={styles.vuesaxboldelement3Icon}
                  alt=""
                  src={trendup}
                />
                <div className={styles.workspace}>+11%</div>
                <div className={styles.lastWeek}>last week</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reportsParent}>
          <div className={styles.reports}>
            <div className={styles.bg1} />
            <img className={styles.lineIcon} alt="" src={line} />
            <div className={styles.number}>
              <div className={styles.div9}>100</div>
              <div className={styles.div10}>80</div>
              <div className={styles.div11}>60</div>
              <div className={styles.div12}>40</div>
              <div className={styles.div13}>20</div>
              <div className={styles.div14}>0</div>
            </div>
            <div className={styles.time}>
              <div className={styles.am}>10am</div>
              <div className={styles.am1}>11am</div>
              <div className={styles.am2}>12am</div>
              <div className={styles.am3}>01am</div>
              <div className={styles.am4}>02am</div>
              <div className={styles.am5}>03am</div>
              <div className={styles.am6}>04am</div>
              <div className={styles.am7}>05am</div>
              <div className={styles.am8}>06am</div>
              <div className={styles.am9}>07am</div>
            </div>

            <img className={styles.vectorIcon} src={reportFrame} />
            <img className={styles.vectorIcon1} alt="" src={vector1} />
            <img className={styles.elipesIcon} alt="" src={elipes} />
            <div className={styles.reportsGroup}>
              <div className={styles.reports1}>Reports</div>
              <img className={styles.menuIcon} alt="" src={menu} />
            </div>
            <div className={styles.toolTip}>
              <div className={styles.union}>
                <div className={styles.unionChild} />
                <img className={styles.unionItem} alt="" src="Polygon 2.svg" />
              </div>
              <div className={styles.created}>14 Created</div>
              <div className={styles.completes}>17 Completes</div>
            </div>
            <div className={styles.reportsChild} />
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.performanceParent}>
              <div className={styles.performance}>Performance</div>
              <img className={styles.menuIcon1} alt="" src={menu} />
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.donoughtChartParent}>
                <img
                  className={styles.donoughtChartIcon}
                  alt=""
                  src={donoughtChart}
                />
                <div className={styles.ellipseDiv} />
                <div className={styles.text1}>
                  <b className={styles.b}>80</b>
                  <div className={styles.score}>Score</div>
                </div>
              </div>
            </div>
            <div className={styles.indicator}>
              <div className={styles.completedParent}>
                <div className={styles.completed}>Completed</div>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.distributeParent}>
                <div className={styles.distribute}>Distribute</div>
                <div className={styles.frameChild3} />
              </div>
              <div className={styles.returnParent}>
                <div className={styles.return}>Return</div>
                <div className={styles.frameChild4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

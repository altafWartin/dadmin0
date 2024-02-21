import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard/Dashboard.jsx";
import Workspace from "./containers/Workspace/Workspace.jsx";
import Container from "./containers/Container/Container.jsx";
import Settings from "./containers/Settings/Settings.jsx";
import Workflows from "./containers/Workflows/Workflows.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./containers/Login/Login.jsx";
import AddMember from "./containers/AddMember/AddMember.jsx";
import ChangePassword from "./containers/ChangePassword/ChangePassword.jsx";
import AddNewWorkspace from "./containers/Workspace/AddNewWorkspace.jsx";
import AddNewWorkflow from "./containers/Workflows/AddNewWorkflow.jsx";
import AddNewContainer from "./containers/Container/AddNewContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignUp from "./containers/SignUp/SignUp.jsx";

function App() {
  const location = useLocation();
  
  const isLoginPage = location.pathname === "/login";
  const issignUpPage = location.pathname === "/signUp";
  const isDash = location.pathname === "/";

  return (
    <>
      <div className="App">
        {!isLoginPage && !issignUpPage && <Sidebar />}
        {!isLoginPage  && !issignUpPage && <Navbar />}


        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/addNewWorkspace" element={<AddNewWorkspace/>}/>
          <Route path="/workflow" element={<Workflows />} />
          <Route path="/addNewWorkflow" element={<AddNewWorkflow/>}/>
          <Route path="/container" element={<Container />} />
          <Route path="/addNewContainer" element={<AddNewContainer/>}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="/addMember" element={<AddMember/>} />
          <Route path="/changePassword" element={<ChangePassword/>} />
        </Routes>
        {!isLoginPage && !issignUpPage && <Footer />}
      </div>
    </>
  );
}

export default App;

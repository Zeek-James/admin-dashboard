import "./sidebar.scss";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SettingsSystemDaydreamRoundedIcon from "@mui/icons-material/SettingsSystemDaydreamRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="top">
        <span className="logo">Anvil Slot</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardRoundedIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonOutlineRoundedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <AddBusinessRoundedIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardRoundedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingRoundedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AssessmentRoundedIcon className="icon" />
            <span>Stats</span>
          </li>{" "}
          <li>
            <NotificationsNoneRoundedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamRoundedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <HubRoundedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsRoundedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleRoundedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppRoundedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        {/* <div className="colorOption"></div> */}
      </div>
    </div>
  );
};

export default SideBar;

import "./navbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchRoundedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon className={"icon"} />
            English
          </div>
          <div className="item">
            <DarkModeRoundedIcon className={"icon"} />
          </div>{" "}
          <div className="item">
            <FullscreenExitRoundedIcon className={"icon"} />
          </div>{" "}
          <div className="item">
            <NotificationsNoneRoundedIcon className={"icon"} />
            <div className="counter">1</div>
          </div>{" "}
          <div className="item">
            <ChatBubbleOutlineRoundedIcon className={"icon"} />
            <div className="counter">2</div>
          </div>{" "}
          <div className="item">
            <FilterListRoundedIcon className={"icon"} />
          </div>
          <div className={"item"}>
            <img
              src={
                "https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=612x612&w=0&h=POIRcyGpS6RfNP-NLG7lvnqx5stn11diDBQnQE4sDkM="
              }
              alt={""}
              className={"avatar"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

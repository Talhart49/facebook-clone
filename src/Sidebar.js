import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
////////
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { ExpandMoreOutlined } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow
        src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
        title='Rana Talha'
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'
      />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={ChatIcon} title='Messenger' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />
    </div>
  );
}

export default Sidebar;

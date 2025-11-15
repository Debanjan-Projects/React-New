import React, { useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* Top */}

      <div className="sidebar-top">
        <img
          className="menu-icon"
          src={assets.menu_icon}
          alt="menu"
          onClick={() => setCollapsed(!collapsed)}
        />

        {!collapsed && (
          <>
            {/* New Chat */}
            
            <div className="new-chat">
              <img src={assets.plus_icon} alt="" />
              <p>New Chat</p>
            </div>

            {/* Recent */}
            <div className="recent">
              <p className="recent-title">Recent</p>

              <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is React...</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="help" />
          {!collapsed && <p>Help</p>}
        </div>

        <div className="bottom-item">
          <img src={assets.history_icon} alt="activity" />
          {!collapsed && <p>Activity</p>}
        </div>

        <div className="bottom-item">
          <img src={assets.setting_icon} alt="settings" />
          {!collapsed && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

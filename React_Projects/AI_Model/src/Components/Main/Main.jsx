import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
    
  return (
    <div className="main">
      {/* NAVBAR */}
      <div className="nav">
        <p className="logo">Deb AI</p>
        <img src={assets.user_icon} alt="user" className="profile" />
      </div>

      {/* GREET SECTION */}
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I assist you today?</p>
        </div>

        {/* SUGGESTION CARDS */}
        <div className="card-grid">
          <div className="card">
            <p>Suggest beautiful places for a road trip...</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Summarize this concept: Urban Planning...</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Brainstorm team activities for a retreat...</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Improve the readability of this code...</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        {/* INPUT SECTION */}
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Ask anything…" />
            <div className="icons">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" className="send" />
            </div>
          </div>
        </div>

        <p className="bottom-info">
          DebAI may display inaccurate info. Please verify responses. Your privacy matters.
        </p>

      </div>
    </div>
  );
};

export default Main;

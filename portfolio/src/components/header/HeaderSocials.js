import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import {  } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sai-kiran-kuruva-10a409239">
        <BsLinkedin />
      </a>
      <a href="https://github.com/kuruvasaikiran11">
        <FaGithub />
      </a>
      {/* <a href="https://www.youtube.com/@howtobecomeadeveloper">
        <BsYoutube />
      </a> */}
    </div>
  );
};

export default HeaderSocials;

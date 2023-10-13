import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaEnvelope } from "react-icons/fa";
// import { BsEnvelope } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sai-kiran-kuruva-10a409239">
        <BsLinkedin />
      </a>
      <a href="https://github.com/kuruvasaikiran11">
        <FaGithub />
      </a>
      <a href="mailto:kuruvasaikiran11@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default HeaderSocials;

import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved by Amit Kumar Raj.</div>
      <div>
        <Link to={"https://github.com/amitrajstm"} target="github">
          <FaGithub></FaGithub>
        </Link>
        <Link to={"https://leetcode.com/u/amitraj_stm/"} target="leetcode">
          <SiLeetcode></SiLeetcode>
        </Link>
        <Link
          to={"https://www.linkedin.com/in/amitkumarraj1/"}
          target="linkedin"
        >
          <FaLinkedin></FaLinkedin>
        </Link>
        <Link to={"https://www.instagram.com/amitraj_stm/"} target="instagram">
          <RiInstagramFill></RiInstagramFill>
        </Link>
        <Link
          to={"https://www.facebook.com/englishconversationinsitamarhi/"}
          target="facebook"
        >
          <FaFacebook />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

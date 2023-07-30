import React from "react";
import styles from "../styles/Avatar.module.css";

/**
 * Returns avatar.
 * @param {src, height, navbar}
 * @returns avatar
 */
const Avatar = ({ src, height = 45, navbar }) => {
  return (
    <span>
      {/* if navbar, hide it below md screen */}
      <img
        className={`${styles.Avatar} ${navbar && "d-none d-md-block mt-3"}`}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
    </span>
  );
};

export default Avatar;
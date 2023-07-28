import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 45, navbar }) => {
  return (
    <span>
      <img
        className={`${styles.Avatar} ${
          navbar && "d-none d-md-block mt-3"
        }`}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
    </span>
  );
};

export default Avatar;
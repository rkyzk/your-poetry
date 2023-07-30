import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

/**
 * Return Spinner.
 * @param {spinner}
 * @returns Spinner
 */
const Asset = ({ spinner }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
    </div>
  );
};

export default Asset;
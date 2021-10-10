import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { Mesa } from "../HomeStyles";

export default function Mesas({ tableNumer, status }) {
  return (
    <Mesa>
      <div className={status ? "occuped" : "available"}>
        <FontAwesomeIcon icon={faHamburger} size="4x" />
      </div>
      <p>Mesa {tableNumer}</p>
    </Mesa>
  );
}

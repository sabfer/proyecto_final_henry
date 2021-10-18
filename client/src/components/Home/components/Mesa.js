import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { Mesa } from "../../../css/HomeStyles";

export default function Mesas({
  tableNumber,
  status,
  handleUpdate,
  setStateModal,
}) {
  return (
    <div>
      <Mesa
        onClick={(e) => {
          if (status) {
            handleUpdate(e, { tableNumber: tableNumber });
          } else {
            setStateModal({
              status: true,
              tableNumber: tableNumber,
            });
          }
        }}
      >
        <div className={status ? "occuped" : "available"}>
          <img src="https://i.imgur.com/wQYAx50.png" width="100" height="100" />
        </div>
        <p>Mesa {tableNumber}</p>
      </Mesa>
    </div>
  );
}

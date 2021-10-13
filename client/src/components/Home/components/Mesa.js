import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { Mesa } from "../../../css/HomeStyles";

export default function Mesas({ tableNumber, status, handleUpdate }) {
  /* const [tableDetails, setTableDetails] = useState({
    tableNumber: undefined,
  }); */

  /* onClick={(e) => handleUpdate(e, { tableNumber: tableNumber })} */
  return (
    <div>
      <Mesa>
        <div className={status ? "occuped" : "available"}>
          <FontAwesomeIcon icon={faHamburger} size="4x" />
        </div>
        <p>Mesa {tableNumber}</p>
      </Mesa>
    </div>
  );
}

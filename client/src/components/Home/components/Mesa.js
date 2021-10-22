import React from "react";
import { Mesa } from "../../../css/HomeStyles";
import MesaIco from "../../../assets/MesaIco";

export default function Mesas({ tableNumber, status, handleUpdate, setStateModal }) {
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
        <div>
          <MesaIco color={status ? "#1772a5" : !status ? "#80dbff" : "#000"}  />
        </div>
        <p>Mesa {tableNumber}</p>
      </Mesa>
    </div>
  );
}

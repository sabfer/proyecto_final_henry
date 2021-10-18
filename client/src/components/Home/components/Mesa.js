import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { Mesa } from "../../../css/HomeStyles";
import MesaIco from "../../../assets/MesaIco";

export default function Mesas({
  tableNumber,
  status,
  handleUpdate,
  setStateModal,
  ///////////
  stateM,
  setStateM
/////////////
}) 

{

  return (
    <div>
      <Mesa
        onClick={(e) => {
          //////////////////////
          setStateM({
          ...stateM,status:"true"
          })
          ///////////////////////
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
       {/* / {console.log(stateM.status,"DE MESA")} */}
        <div>
          <MesaIco
            color={
              status 
                ? "#ED4245"
                : !status
                ? "#4DD87A"
                : "#000"
            }
          />
        </div>
        <p>Mesa {tableNumber}</p>
      </Mesa>
    </div>
  );
}

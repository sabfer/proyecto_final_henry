import React from "react";
import Inventario from "./components/Views/Inventario";

export default function Contabilidad() {

  return (
    <>
      <div>
        <center>
          <h2>INVENTARIO</h2>
        </center>
      </div>
      <div>
        <center>
          <Inventario text aling="center" />
        </center>
      </div>
    </>
  );
}

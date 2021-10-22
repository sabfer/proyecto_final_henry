import React from "react";
import Inventario from "./components/Views/Inventario";

export default function Contabilidad() {

  return (
    <>
      <div>
        <center>

          <h1>INFORMES GENERALES</h1>
          {/* <button onClick={(e) => handleRender(1)}>INVENTARIO</button> */}
          <Inventario/>
          {/* <button onClick={(e) => handleRender(2)}>PROVEEDORES</button>
          <button onClick={(e) => handleRender(3)}>COMPRAS</button> */}
        </center>
      </div>
{/* 
      <div></div>

      {render === 1 && (
        <div>
          <center>
            <Inventario text aling="center" />
          </center>
        </div>
      )}
      {render === 2 && (
        <div>
          <center>
            <Proveedores text aling="center" />
          </center>
        </div>
      )}
      {render === 3 && (
        <div>
          <center>
            <Compras text aling="center" />
          </center>
        </div>
      )} */}
    </>
  );
}

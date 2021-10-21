import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Proveedores from "./components/Views/Proveedores";
import Compras from "./components/Views/Compras";
import Inventario from "./components/Views/Inventario";

export default function Contabilidad() {
  /* const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch(); */
  let [render, setRender] = useState(undefined);
  //const ordenes = useSelector((state) => state.orders);

  function handleRender(e) {
    if (e === 1) {
      setRender((render = 1));
    } else if (e === 2) {
      setRender((render = 2));
    } else if (e === 3) {
      setRender((render = 3));
    } else {
      setRender((render = undefined));
    }
  }

  //   useEffect(() => {
  //     dispatch(getOrders(token));
  //   }, [dispatch, token]);

  return (
    <>
      <div>
        <center>
          <h1>INFORMES GENERALES</h1>
          <button onClick={(e) => handleRender(1)}>INVENTARIO</button>
          {/* <button onClick={(e) => handleRender(2)}>PROVEEDORES</button>
          <button onClick={(e) => handleRender(3)}>COMPRAS</button> */}
        </center>
      </div>

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
      )}
    </>
  );
}

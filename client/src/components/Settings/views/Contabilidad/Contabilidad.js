import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Total from "./components/Views/Total";
import Subdiario from "./components/Views/Subdiario";
import PorFecha from "./components/Views/PorFecha";
import { getOrders } from "../../../../actions";

export default function Contabilidad() {
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();
  let [render, setRender] = useState(undefined);
  const ordenes = useSelector((state) => state.orders);

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

  useEffect(() => {
    dispatch(getOrders(token));
  }, [dispatch, token]);

  return (
    <>
      <div>
        <center>
          <h1>Informes Contables</h1>
          <button onClick={(e) => handleRender(1)}>Informe Diario</button>
          <button onClick={(e) => handleRender(2)}>Informe por fecha</button>
          <button onClick={(e) => handleRender(3)}>Informe Total</button>
        </center>
      </div>

      <div></div>

      {render === 1 && (
        <div>
          <center>
            <Subdiario text aling="center" />
          </center>
        </div>
      )}
      {render === 2 && (
        <div>
          <center>
            <PorFecha text aling="center" />
          </center>
        </div>
      )}
      {render === 3 && (
        <div>
          <center>
            <Total text aling="center" />
          </center>
        </div>
      )}
    </>
  );
}

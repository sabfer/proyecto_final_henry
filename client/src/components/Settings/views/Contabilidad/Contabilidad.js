import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Total from "./Views/Total";
import PorHora from "./Views/PorHora";
import PorFecha from "./Views/PorFecha";
import { getOrders } from "../../../../actions";
import BarChart from "./components/BarChart";

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
          <h1>INFORMES CONTABLES</h1>
          <button onClick={(e) => handleRender(undefined)}>
            Informe Diario
          </button>
          <button onClick={(e) => handleRender(1)}>Informe por Hora</button>
          <button onClick={(e) => handleRender(2)}>Informe por Fecha</button>
          <button onClick={(e) => handleRender(3)}>Informe Total</button>
        </center>
      </div>

      <div></div>

      {render === 1 && (
        <div>
          <center>
            <PorHora text aling="center" />
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
      {render === undefined && (
        <>
        <br/> 
        <br/> 
        <center>
          <header>
            <h1>Informe Diario</h1>
          </header>
          </center>
          <div>
            <BarChart />
          </div>
        </>
      )}
    </>
  );
}

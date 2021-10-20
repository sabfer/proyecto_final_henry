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

  const ordenes = useSelector((state) => state?.orders);

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
  }, []);

  function ordersSalonCantByWeek() {
    const ordersSalon = ordenes.filter((ord) => ord.type === "Salon");
    const ordsByday = ordersbyWeek(ordersSalon, { ...ordersByWeek });
    return ordsByday;
  }

  function ordersTaCantByWeek() {
    const ordersDev = ordenes.filter((ord) => ord.type === "Delivery");
    const ordsByday = ordersbyWeek(ordersDev, { ...ordersByWeek });
    return ordsByday;
  }

  function ordersDevCantByWeek() {
    const ordersTa = ordenes.filter((ord) => ord.type === "Take Away");
    const ordsByday = ordersbyWeek(ordersTa, { ...ordersByWeek });
    return ordsByday;
  }

  return (
    <>
      <div>
        <center>
          <h1>INFORMES CONTABLES</h1>

          <button onClick={(e) => handleRender(1)}>Informe por Hora</button>
          <button onClick={(e) => handleRender(2)}>Informe por Fecha</button>
          <button onClick={(e) => handleRender(3)}>Informe Total</button>
        </center>
      </div>
      <h2>Informe semanal</h2>
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
          <br />
          <br />
          <center>
            <header></header>
          </center>
          <div>
            {ordenes && (
              <BarChart
                salOrds={ordersSalonCantByWeek()}
                taOrds={ordersTaCantByWeek()}
                devOrds={ordersDevCantByWeek()}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

const ordersByWeek = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
};

function ordersbyWeek(arrayOrds, objWeek) {
  arrayOrds.forEach((ord) => {
    if (ord.date === "2021/10/14") objWeek[1]++;
    if (ord.date === "2021/10/15") objWeek[2]++;
    if (ord.date === "2021/10/16") objWeek[3]++;
    if (ord.date === "2021/10/17") objWeek[4]++;
    if (ord.date === "2021/10/18") objWeek[5]++;
    if (ord.date === "2021/10/19") objWeek[6]++;
    if (ord.date === "2021/10/20") objWeek[7]++;
  });
  return objWeek;
}

import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

export default function PorFecha() {
  let ordersDb = useSelector((state) => state.orders);
  let [init, setInit] = useState(undefined);
  let [finish, setFinish] = useState(undefined);

  let yesterdayDate = moment().locale("es").add(0, "days").format("DD/MM/YYYY");
  let currentDate = moment().locale("es").format("DD/MM/YYYY");

  function handleChangeInit(e) {
    setInit((init = e.target.value));
  }

  function handleChangeFinish(e) {
    setFinish((finish = e.target.value));
  }

  const currentOrders = () => {};

  let OrdersTotal = currentOrders();

  const totalFact = () => {};

  return (
    <>
      <header>
        <h1>Informe Por Fecha</h1>
      </header>
      <div>
        <label> Desde la fecha: </label>
        <input
          type="date"
          name="init"
          onChange={(e) => handleChangeInit(e)}
        ></input>
        <label> Hasta la fecha </label>
        <input
          type="date"
          name="finish"
          onChange={(e) => handleChangeFinish(e)}
        ></input>
      </div>
      <h3>{totalFact()}</h3>
      {OrdersTotal.length && <h3>Total de órdenes: {OrdersTotal.length}</h3>}
    </>
  );
}

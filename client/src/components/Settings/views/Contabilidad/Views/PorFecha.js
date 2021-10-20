import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

export default function PorFecha() {
  let ordersDb = useSelector((state) => state.orders);
  let [init, setInit] = useState(undefined);
  let [finish, setFinish] = useState(undefined);

  function handleChangeInit(e) {
    setInit((init = e.target.value));
  }

  function handleChangeFinish(e) {
    setFinish((finish = e.target.value));
  }

  const currentOrders = () => {
    let filter = ordersDb.filter((e) => e.date >= init );
    console.log("acá-->", filter);
  };

  currentOrders()

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
    </>
  );
}

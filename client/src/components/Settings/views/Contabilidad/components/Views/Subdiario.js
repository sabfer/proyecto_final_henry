import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

export default function Subdiario() {
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

  const currentOrders = () => {
    //Horario comercio que abarca dos días
    if (init >= finish) {
      let ordersYesterday = ordersDb.filter(
        (e) => e.date === yesterdayDate && e.hour >= init
      );
      let ordersCurrent = ordersDb.filter(
        (e) => e.date === currentDate && e.hour <= finish
      );
      let OrdersTotal = [...ordersYesterday, ...ordersCurrent];
      return OrdersTotal;

      //Horario comercio que abarca un día
    } else {
      return ordersDb.filter(
        (e) => e.date === currentDate && e.hour >= init && e.hour <= finish
      );
    }
  };

  let OrdersTotal = currentOrders();

  const totalFact = () => {
    if (init !== undefined && finish !== undefined) {
      let totalFact = currentOrders().map((e) => e.totalPrice);
      if (totalFact.length) {
        totalFact = totalFact.reduce((a, b) => a + b);
        totalFact = new Intl.NumberFormat().format(totalFact);
        return `La facturación del día es: $${totalFact}`;
      }
      return "No hay ingresos registrados";
    } else {
      let totalFact = "No hay ingresos registrados";
      return totalFact;
    }
  };

  return (
    <>
      <header>
        <h1>Informe Sub-Diario</h1>
      </header>
      <div>
        <label> Horario Inico Local </label>
        <input
          type="time"
          name="init"
          onChange={(e) => handleChangeInit(e)}
        ></input>
        <label> Horario Cierre Local </label>
        <input
          type="time"
          name="finish"
          onChange={(e) => handleChangeFinish(e)}
        ></input>
      </div>
      <h3>{totalFact()}</h3>
      {OrdersTotal.length && <h3>Total de órdenes: {OrdersTotal.length}</h3>}
    </>
  );
}

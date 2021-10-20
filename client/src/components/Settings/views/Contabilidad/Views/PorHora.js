import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import DoughnutChart from "../components/DoughnutChart";

export default function PorHora() {
  let ordersDb = useSelector((state) => state.orders);
  let [init, setInit] = useState(undefined);
  let [finish, setFinish] = useState(undefined);

  let yesterdayDate = moment().locale("es").add(0, "days").format("YYYY/MM/DD");
  let currentDate = moment().locale("es").format("YYYY/MM/DD");

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
      let ordersTotal = [...ordersYesterday, ...ordersCurrent];
      return ordersTotal;

      //Horario comercio que abarca un día
    } else {
      return ordersDb.filter(
        (e) => e.date === currentDate && e.hour >= init && e.hour <= finish
      );
    }
  };

  let ordersTotal = currentOrders();

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

  function salon() {
    if (ordersTotal) {
      let salonOrders = ordersTotal.filter((e) => e.type === "Salon");
      return salonOrders.length;
    }
    return null;
  };

  function delivery() {
    if (ordersTotal) {
      let salonOrders = ordersTotal.filter((e) => e.type === "Delivery");
      return salonOrders.length;
    }
    return null;
  };

  function taway() {
    if (ordersTotal) {
      let salonOrders = ordersTotal.filter((e) => e.type === "Take Away");
      return salonOrders.length;
    }
    return null;
  };
  
  return (
    <>
      <header>
        <h1>Informe del turno del Servicio</h1>
      </header>
      <div>
        <label> Horario Inicio </label>
        <input
          type="time"
          name="init"
          onChange={(e) => handleChangeInit(e)}
        ></input>
        <label> Horario Cierre </label>
        <input
          type="time"
          name="finish"
          onChange={(e) => handleChangeFinish(e)}
        ></input>
      </div>
      <h3>{totalFact()}</h3>
      {ordersTotal.length && <h3>Total de órdenes: {ordersTotal.length}</h3>}

      <br />
      <div>
        <DoughnutChart salon={salon()} delivery={delivery()} takeAway={taway()} />
      </div>
    </>
  );
}

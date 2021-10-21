import React, { useState } from "react";
import { useSelector } from "react-redux";
import DoughnutChart from "../components/DoughnutChart";
import OrdersTable from "../components/OrdersTable";

export default function PorFecha() {
  let ordersDb = useSelector((state) => state.totalOrders);
  let [init, setInit] = useState(undefined);
  let [finish, setFinish] = useState(undefined);

  function handleChangeInit(e) {
    setInit((init = e.target.value.replaceAll("-", "/")));
  }

  function handleChangeFinish(e) {
    setFinish((finish = e.target.value.replaceAll("-", "/")));
  }

  const currentOrders = () => {
    if (ordersDb) {
      let filter = ordersDb.filter((e) => e.date >= init && e.date <= finish);
      return filter;
    }
    return null;
  };

  const ordersTotal = currentOrders();

  const totalFact = () => {
    if (init !== undefined && finish !== undefined) {
      let totalFact = currentOrders().map((e) => e.totalPrice);
      if (totalFact.length) {
        totalFact = totalFact.reduce((a, b) => a + b);
        totalFact =
          new Intl.NumberFormat().format(totalFact).replaceAll(",", ".") + ",00";
        return `La facturación total del periodo es: $ ${totalFact}`;
      }
      return "No hay ingresos registrados";
    } else {
      let totalFact = "No hay ingresos registrados";
      return totalFact;
    }
  };

  function salon() {
    if (ordersTotal) {
      let orders = ordersTotal.filter((e) => e.type === "Salon");
      return orders.length;
    }
    return null;
  }

  function delivery() {
    if (ordersTotal) {
      let orders = ordersTotal.filter((e) => e.type === "Delivery");
      return orders.length;
    }
    return null;
  }

  function taway() {
    if (ordersTotal) {
      let orders = ordersTotal.filter((e) => e.type === "Take Away");
      return orders.length;
    }
    return null;
  }

  return (
    <>
      <header>
        <h2>Seleccione una Fecha</h2>
      </header>
      <div>
        <label> Desde la fecha: </label>
        <input type="date" name="init" onChange={(e) => handleChangeInit(e)}></input>
        <label> Hasta la fecha </label>
        <input type="date" name="finish" onChange={(e) => handleChangeFinish(e)}></input>
      </div>
      <h3>{totalFact()}</h3>
      {ordersTotal.length && <h3>Total de órdenes: {ordersTotal.length}</h3>}
      <br />
      <div>
        <DoughnutChart salon={salon()} delivery={delivery()} takeAway={taway()} />
      </div>
      <div>
        <OrdersTable ordenes={ordersTotal} title="Ordenes Filtradas" />
      </div>
    </>
  );
}

import { useSelector } from "react-redux";
import DoughnutChart from "../components/DoughnutChart";
import OrdersTable from "../components/OrdersTable";

export default function Total() {
  let ordersDb = useSelector((state) => state.totalOrders);

  const totalFact = () => {
    let totalFact = ordersDb.map((e) => e.totalPrice);
    if (totalFact.length) {
      totalFact = totalFact.reduce((a, b) => a + b);
      totalFact = new Intl.NumberFormat().format(totalFact);
      return `La facturación Total es de: $${totalFact}`;
    }
    return "No hay ingresos registrados";
  };

  function salon() {
    if (ordersDb) {
      let salonOrders = ordersDb.filter((e) => e.type === "Salon");
      return salonOrders.length;
    }
    return null;
  }

  function delivery() {
    if (ordersDb) {
      let salonOrders = ordersDb.filter((e) => e.type === "Delivery");
      return salonOrders.length;
    }
    return null;
  }

  function taway() {
    if (ordersDb) {
      let salonOrders = ordersDb.filter((e) => e.type === "Take Away");
      return salonOrders.length;
    }
    return null;
  }

  return (
    <>
      <div>
        <h1>Informe Total</h1>
        <h3>{totalFact()}</h3>
        <h3>Total de órdenes: {ordersDb.length}</h3>
      </div>
      <div>
        <DoughnutChart
          salon={salon()}
          delivery={delivery()}
          takeAway={taway()}
        />
      </div>
      <div>
        <OrdersTable />
      </div>
    </>
  );
}

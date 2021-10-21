import { useSelector } from "react-redux";
import DoughnutChart from "../components/DoughnutChart";
import OrdersTable from "../components/OrdersTable";

export default function Total() {
<<<<<<< HEAD
  let ordersTotal = useSelector((state) => state.totalOrders);
=======
  let ordersDb = useSelector((state) => state.totalOrders);
>>>>>>> 74829194b5ecc93f52375f9664066db3a1455a3d

  const totalFact = () => {
    let totalFact = ordersTotal.map((e) => e.totalPrice);
    if (totalFact.length) {
      totalFact = totalFact.reduce((a, b) => a + b);
      totalFact = new Intl.NumberFormat().format(totalFact).replaceAll(",", ".")+",00"
      return `La facturación Total es de:  $ ${totalFact}`;
    }
    return "No hay ingresos registrados";
  };

  function salon() {
    if (ordersTotal) {
      let salonOrders = ordersTotal.filter((e) => e.type === "Salon");
      return salonOrders.length;
    }
    return null;
  }

  function delivery() {
    if (ordersTotal) {
      let salonOrders = ordersTotal.filter((e) => e.type === "Delivery");
      return salonOrders.length;
    }
    return null;
  }

  function taway() {
    if (ordersTotal) {
      let salonOrders = ordersTotal.filter((e) => e.type === "Take Away");
      return salonOrders.length;
    }
    return null;
  }

  return (
    <>
      <div>
        <h2>Total</h2>
        <h3>{totalFact()}</h3>
        <h3>Total de órdenes: {ordersTotal.length}</h3>
      </div>
      <div>
        <DoughnutChart
          salon={salon()}
          delivery={delivery()}
          takeAway={taway()}
        />
      </div>
      <div>
        <OrdersTable ordenes={ordersTotal} title = "Todas las Ordenes"/>
      </div>
    </>
  );
}

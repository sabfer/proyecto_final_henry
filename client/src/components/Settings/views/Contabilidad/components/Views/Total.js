import { useSelector } from "react-redux";

export default function Total() {
  let ordersDb = useSelector((state) => state.orders);

  const totalFact = () => {
    let totalFact = ordersDb.map((e) => e.totalPrice);
    console.log(totalFact);
    if (totalFact.length) {
      totalFact = totalFact.reduce((a, b) => a + b);
      totalFact = new Intl.NumberFormat().format(totalFact);
      return `La facturación Total es de: $${totalFact}`;
    }
    return "No hay ingresos registrados";
  };

  return (
    <div>
      <h1>Informe Total</h1>
      <h3>{totalFact()}</h3>
      <h3>Total de órdenes: {ordersDb.length}</h3>
    </div>
  );
}

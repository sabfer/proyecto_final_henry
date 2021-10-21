import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { DeliveryCard, Time } from "../../../css/HomeStyles";
import { useSelector } from "react-redux";
import moment from "moment";

export default function OrderDelivery({ orderNumber, handleUpdate }) {
  const ordenes = useSelector((state) => state.orders.deliveryOrders);
  const order = ordenes
    ? ordenes.find((ord) => ord.orderNumber === orderNumber && ord.estado !== 4)
    : undefined;

  const [orderTime, setOrderTime] = useState({
    demora: "",
  });

  useEffect(() => {
    const now = moment();
    const end = moment(order.date + " " + order.hour);
    const diferencia = now.diff(end, "minutes");
    setOrderTime({
      demora: diferencia,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  setInterval(() => {
    const now = moment();
    const end = moment(order.date + " " + order.hour);
    const diferencia = now.diff(end, "minutes");
    setOrderTime({
      demora: diferencia,
    });
  }, 60000);
  return (
    <DeliveryCard
      onClick={(e) => {
        handleUpdate(e, { orderNumber: orderNumber });
      }}
    >
      <div>
        <Time>{orderTime.demora} min.</Time>
      </div>
      <FontAwesomeIcon
        icon={faMotorcycle}
        size="4x"
        color={
          orderTime.demora > 25
            ? "#ED4245"
            : orderTime.demora > 15
            ? "#FFA43D"
            : orderTime.demora < 15
            ? "#4DD87A"
            : null
        }
      />
      <p>Pedido: {orderNumber}</p>
    </DeliveryCard>
  );
}

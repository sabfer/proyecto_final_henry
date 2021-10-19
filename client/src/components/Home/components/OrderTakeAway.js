import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { TakeAway } from "../../../css/HomeStyles";
import { useSelector } from "react-redux";
import moment from "moment";

export default function OrderTakeAway({ handleUpdate, orderNumber }) {
  const ordenes = useSelector((state) => state.orders.takeAwayOrders);
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
  }, []);

  setInterval(() => {
    const now = moment();
    console.log("TAKE AWAY:", order.date);
    const end = moment(order.date + " " + order.hour);
    const diferencia = now.diff(end, "minutes");
    setOrderTime({
      demora: diferencia,
    });
  }, 60000);

  return (
    <div>
      <TakeAway
        onClick={(e) => {
          handleUpdate(e, { orderNumber: orderNumber });
        }}
      >
        <div>
          <FontAwesomeIcon icon={faShoppingBag} size="4x" />
        </div>
        <p>Pedido: {orderNumber}</p>
        <p>{orderTime.demora} min</p>
      </TakeAway>
    </div>
  );
}

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
    const horaActual = moment().format("HH:mm:ss").substr(3, 2);

    setOrderTime({
      demora: horaActual - order.hour.substr(3, 2),
    });
  }, []);

  setInterval(() => {
    const horaActual = moment().format("HH:mm:ss").substr(3, 2);

    setOrderTime({
      demora: horaActual - order.hour.substr(3, 2),
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
        <p>{orderTime.demora} '</p>
      </TakeAway>
    </div>
  );
}

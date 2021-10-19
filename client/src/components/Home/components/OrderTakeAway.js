import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { TakeAway, Circle } from "../../../css/HomeStyles";
import { useSelector } from "react-redux";
import moment from "moment";

export default function OrderTakeAway({ handleUpdate, orderNumber, estado }) {
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
            <TakeAway 
                onClick={(e) => {
                    handleUpdate(e, { orderNumber: orderNumber });
                }}
            >
                <div>
                <Circle color={
                    estado === 1
                    ? "rgb(254, 228, 64)"
                    : estado === 2
                    ? "rgb(0, 168, 120)"
                    : estado === 3
                    ? "rgb(255, 48, 38)"
                    : null
                }></Circle>
                </div>
                <FontAwesomeIcon icon={faShoppingBag} size="4x" />
                <p>Pedido: {orderNumber}</p>
            </TakeAway>
        </div>
        <p>Pedido: {orderNumber}</p>
        <p>{orderTime.demora} min</p>
      </TakeAway>
    </div>
  );
}

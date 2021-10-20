import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Title, Body } from "../../css/";
import Orders from "./OrderCard.js";
import {
  OrdersContainerInProgress,
  OrdersContainerPending,
} from "../../css/KitchenStyles";
import Error403 from "../Home/views/Error403";
import { getKitchenOrders } from "../../actions";

export default function Kitchen() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userToken);
  const orders = useSelector((state) => state.kitchenOrders);

  useEffect(() => {
    dispatch(getKitchenOrders(token));
    setInterval(() => {
      dispatch(getKitchenOrders(token));
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!token) {
    return <Error403 />;
  }

  return (
    <div>
      <Header>
        <Title>Cocina</Title>
      </Header>
      <Body display="flex" gap="0 3rem">
        <OrdersContainerPending>
          <Title color="#000">Pedidos pendientes</Title>
          {orders &&
            orders.map((order) => {
              return order.estado === 1 ? (
                <Orders ordenPendiente={order} key={order._id} />
              ) : null;
            })}
        </OrdersContainerPending>
        <OrdersContainerInProgress>
          <Title color="#000">Pedidos en preparación</Title>
          {orders &&
            orders.map((order) => {
              return order.estado === 2 ? (
                <Orders ordenPendiente={order} key={order._id} />
              ) : null;
            })}
        </OrdersContainerInProgress>
      </Body>
    </div>
  );
}

/* () => cambiarEstado(order._id, order.estado, { ...order, estado: 3}) */

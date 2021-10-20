import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Title, Body, Button } from "../../css/";
import Orders from "./OrderCard.js";
import {
  OrderCard,
  OrderDetails,
  OrderProducts,
  OrdersContainerInProgress,
  OrdersContainerPending,
} from "../../css/KitchenStyles";
import Error403 from "../Home/views/Error403";
import { getKitchenOrders, updateOrderKitchen } from "../../actions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Kitchen() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userToken);
  const userId = useSelector((state) => state.userId);
  const orders = useSelector((state) => state.kitchenOrders);
  const MySwal = withReactContent(Swal);

  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  useEffect(() => {
    dispatch(getKitchenOrders(token, userId));
    console.log("----poronga");
    const interval = setInterval(() => {
      dispatch(getKitchenOrders(token, userId));
      console.log("----awita");
    }, 2000);
    return function () {
      console.log("----awota");
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!didMount) {
    return null;
  }

  if (!token) {
    return <Error403 />;
  }

  function cambiarEstado(id, estado, orden) {
    if (estado === 1) {
      dispatch(getKitchenOrders(token, userId));
      dispatch(updateOrderKitchen(id, orden, token));
    }
    if (estado === 2) {
      let orderChange = {
        ...orden,
        products: orden.products.map((product) => {
          return {
            ...product,
            prodState: 2,
          };
        }),
      };
      MySwal.fire({
        title: "¿Orden terminada?",
        text: "¡La orden será marcada como completada!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(0, 168, 120)",
        cancelButtonColor: "#d33",
        confirmButtonText: "Completada",
        cancelButtonText: "Todavía falta",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(getKitchenOrders(token, userId));
          dispatch(updateOrderKitchen(id, orderChange, token));
        }
      });
    }
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

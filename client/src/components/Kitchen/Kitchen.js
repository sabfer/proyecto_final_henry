import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Title, Body, Loading, StyledLink, Button } from "../../css/";
import Orders from "./OrderCard.js";
import {
  OrdersContainerInProgress,
  OrdersContainerPending,
} from "../../css/KitchenStyles";
import Error403 from "../Home/views/Error403";
import { getKitchenOrders } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faHome } from "@fortawesome/free-solid-svg-icons";

export default function Kitchen() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userToken);
  const toBeDone = useSelector((state) => state.kitchenOrders?.toBeDone);
  const inProgress = useSelector((state) => state.kitchenOrders?.inProgress);

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
        <StyledLink to="/home">
          <Button width="13rem" height="2.5rem" padding="1rem" justify="space-between">
            Regresar a Home
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Button>
        </StyledLink>
      </Header>
      <Body display="flex" gap="0 3rem">
        <OrdersContainerPending>
          <Title color="#000">Pedidos pendientes</Title>
          {Array.isArray(toBeDone) && toBeDone.length ? (
            toBeDone.map((order) => {
              return <Orders ordenPendiente={order} key={order._id} />;
            })
          ) : (
            <Loading gridcolumn="1/-1">
              <FontAwesomeIcon icon={faExclamationCircle} size="6x" />
              <p>Aún no hay ordenes pendientes</p>
            </Loading>
          )}
        </OrdersContainerPending>
        <OrdersContainerInProgress>
          <Title color="#000">Pedidos en preparación</Title>

          {Array.isArray(inProgress) && inProgress.length ? (
            inProgress.map((order) => {
              return <Orders ordenPendiente={order} key={order._id} />;
            })
          ) : (
            <Loading gridcolumn="1/-1">
              <FontAwesomeIcon icon={faExclamationCircle} size="6x" />
              <p>Aún no hay ordenes pendientes</p>
            </Loading>
          )}
        </OrdersContainerInProgress>
      </Body>
    </div>
  );
}

/* () => cambiarEstado(order._id, order.estado, { ...order, estado: 3}) */

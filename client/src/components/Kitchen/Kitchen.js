import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Title, Body } from "../../css/";
import {
  OrdersContainer,
  OrderCard,
  OrderDetails,
  OrderProducts,
} from "../../css/KitchenStyles";
import { Button } from "../../css/";
import Error403 from "../Home/views/Error403";
import { getKitchenOrders, updateOrderKitchen } from "../../actions";

export default function Kitchen() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userToken);
  const orders = useSelector((state) => state.kitchenOrders);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    dispatch(getKitchenOrders(token));
    setInterval(() => {
      dispatch(getKitchenOrders(token));
    }, 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!token) {
    return <Error403 />;
  }

  function cambiarEstado(id, estado, orden) {
    if (estado === 1 || estado === 2) {
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
        console.log(orderChange);
        dispatch(updateOrderKitchen(id, orderChange, token));
        dispatch(getKitchenOrders(token));
      } else {
        dispatch(updateOrderKitchen(id, orden, token));
        dispatch(getKitchenOrders(token));
      }
    }
  }

  return (
    <div>
      <Header>
        <Title>Cocina</Title>
      </Header>
      <Body display="flex" direction="column">
        <Title color="#000">Pedidos</Title>
        <OrdersContainer>
          {orders &&
            orders.map((order) => {
              console.log(order);
              return (
                <OrderCard key={order._id}>
                  <h2>Pedido N° {order.orderNumber}</h2>
                  <p>
                    Tipo: <b>{order.type}</b>
                  </p>
                  <OrderDetails>
                    <p>Productos</p>
                    <p>Cant.</p>
                    {order.products &&
                      order.products.map((product) => {
                        return product.prodState !== 2 ? (
                          <OrderProducts key={product._id}>
                            <p>{product.name}</p>
                            <p>{product.amount}</p>
                          </OrderProducts>
                        ) : null;
                      })}
                  </OrderDetails>
                  <Button
                    onClick={() =>
                      order.estado === 1
                        ? cambiarEstado(order._id, order.estado, { ...order, estado: 2 })
                        : order.estado === 2
                        ? cambiarEstado(order._id, order.estado, { ...order, estado: 3 })
                        : null
                    }
                    width="78%"
                    height="2.5rem"
                    padding="0.6rem"
                    color={order.estado === 1 ? "rgb(0, 0, 0) " : null}
                    buttonColor={
                      order.estado === 1
                        ? "rgb(254, 228, 64)"
                        : order.estado === 2
                        ? "rgb(0, 168, 120)"
                        : null
                    }
                    alignself="center"
                    position="absolute"
                    bottom="2rem"
                  >
                    {order.estado === 1
                      ? "Empezar orden"
                      : order.estado === 2
                      ? "Orden completada"
                      : null}
                  </Button>
                </OrderCard>
              );
            })}
        </OrdersContainer>
      </Body>
    </div>
  );
}

/* () => cambiarEstado(order._id, order.estado, { ...order, estado: 3}) */

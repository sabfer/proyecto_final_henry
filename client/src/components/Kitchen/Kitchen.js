import React, { useEffect } from "react";
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
import { getKitchenOrders } from "../../actions";

export default function Kitchen() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userToken);
  const orders = useSelector((state) => state.kitchenOrders);

  console.log(orders);
  useEffect(() => {
    dispatch(getKitchenOrders(token));
    setInterval(() => {
      dispatch(getKitchenOrders(token));
    }, 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (!token) {
    return <Error403 />;
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
                        return (
                          <OrderProducts key={product._id}>
                            <p>{product.name}</p>
                            <p>{product.amount}</p>
                          </OrderProducts>
                        );
                      })}
                  </OrderDetails>
                  <Button
                    width="78%"
                    padding="0.6rem"
                    buttonColor="rgb(0, 168, 120)"
                    alignSelf="center"
                    position="absolute"
                    bottom="2rem"
                  >
                    Orden completa
                  </Button>
                </OrderCard>
              );
            })}
        </OrdersContainer>
      </Body>
    </div>
  );
}

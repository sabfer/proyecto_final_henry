import React from "react";
import { useSelector } from "react-redux";
import { Header, Title, Body } from "../../css/";
import { OrdersContainer, OrderCard } from "../../css/KitchenStyles";
import { Button } from "../../css/";
import Error403 from "../Home/views/Error403";

export default function Kitchen() {
  const token = useSelector((state) => state.userToken);

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
          <OrderCard>
            <p>Pedido N° 000001</p>
            <Button width="100%" padding="0.6rem" buttonColor="rgb(0, 168, 120)">
              Orden completa
            </Button>
          </OrderCard>
          <OrderCard>
            <p>Pedido N° 000002</p>
            <Button width="100%" padding="0.6rem" buttonColor="rgb(0, 168, 120)">
              Orden completa
            </Button>
          </OrderCard>
          <OrderCard>
            <p>Pedido N° 000003</p>
            <Button width="100%" padding="0.6rem" buttonColor="rgb(0, 168, 120)">
              Orden completa
            </Button>
          </OrderCard>
          <OrderCard>
            <p>Pedido N° 000004</p>
            <Button width="100%" padding="0.6rem" buttonColor="rgb(0, 168, 120)">
              Orden completa
            </Button>
          </OrderCard>
          <OrderCard>
            <p>Pedido N° 000005</p>
            <Button width="100%" padding="0.6rem" buttonColor="rgb(0, 168, 120)">
              Orden completa
            </Button>
          </OrderCard>
        </OrdersContainer>
      </Body>
    </div>
  );
}

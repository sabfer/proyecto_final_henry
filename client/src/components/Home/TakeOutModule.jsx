import React from "react";
import { TakeOut, OrderButton, Orders, Order } from "./HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";

export default function TakeOutModule() {
  return (
    <TakeOut>
      <OrderButton width="10rem" justify="space-between" padding="0.625rem">
        <FontAwesomeIcon icon={faPlus} size="lg" />
        Crear pedido
      </OrderButton>
      <Orders>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
        <Order>
          <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          <p>Pedido X</p>
        </Order>
      </Orders>
    </TakeOut>
  );
}

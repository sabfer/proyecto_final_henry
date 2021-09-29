import React from "react";
import { Salon, OrderButton, Orders, Order } from "./HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";

export default function SalonModule() {
  return (
    <Salon>
      <OrderButton width="10rem" justify="space-between" padding="0.625rem">
        <FontAwesomeIcon icon={faPlus} size="lg" />
        Crear pedido
      </OrderButton>
      <Orders ordersColumns="repeat(10, 1fr)">
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
    </Salon>
  );
}

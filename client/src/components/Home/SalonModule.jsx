import React, { useState } from "react";
import { Salon, OrderButton, Orders, Order } from "./HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

export default function SalonModule() {
  const [stateModal5, setStateModal5] = useState(false);
  return (
    <Salon>
      <OrderButton
        onClick={() => setStateModal5(!stateModal5)}
        width="10rem"
        justify="space-between"
        padding="0.625rem"
      >
        <FontAwesomeIcon icon={faPlus} size="lg" />
        Crear pedido
      </OrderButton>

      {/* Modal 5 */}
      <Modal
        state={stateModal5}
        setStateModal={setStateModal5}
        title="Crear pedido de Salón"
        label1="Mesa  "
        label2="Productos"
        label3="Usuario"
        modalContainerBox={true}
      />
      
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

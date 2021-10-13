import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  TakeOut,
  Orders,
  Order,
  ModuleTop,
  OrdersContainer,
} from "../../../css/HomeStyles";
import { Button } from "../../../css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Modals/Modal";

export default function TakeOutModule() {
  const token = useSelector((state) => state.userToken);

  const [stateModal6, setStateModal6] = useState(false);
  return (
    <TakeOut>
      <ModuleTop>
        <h3>Take Away</h3>
        <Button
          onClick={() => setStateModal6(!stateModal6)}
          width="10rem"
          height="2.5rem"
          alignSelf="flex-end"
          justify="space-between"
          padding="0.6rem"
          buttonColor="rgba(0, 41, 107, 1)"
        >
          Crear pedido
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </Button>
      </ModuleTop>

      {/* Modal 6 */}
      <Modal
        id={6}
        state={stateModal6}
        setStateModal={setStateModal6}
        title="Crear pedido para llevar"
        label1="Pedido n°"
        label2="Productos"
        modalContainerBox={false}
      />
      <OrdersContainer>
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
      </OrdersContainer>
    </TakeOut>
  );
}

import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ModuleTop,
  Delivery,
  Orders,
  Order,
  OrdersContainer,
} from "../../../css/HomeStyles";
import { Button } from "../../../css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Modals/Modal";

export default function DeliveryModule() {
  const token = useSelector((state) => state.userToken);

  const [stateModal5, setStateModal5] = useState(false);
  return (
    <Delivery>
      <ModuleTop>
        <h3>Delivery</h3>
        <Button
          onClick={() => setStateModal5(!stateModal5)}
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
      {/*Modal 5*/}
      <Modal
        id={5}
        state={stateModal5}
        setStateModal={setStateModal5}
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
    </Delivery>
  );
}

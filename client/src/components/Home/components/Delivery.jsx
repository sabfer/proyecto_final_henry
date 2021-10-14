import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import ModalDelivery from "../../Modals/ModalDelivery";
import { getDeliveryOrders } from "../../../actions";

export default function DeliveryModule() {
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();
  const [stateModal, setStateModal] = useState(false);

  useEffect(() => {
    dispatch(getDeliveryOrders(token));
  }, [dispatch, token]);

  return (
    <Delivery>
      <ModuleTop>
        <h3>Delivery</h3>
        <Button
          onClick={() => setStateModal(!stateModal)}
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
      <ModalDelivery state={stateModal} setState={setStateModal} />
      <OrdersContainer>
        <Orders>
          <Order>
            <FontAwesomeIcon icon={faMotorcycle} size="4x" />
            <p>Pedido X</p>
          </Order>
        </Orders>
      </OrdersContainer>
    </Delivery>
  );
}

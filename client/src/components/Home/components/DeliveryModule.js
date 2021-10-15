import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ModuleTop,
  Delivery,
  Orders,
  OrdersContainer,
} from "../../../css/HomeStyles";
import { Button } from "../../../css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalDelivery from "../../Modals/ModalDelivery";
import OrderDelivery from "./OrderDelivery";
// import { getDeliveryOrders } from "../../../actions";
import UpdateTable from "../../Modals/UpdateTable";

export default function DeliveryModule() {
  // const token = useSelector((state) => state.userToken);
  // const dispatch = useDispatch();
  const [stateModal, setStateModal] = useState(false);
  const ordersDelivery = useSelector((state) => state?.orders?.deliveryOrders);
  const [updateModal, setUpdateModal] = useState(false);

  // useEffect(() => {
  //   dispatch(getDeliveryOrders(token));
  // }, [dispatch, token]);

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
        <Orders ordersColumns="repeat(auto-fill, minmax(140px, 1fr))">
          {ordersDelivery &&
            ordersDelivery.map((order) => {
              return (
                <OrderDelivery key={order._id} order={order.orderNumber} />
              );
            })}
          {updateModal && (
            <UpdateTable state={updateModal} setStateModal={setUpdateModal} />
          )}
        </Orders>
      </OrdersContainer>
    </Delivery>
  );
}

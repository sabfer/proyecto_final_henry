import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModuleTop, Delivery, Orders, OrdersContainer } from "../../../css/HomeStyles";
import { Button, Loading } from "../../../css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import ModalDelivery from "../../Modals/ModalDelivery";
import UpdateDelivery from "../../Modals/UpdateDelivery";
import OrderDelivery from "./OrderDelivery";
import { getDeliveryOrders } from "../../../actions";
// import UpdateTable from "../../Modals/UpdateTable";

export default function DeliveryModule() {
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();
  const [stateModal, setStateModal] = useState(false);
  const ordersDelivery = useSelector((state) => state?.orders?.deliveryOrders);
  const [updateModal, setUpdateModal] = useState(false);
  const [tableDetails, setTableDetails] = useState({
    orderNumber: undefined,
  });

  useEffect(() => {
    dispatch(getDeliveryOrders(token));
  }, [dispatch, token]);

  function handleUpdateModal(e, props) {
    e.preventDefault();
    setUpdateModal(true);
    setTableDetails({
      orderNumber: props.orderNumber,
    });
  }

  return (
    <>
      <Delivery>
        <ModuleTop>
          <h3>Delivery</h3>
          <Button
            onClick={() => setStateModal(!stateModal)}
            width="9.4rem"
            height="2.5rem"
            alignself="flex-end"
            justify="space-between"
            padding="0.6rem"
            buttonColor="rgba(0, 41, 107, 1)"
          >
            Crear pedido
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </Button>
        </ModuleTop>
        <OrdersContainer>
          <Orders ordersColumns="repeat(auto-fill, minmax(140px, 1fr))">
            {ordersDelivery && ordersDelivery ? (
              ordersDelivery.map((order) => {
                return (
                  <OrderDelivery
                    key={order._id}
                    orderNumber={order.orderNumber}
                    setStateModal={setStateModal}
                    handleUpdate={handleUpdateModal}
                  />
                );
              })
            ) : (
              <Loading gridcolumn="1/-1">
                <FontAwesomeIcon icon={faExclamationCircle} size="6x" />
                <p>Aún no hay ordenes</p>
              </Loading>
            )}
            {updateModal && (
              <UpdateDelivery
                state={updateModal}
                setStateModal={setUpdateModal}
                orderNumber={tableDetails.orderNumber}
              />
            )}
          </Orders>
        </OrdersContainer>
        {stateModal && <ModalDelivery state={stateModal} setState={setStateModal} />}
      </Delivery>
    </>
  );
}

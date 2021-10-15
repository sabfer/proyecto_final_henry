import React, { useEffect, useState } from "react";
import {
  TakeOut,
  Orders,
  ModuleTop,
  OrdersContainer,
} from "../../../css/HomeStyles";
import { Button } from "../../../css/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import UpdateTableTA from "../../Modals/UpdateTableTA";
import ModalTakeAway from "../../Modals/ModalTakeAway";
import { useDispatch, useSelector } from "react-redux";
import { getTakeAwayOrders } from "../../../actions";
import TakeAway from "./OrderTakeAway";

export default function TakeAwayModule() {
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();
  const [stateModal, setStateModal] = useState(false);
  const ordersTakeAway = useSelector((state) => state?.orders?.takeAwayOrders);
  const [updateModal, setUpdateModal] = useState(false);
  const [tableDetails, setTableDetails] = useState({
    orderNumber: undefined,
  });

  useEffect(() => {
    dispatch(getTakeAwayOrders(token));
  }, [dispatch, token]);  

  function handleUpdateModal(e, props) {
    e.preventDefault();
    setUpdateModal(true);
    setTableDetails({
      orderNumber: props.orderNumber,
    });
  } 

  return (
    <TakeOut>
      <ModuleTop>
        <h3>Take Away</h3>
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
      <ModalTakeAway state={stateModal} setState={setStateModal} />
      <OrdersContainer>
        <Orders ordersColumns="repeat(auto-fill, minmax(140px, 1fr))">
          {ordersTakeAway &&
            ordersTakeAway.map((order) => {
              return <TakeAway 
                key={order._id} 
                orderNumber={order.orderNumber} 
                setStateModal={setStateModal} 
                handleUpdate={handleUpdateModal} 
                />;
            })}
          {updateModal && (
            <UpdateTableTA 
              state={updateModal} 
              setStateModal={setUpdateModal} 
              orderNumber={tableDetails.orderNumber}
            />
          )}
        </Orders>
      </OrdersContainer>
    </TakeOut>
  );
}

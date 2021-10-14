import React, { useEffect, useState } from "react";
import { TakeOut, Orders, ModuleTop, OrdersContainer } from "../../../css/HomeStyles";
import { Button } from "../../../css/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import UpdateTable from "../../Modals/UpdateTable";
import ModalTakeAway from "../../Modals/ModalTakeAway";
import { useDispatch, useSelector } from "react-redux";
import { getTakeAwayOrders } from "../../../actions";
import TakeAway from "./OrderTakeAway";

export default function TakeAwayModule() {
  const token = useSelector((state) => state.userToken);

  const [stateModal, setStateModal] = useState(false);
  const dispatch = useDispatch();
  const ordersTakeAway = useSelector((state) => state?.orders?.takeAwayOrders); 
  const [updateModal, setUpdateModal] = useState(false);

  /* useEffect(() => {
    dispatch(getTakeAwayOrders(token));
  }, [dispatch, token]);  */

  /*  function handleUpdateModal(e, props) {
    e.preventDefault();
    setUpdateModal(true);
    setTableDetails({
      tableNumber: props.tableNumber,
    });
  }  */

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
      <ModalTakeAway state={stateModal} setState={setStateModal} title="Consumo Mesa: " />
<OrdersContainer>      
<Orders ordersColumns="repeat(auto-fill, minmax(140px, 1fr))">
        {ordersTakeAway &&
          ordersTakeAway.map((order) => {
            return (
              <TakeAway
                key={order._id}
                order={order.orderNumber}
              />
            );
            })} 
        {updateModal && <UpdateTable
          state={updateModal}
          setStateModal={setUpdateModal}
        />} 
        {/* buscar la orden que coincida con el numero de mesa
            1 modal mesa obtiene por props el numero de la mesa
            2 el modal busca en el estado de redux la orden que este pendiente o en proceso 
            que coincida con el numero de la mesa  en el estado de ordenes
            3 se edita la orden por el numero de id1 
         */}
      </Orders>
          </OrdersContainer>
    </TakeOut>
  );
}

import React, { useEffect, useState } from "react";
import { Salon, OrderButton, Orders } from "../HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Modals/Modal";
import UpdateTable from "../../Modals/UpdateTable";
import ModalSalon from "../../Modals/ModalSalon";
import { useDispatch, useSelector } from "react-redux";
import { getSalonOrders, getMesas, changeStatus } from "../../../actions";
import Mesas from "./Mesa";

export default function SalonModule() {
  const [stateModal, setStateModal] = useState(false);
  const dispatch = useDispatch();
  // const salonOrders = useSelector((state) => state.orders.salonOrders);
  const mesas = useSelector((state) => state.mesas);
  const [updateModal, setUpdateModal] = useState(false);
  const [tableDetails, setTableDetails] = useState({
    tableNumber: undefined,
  });

  useEffect(() => {
    dispatch(getSalonOrders({ key: "type", value: "salon" }));
    if (mesas === undefined) {
      dispatch(getMesas());
    }
  }, [dispatch, mesas]);

  /* function handleOnClick(e) {
    dispatch(changeStatus({ isOccupated: true, numero: 14 }));
  } */

  function handleUpdateModal(e, props) {
    e.preventDefault();
    console.log("HOLAAAAAAAAA:", updateModal, tableDetails);
    setUpdateModal(true);
    setTableDetails({
      tableNumber: props.tableNumber,
    });
  }

  return (
    <Salon>
      <OrderButton
        onClick={() => setStateModal(!stateModal)}
        width="10rem"
        justify="space-between"
        padding="0.625rem"
      >
        <FontAwesomeIcon icon={faPlus} size="lg" />
        Crear pedido
      </OrderButton>
      <ModalSalon
        state={stateModal}
        setState={setStateModal}
        title="Consumo Mesa: "        
      />
      <Orders ordersColumns="repeat(10, 1fr)">
        {mesas &&
          mesas.map((mesa) => {
            return (
              <Mesas
                tableNumber={mesa.numero}
                status={mesa.isOccupated}
                key={mesa.numero}
                handleUpdate={handleUpdateModal}
              />
            );
          })}
        <UpdateTable
          state={updateModal}
          setStateModal={setUpdateModal}
          tableNumber={tableDetails.tableNumber}
        />
        {/* buscar la orden que coincida con el numero de mesa
            1 modal mesa obtiene por props el numero de la mesa
            2 el modal busca en el estado de redux la orden que este pendiente o en proceso 
            que coincida con el numero de la mesa  en el estado de ordenes
           3 se edita la orden por el numero de id1 
        */}
      </Orders>
    </Salon>
  );
}

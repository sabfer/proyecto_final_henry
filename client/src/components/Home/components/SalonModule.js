import React, { useEffect, useState } from "react";
import {
  Salon,
  Orders,
  ModuleTop,
  OrdersContainer,
} from "../../../css/HomeStyles";
import { Button } from "../../../css/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import Modal from "../../Modals/Modal";
import UpdateTable from "../../Modals/UpdateTable";
import ModalSalon from "../../Modals/ModalSalon";
import { useDispatch, useSelector } from "react-redux";
import { getSalonOrders, getMesas } from "../../../actions";
import Mesas from "./Mesa";

export default function SalonModule() {
  const token = useSelector((state) => state.userToken);

  const [stateModal, setStateModal] = useState({
    tableNumber: "",
    status: false
  });
  const dispatch = useDispatch();
  const mesas = useSelector((state) => state.mesas);
  const [updateModal, setUpdateModal] = useState(false);
  const [tableDetails, setTableDetails] = useState({
    tableNumber: undefined,
  });

  useEffect(() => {
    dispatch(getSalonOrders(token));
    if (mesas === undefined) {
      dispatch(getMesas(token));
    }
  }, [dispatch, mesas, token]);

  function handleUpdateModal(e, props) {
    e.preventDefault();
    setUpdateModal(true);
    setTableDetails({
      tableNumber: props.tableNumber,
    });
  }

  return (
    <Salon>
      <ModuleTop>
        <h3>Salón</h3>
        <Button
          onClick={() => setStateModal({status: true, tableNumber: ""})}
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
      <ModalSalon
        state={stateModal}
        setState={setStateModal}
        title="Consumo Mesa: "
      />
      <OrdersContainer>
        <Orders ordersColumns="repeat(auto-fill, minmax(140px, 1fr))">
          {mesas &&
            mesas.map((mesa) => {
              return (
                <Mesas
                  tableNumber={mesa.tableNumber}
                  status={mesa.isOccupated}
                  key={mesa.numero}
                  setStateModal={setStateModal}
                  handleUpdate={handleUpdateModal}
                />
              );
            })}
          {updateModal && (
            <UpdateTable
              state={updateModal}
              setStateModal={setUpdateModal}
              tableNumber={tableDetails.tableNumber}
            />
          )}
          {/* buscar la orden que coincida con el numero de mesa
            1 modal mesa obtiene por props el numero de la mesa
            2 el modal busca en el estado de redux la orden que este pendiente o en proceso 
            que coincida con el numero de la mesa  en el estado de ordenes
           3 se edita la orden por el numero de id1 
         */}
        </Orders>
      </OrdersContainer>
    </Salon>
  );
}

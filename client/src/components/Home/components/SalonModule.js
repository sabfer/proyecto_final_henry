import React, { useEffect, useState } from "react";
import { Salon, Orders, ModuleTop, OrdersContainer } from "../../../css/HomeStyles";
import { Button, Loading } from "../../../css/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
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
    status: false,
  });
  const dispatch = useDispatch();
  const mesas = useSelector((state) => state.mesas);
  const [updateModal, setUpdateModal] = useState(false);
  const [tableDetails, setTableDetails] = useState({
    tableNumber: undefined,
  });

  useEffect(() => {
    dispatch(getSalonOrders(token));
    dispatch(getMesas(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function handleUpdateModal(e, props) {
    e.preventDefault();
    setUpdateModal(true);
    setTableDetails({
      tableNumber: props.tableNumber,
    });
  }

  return (
    <>
      <Salon>
        <ModuleTop>
          <h3>Salón</h3>
          <Button
            onClick={() => setStateModal({ status: true, tableNumber: "" })}
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
            {mesas && mesas ? (
              mesas.map((mesa) => {
                return (
                  <Mesas
                    tableNumber={mesa.tableNumber}
                    status={mesa.isOccupated}
                    key={mesa._id}
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
              <UpdateTable
                state={updateModal}
                setStateModal={setUpdateModal}
                tableNumber={tableDetails.tableNumber}
              />
            )}
          </Orders>
        </OrdersContainer>
      </Salon>
      {stateModal.status && (
        <ModalSalon state={stateModal} setState={setStateModal} title="Consumo Mesa: " />
      )}
    </>
  );
}

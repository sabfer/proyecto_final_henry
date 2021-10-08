import React, { useEffect, useState } from "react";
import { Salon, OrderButton, Orders, Order } from "../HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getSalonOrders } from "../../../actions";

export default function SalonModule() {
  const dispatch = useDispatch();
  const salonOrders = useSelector((state) => state.orders.salonOrders);

  useEffect(() => {
    dispatch(getSalonOrders({ key: "type", value: "salon" }));
  }, [dispatch]);

  const [stateModal4, setStateModal4] = useState(false);
  return (
    <Salon>
      <OrderButton
        onClick={() => setStateModal4(!stateModal4)}
        width="10rem"
        justify="space-between"
        padding="0.625rem"
      >
        <FontAwesomeIcon icon={faPlus} size="lg" />
        Crear pedido
      </OrderButton>

      {/* Modal 4 */}
      <Modal
        id={4}
        state={stateModal4}
        setStateModal={setStateModal4}
        title="Crear pedido de Salón"
        label1="Mesa"
        label2="Productos"
        label3="Usuario"
      />

      <Orders ordersColumns="repeat(10, 1fr)">
        {salonOrders &&
          salonOrders.map((order) => {
            return (
              <Order>
                <FontAwesomeIcon icon={faPaintRoller} size="4x" />
                <p>Mesa {order.tableNumber}</p>
              </Order>
            );
          })}
      </Orders>
    </Salon>
  );
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Salon, OrderButton, Orders, Order } from "../HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import ModalSalon from "../../Modals/ModalSalon";
import { getSalonOrders } from "../../../actions";

export default function SalonModule() {
  const [stateModal, setStateModal] = useState(false);
  // const dispatch = useDispatch();
  // const salonOrders = useSelector((state) => state.orders.salonOrders);

  // useEffect(() => {
  //   dispatch(getSalonOrders({ key: "type", value: "salon" }));
  // }, [dispatch]);

  function handleClick(e) {
    alert(`soy la mesa n° ? `);
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
        <Order>
          <FontAwesomeIcon
            icon={faPaintRoller}
            size="4x"
            onClick={(e) => handleClick(e)}
          />
          <p>Mesa 1</p>
        </Order>
        <Order>
          <FontAwesomeIcon
            icon={faPaintRoller}
            size="4x"
            onClick={(e) => handleClick(e)}
          />
          <p>Mesa 2</p>
        </Order>
        <Order>
          <FontAwesomeIcon
            icon={faPaintRoller}
            size="4x"
            onClick={(e) => handleClick(e)}
          />
          <p>Mesa 3</p>
        </Order>
        <Order>
          <FontAwesomeIcon
            icon={faPaintRoller}
            size="4x"
            onClick={(e) => handleClick(e)}
          />
          <p>Mesa 4</p>
        </Order>
        <Order>
          <FontAwesomeIcon
            icon={faPaintRoller}
            size="4x"
            onClick={(e) => handleClick(e)}
          />
          <p>Mesa 5</p>
        </Order>
      </Orders>
    </Salon>
  );
}

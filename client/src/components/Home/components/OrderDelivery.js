import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { DeliveryCard } from "../../../css/HomeStyles";

export default function OrderDelivery({ orderNumber, handleUpdate }) {
  return (
    <div>
      <DeliveryCard
        onClick={(e) => {
          handleUpdate(e, { orderNumber: orderNumber });
        }}
      >
        <div>
          <FontAwesomeIcon icon={faMotorcycle} size="4x" />
        </div>
        <p>Pedido: {orderNumber}</p>
      </DeliveryCard>
    </div>
  );
}

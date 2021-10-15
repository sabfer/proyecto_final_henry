import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { DeliveryCard } from "../../../css/HomeStyles";

export default function OrderDelivery({ order/* , handleUpdate */ }) {

    return (
        <div>
            <DeliveryCard /* onClick={(e) => handleUpdate(e, { tableNumber: tableNumber })} */>
                <div>
                <FontAwesomeIcon icon={faMotorcycle} size="4x" />
                </div>
                <p>Pedido: {order}</p>
            </DeliveryCard>
        </div>
    );
}
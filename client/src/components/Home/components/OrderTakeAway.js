import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { TakeAway, Circle } from "../../../css/HomeStyles";

export default function OrderTakeAway({ handleUpdate, orderNumber, estado}) {

    return (
        <div>
            <TakeAway 
                onClick={(e) => {
                    handleUpdate(e, { orderNumber: orderNumber });
                }}
            >
                <div>
                <Circle color={
                    estado === 1
                    ? "rgb(254, 228, 64)"
                    : estado === 2
                    ? "rgb(0, 168, 120)"
                    : estado === 3
                    ? "rgb(255, 48, 38)"
                    : null
                }></Circle>
                </div>
                <FontAwesomeIcon icon={faShoppingBag} size="4x" />
                <p>Pedido: {orderNumber}</p>
            </TakeAway>
        </div>
    );
}
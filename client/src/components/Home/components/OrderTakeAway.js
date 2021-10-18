import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { TakeAway } from "../../../css/HomeStyles";

export default function OrderTakeAway({ handleUpdate, orderNumber  }) {

    return (
        <div>
            <TakeAway 
                onClick={(e) => {
                    handleUpdate(e, { orderNumber: orderNumber });
                }}
            >
                <div>
                <FontAwesomeIcon icon={faShoppingBag} size="4x" />
                </div>
                <p>Orden: {orderNumber}</p>
            </TakeAway>
        </div>
    );
}
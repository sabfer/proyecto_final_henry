import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { TakeAway } from "../../../css/HomeStyles";

export default function OrderTakeAway({ order/* , handleUpdate */ }) {

    return (
        <div>
            <TakeAway /* onClick={(e) => handleUpdate(e, { tableNumber: tableNumber })} */>
                <div>
                <FontAwesomeIcon icon={faShoppingBag} size="4x" />
                </div>
                <p>Orden: {order}</p>
            </TakeAway>
        </div>
    );
}
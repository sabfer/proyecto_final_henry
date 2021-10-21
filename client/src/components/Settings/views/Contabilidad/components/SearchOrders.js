import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOrdersNumber, getOrders } from "../../../../../actions";
import { SearchContainer } from "../../../../../css/SettingStyles";

export default function SearchOrders() {
  // const ordersTotal = useSelector((state) => state.totalOrders);
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();

  function handleFilterNumber(e) {
    if (e.target.value === "") return dispatch(getOrders(token));
    let number = Number(e.target.value);
    dispatch(filterOrdersNumber(number, token));
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
    }
  }

  return (
    <SearchContainer>
      <div className="input">
        <input
          type="number"
          placeholder="Buscar órdenes..."
          onChange={(e) => handleFilterNumber(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
    </SearchContainer>
  );
}

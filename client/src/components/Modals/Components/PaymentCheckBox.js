import React from "react";
import { DivPaymentCheckBox } from "../../../css/ModalStyles";

export default function PaymentCheckBox({ handlePaymentInput }) {
  return (
    <>
      <DivPaymentCheckBox>
        <label>
          <input
            type="checkbox"
            name="Efectivo"
            onChange={(e) => handlePaymentInput(e)}
          />
          Efectivo
        </label>
        <label>
          <input
            type="checkbox"
            name="Debito"
            onChange={(e) => handlePaymentInput(e)}
          />
          Debito
        </label>
        <label>
          <input
            type="checkbox"
            name="Credito"
            onChange={(e) => handlePaymentInput(e)}
          />
          Credito
        </label>
        <label>
          <input
            type="checkbox"
            name="Mercado Pago"
            onChange={(e) => handlePaymentInput(e)}
          />
          Mercado pago
        </label>
      </DivPaymentCheckBox>
    </>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKitchenOrders, updateOrderKitchen } from "../../actions";
import { Button } from "../../css";
import { OrderCard, OrderDetails, OrderProducts } from "../../css/KitchenStyles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Orders({ ordenPendiente }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userToken);
  const userId = useSelector((state) => state.userId);

  const MySwal = withReactContent(Swal);

  function cambiarEstado(id, estado, orden) {
    if (estado === 1) {
      dispatch(updateOrderKitchen(id, orden, token));
      dispatch(getKitchenOrders(token, userId));
    }
    if (estado === 2) {
      let orderChange = {
        ...orden,
        products: orden.products.map((product) => {
          return {
            ...product,
            prodState: 2,
          };
        }),
      };
      MySwal.fire({
        title: "¿Orden terminada?",
        text: "¡La orden será marcada como completada!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(0, 168, 120)",
        cancelButtonColor: "#d33",
        confirmButtonText: "Completada",
        cancelButtonText: "Todavía falta",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(updateOrderKitchen(id, orderChange, token));
          dispatch(getKitchenOrders(token, userId));
        }
      });
    }
  }

  return (
      <OrderCard>
        <h2>Pedido N° {ordenPendiente.orderNumber}</h2>
        <p>
          Tipo: <b>{ordenPendiente.type}</b>
        </p>
        <OrderDetails>
          <p>Productos</p>
          <p>Cant.</p>
          {ordenPendiente.products &&
            ordenPendiente.products.map((product) => {
              return product.prodState !== 2 ? (
                <OrderProducts key={product._id}>
                  <p>{product.name}</p>
                  <p>{product.amount}</p>
                </OrderProducts>
              ) : null;
            })}
        </OrderDetails>
        <Button
          onClick={() =>
            ordenPendiente.estado === 1
              ? cambiarEstado(ordenPendiente._id, ordenPendiente.estado, {
                  ...ordenPendiente,
                  estado: 2,
                })
              : ordenPendiente.estado === 2
              ? cambiarEstado(ordenPendiente._id, ordenPendiente.estado, {
                  ...ordenPendiente,
                  estado: 3,
                })
              : null
          }
          width="78%"
          height="2.5rem"
          padding="0.6rem"
          color={ordenPendiente.estado === 1 ? "rgb(0, 0, 0) " : null}
          buttonColor={
            ordenPendiente.estado === 1
              ? "rgb(254, 228, 64)"
              : ordenPendiente.estado === 2
              ? "rgb(244, 104, 53)"
              : null
          }
          alignself="center"
          position="absolute"
          bottom="2rem"
        >
          {ordenPendiente.estado === 1
            ? "Empezar orden"
            : ordenPendiente.estado === 2
            ? "Completar orden"
            : null}
        </Button>
      </OrderCard>
  )
}

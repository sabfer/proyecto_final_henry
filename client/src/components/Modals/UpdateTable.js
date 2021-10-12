import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder, getSalonOrders } from "../../actions/index";
import { Table, TableHead, TableData, TableHd, TableRow } from "../../css/Table";
import { Overlay, ModalContainer, HeaderModal, CloseButton } from "./ModalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function UptadeTable({ state, setStateModal, tableNumber }) {
  const token = useSelector((state) => state.userToken);
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const ordenes = useSelector((state) => state.orders.salonOrders);
  console.log(tableNumber, "HOLAaaaaaaaaaaa");
  console.log(ordenes, "ORDENESS");
  const ordenTableNumber = ordenes
    ? ordenes.find(
        (ord) => ord.tableNumber === tableNumber && ord.estado !== "Finalizada"
      )
    : null;
  console.log(ordenTableNumber, "orden table");
  /* const MySwal = withReactContent(Swal);
  

  /* function handleChange(e) {
  } */
  function handleInput(e, id) {
    const product = ordenTableNumber.products.find((p) => p._id === id);
    product.cantidad = e.target.value;
  }

  function modifcarOrden(id, payload) {
    MySwal.fire({
      title: "¿Estas seguro?",
      text: "Se editará el pedido del cliente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1ABD53",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateOrder(id, payload), token);
        setTimeout(() => {
          dispatch(getSalonOrders({ key: "type", value: "Salon" }, token));
        }, 100);
        MySwal.fire({
          title: "Pedido editado",
          text: "El producto se editó correctamente.",
          icon: "success",
          confirmButtonColor: "#00A0D2",
        });
        setTimeout(() => {
          setStateModal(!state);
        }, 600);
      }
    });
  }

  function handleClose(e) {
    setStateModal(!state);
  }
  return (
    <div>
      <Overlay display={state ? "flex" : "none"}>
        <ModalContainer>
          {ordenTableNumber && (
            <HeaderModal>
              <p>N° Mesa: {tableNumber} </p>
              <p>N° Orden: {ordenTableNumber.orderNumber} </p>
            </HeaderModal>
          )}
          <CloseButton onClick={(e) => handleClose(e)}>
            <FontAwesomeIcon icon={faWindowClose} />
          </CloseButton>
          <Table id="productsTable">
            <TableHead>
              <TableRow>
                <TableHd width="40%">
                  <span className="productName">
                    <p style={{ margin: 0 }}>Nombre</p>
                  </span>
                </TableHd>
                <TableHd width="10%">Precio</TableHd>
                <TableHd width="10%">Cantidad</TableHd>
              </TableRow>
            </TableHead>
            <tbody>
              {ordenTableNumber &&
                ordenTableNumber.products.map((product) => {
                  return (
                    <TableRow key={product._id}>
                      <TableData>{product.name}</TableData>
                      <TableData>{product.price}</TableData>
                      <TableData>
                        <input
                          onChange={(e) => handleInput(e, product._id)}
                          placeholder={product.cantidad}
                        />
                      </TableData>
                      {/* <TableData>
                          <div className="options">
                            <Button
                              onClick={(e) =>
                                handleClick(e, {
                                  name: product.name,
                                  price: product.price,
                                  cantidad: product.cantidad,
                                  _id: el._id,
                                })
                              }
                              width="2rem"
                              height="2rem"
                              buttonColor="rgb(2, 101, 210)"
                            >
                              <FontAwesomeIcon
                                icon={faPenSquare}
                              ></FontAwesomeIcon>
                            </Button>
                            <Button
                              onClick={(e) => handleDelete(el._id)}
                              width="2rem"
                              height="2rem"
                              buttonColor="rgba(255, 0, 0, 1)"
                            >
                              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </Button>
                          </div>
                        </TableData> */}
                    </TableRow>
                  );
                })}
            </tbody>
          </Table>
          <button
            onClick={() =>
              modifcarOrden(ordenTableNumber._id, {
                products: ordenTableNumber.products,
              })
            }
          >
            Aceptar
          </button>
        </ModalContainer>
      </Overlay>
    </div>
  );
}

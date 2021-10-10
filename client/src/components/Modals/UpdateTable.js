import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder, getSalonOrders } from "../../actions/index";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "../../css/Table";
import {
  Overlay,
  ModalContainer,
  HeaderModal,
  CloseButton,
} from "./ModalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export default function UptadeTable({ state, setStateModal, tableNumber }) {
  const dispatch = useDispatch();
  const ordenes = useSelector((state) => state.orders.salonOrders);
  const ordenTableNumber = ordenes
    ? ordenes.find(
        (ord) => ord.tableNumber === tableNumber && ord.estado !== "Finalizada"
      )
    : null;

  /* const MySwal = withReactContent(Swal);
  

  /* function handleChange(e) {
  } */
  function handleInput(e, id) {
    const product = ordenTableNumber.products.find((p) => p._id === id);
    product.cantidad = e.target.value;
  }

  function modifcarOrden(id, payload) {
    dispatch(updateOrder(id, payload));
    setTimeout(() => {
      dispatch(getSalonOrders({ key: "type", value: "Salon" }));
    }, 100);
  }

  function handleClose(e) {
    setStateModal(!state);
  }
  return (
    <div>
      {state && (
        <Overlay>
          <ModalContainer>
            <HeaderModal>
              <h2>Orden NRO: {ordenTableNumber.orderNumber} </h2>
            </HeaderModal>
            <CloseButton onClick={(e) => handleClose(e)}>
              <FontAwesomeIcon icon={faWindowClose} />
            </CloseButton>
            <Table id="productsTable">
              <TableHead>
                <TableRow>
                  <TableHd width="40%">
                    <span className="productName">
                      <p style={{ margin: 0 }}>Nombre</p>
                      {/* <FontAwesomeIcon
                        onClick={(e) => handleOrder(e)}
                        color={order ? "#FF846A" : "#A2DFFF"}
                        icon={faSortAlphaDown}
                        size="lg"
                        style={{ cursor: "pointer" }}
                      ></FontAwesomeIcon> */}
                    </span>
                  </TableHd>
                  {/* <TableHd width="40%">Tipo de producto</TableHd> */}
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
      )}
    </div>
  );
}

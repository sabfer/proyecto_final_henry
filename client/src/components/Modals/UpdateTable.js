import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder, changeStatus } from "../../actions/index";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "../../css/Table";
import { Button } from "../../css";
import { Select } from "../../css/Select";
import {
  Overlay,
  ModalContainer,
  HeaderModal,
  HeaderModalTitle,
  HeaderModalDetails,
  CategoriasPedidos,
  CloseButton,
  FormModal,
  SelectModal,
  InputModal,
  TablesModal,
  TableProductsModal,
  TablePricesModal,
  InputAmount,
  OrderContainer,
} from "../../css/ModalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import FilterProductTypes from "../Settings/components/FilterProductTypes";
import PaymentCheckBox from "./Components/PaymentCheckBox";

export default function UptadeTable({ state, setStateModal, tableNumber }) {
  const token = useSelector((state) => state.userToken);
  const products = useSelector((state) => state.products);
  const ordenes = useSelector((state) => state.orders.salonOrders);
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();

  const orderTableNumber = ordenes
    ? ordenes.find(
        (ord) => ord.tableNumber === tableNumber && ord.estado !== "Finalizada"
      )
    : undefined;

  const [producto, setProducto] = useState({
    name: "",
    amount: "",
    observations: "",
    price: undefined,
  });

  const [ordenActual, setOrdenActual] = useState({
    id: orderTableNumber._id,
    orderNumber: orderTableNumber.orderNumber,
    date: orderTableNumber.date,
    hour: orderTableNumber.hour,
    tableNumber: orderTableNumber.tableNumber,
    products: orderTableNumber.products.map((prod) => {
      return { ...prod };
    }),
    paymentMethod: orderTableNumber.paymentMethod,
    estado: orderTableNumber.estado,
    totalPrice: orderTableNumber.totalPrice,
  });

  //Agregar producto a la orden actual estado local
  function handleSubmitAddProduct(e) {
    e.preventDefault();
    setOrdenActual((prev) => {
      return {
        ...prev,
        products: [...prev.products, producto],
      };
    });
    setOrdenActual((prev) => {
      return {
        ...prev,
        totalPrice: prev.products.reduce(function (prev, actual) {
          return prev + actual.price * actual.amount;
        }, 0),
      };
    });

    setProducto({
      name: "",
      amount: "",
      observations: "",
      price: "",
    });
    document.getElementById("selectProduct").value =
      document.getElementById("inputDefault").value;
  }

  //Estado local product: modifica cantidad o agrega un producto
  function handleChangeProduct(e) {
    if (e.target.name === "amount") {
      setProducto({
        ...producto,
        [e.target.name]: e.target.value,
      });
    } else {
      setProducto({
        ...producto,
        price: products.find((p) => p.name === e.target.value).price,
        [e.target.name]: e.target.value,
      });
    }
  }

  //Modificar cantidad de un producto en la orden de estado local y recalcular precio total //
  function handleInputAmount(e, name) {
    setOrdenActual((prev) => {
      const product = prev.products.find((p) => p.name === name);
      product.amount = e.target.value;
      return {
        ...prev,
      };
    });
    setOrdenActual((prev) => {
      return {
        ...prev,
        totalPrice: prev.products.reduce(function (prev, actual) {
          return prev + actual.price * actual.amount;
        }, 0),
      };
    });
  }

  function handleDelete(name) {
    MySwal.fire({
        title: "¿Estas seguro?",
        text: "¡El producto será borrado de la orden!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1ABD53",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "Cancelar",
        }).then((result) => {
        if (result.isConfirmed) {
          handleDeleteProcut(name);
            MySwal.fire({
            title: "Producto borrado",
            text: "El producto se borró correctamente!",
            icon: "success",
            confirmButtonColor: "#00A0D2",
            });
        }
    });
}

  //Eliminar Producto de la orden en estado local //
  function handleDeleteProcut(name) {
    setOrdenActual((prev) => {
      return {
        ...prev,
        products: prev.products.filter((p) => p.name !== name),
      };
    });
  }

  function handlePaymentInput(e) {
    setOrdenActual((prev) => {
      return {
        ...prev,
        paymentMethod: e.target.name,
      };
    });
  }

  //Update Order, put a DataBase//
  function modifcarOrden(id, payload) {
    MySwal.fire({
      title: "¿Estas seguro?",
      text: "Se modificara el pedido del cliente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1ABD53",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateOrder(id, payload, token));
        MySwal.fire({
          title: "Pedido editado",
          text: "La orden se modifico correctamente.",
          icon: "success",
          confirmButtonColor: "#00A0D2",
        });
        setTimeout(() => {
          setStateModal(!state);
        }, 600);
      }
    });
  }

  //Cerrar Modal //
  function handleClose(e) {
    setStateModal(!state);
    setOrdenActual({
      id: orderTableNumber._id,
      orderNumber: orderTableNumber.orderNumber,
      date: orderTableNumber.date,
      hour: orderTableNumber.hour,
      tableNumber: orderTableNumber.tableNumber,
      products: orderTableNumber.products,
      estado: orderTableNumber.estado,
      totalPrice: orderTableNumber.totalPrice,
    });
  }

  //Cerrar Orden, put a DataBase, cambio estado de mesa en DataBase//
  function handleCloseOrder(id, payload) {
    MySwal.fire({
      title: "¿Estas seguro?",
      text: "Se cerrara el pedido del cliente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1ABD53",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateOrder(id, payload, token));
        dispatch(changeStatus({ isOccupated: false, tableNumber }, token));
        MySwal.fire({
          title: "Pedido cerrado",
          text: "El pedido se cerro correctamente.",
          icon: "success",
          confirmButtonColor: "#00A0D2",
        });
        setStateModal(!state);
      }
    });
  }
  return (
    <div>
      {orderTableNumber && (
        <Overlay display={state ? "flex" : "none"}>
          <ModalContainer>
            <HeaderModal>
              <img src="https://i.imgur.com/0OF9UWi.png" alt="img not found" />
              <HeaderModalTitle>
                <h3>Orden: {ordenActual.orderNumber} </h3>
                <h4>Mesa: {ordenActual.tableNumber} </h4>
              </HeaderModalTitle>
              <HeaderModalDetails>
                <p>Hora de pedido: {ordenActual.hour}</p>
              </HeaderModalDetails>
            </HeaderModal>
            <CloseButton onClick={(e) => handleClose(e)}>
              <FontAwesomeIcon icon={faWindowClose} />
            </CloseButton>
            <OrderContainer>
              <div>
                <CategoriasPedidos>
                  <FilterProductTypes />
                </CategoriasPedidos>
                <SelectModal>
                  <FormModal onSubmit={(e) => handleSubmitAddProduct(e)}>
                    <Select
                      id="selectProduct"
                      width="83%"
                      height="2.4rem"
                      border="solid 1px black"
                      fontWeight="bold"
                      onChange={(e) => handleChangeProduct(e)}
                      name="name"
                    >
                      <option
                        id="inputDefault"
                        value="none"
                        selected
                        disabled
                        hidden
                      >
                        Seleccione un producto
                      </option>
                      {products &&
                        products.map((e) => {
                          return (
                            <option key={e._id} value={e.name}>
                              {" "}
                              {e.name}{" "}
                            </option>
                          );
                        })}
                    </Select>
                    <InputModal>
                      <input
                        type="number"
                        placeholder="Cant."
                        onChange={(e) => handleChangeProduct(e)}
                        name="amount"
                        value={producto.amount}
                      />
                    </InputModal>
                    <Button type="submit" width="8%" buttonColor="#00C72C">
                      <FontAwesomeIcon icon={faCheck} />
                    </Button>
                  </FormModal>
                </SelectModal>
                <Table id="productsTable">
                  <TableHead>
                    <TableRow>
                      <TableHd width="45%">
                        <span className="productName">
                          <p style={{ margin: 0 }}>Nombre</p>
                        </span>
                      </TableHd>
                      <TableHd width="15%">Precio</TableHd>
                      <TableHd width="20%">Cantidad</TableHd>
                      <TableHd width="20%">Option</TableHd>
                    </TableRow>
                  </TableHead>
                  <tbody>
                    {ordenActual &&
                      ordenActual.products.map((product) => {
                        return (
                          <TableRow key={product.name}>
                            <TableData align="center">{product.name}</TableData>
                            <TableData align="center">
                              {product.price}
                            </TableData>
                            <TableData align="center">
                              <input
                                onChange={(e) =>
                                  handleInputAmount(e, product.name)
                                }
                                placeholder={product.amount}
                              />
                            </TableData>
                            <TableData align="center">
                              <div className="options">
                                <Button
                                  onClick={(e) =>
                                    handleDelete(product.name)
                                  }
                                  width="2rem"
                                  height="2rem"
                                  buttonColor="rgba(255, 0, 0, 1)"
                                >
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                  ></FontAwesomeIcon>
                                </Button>
                              </div>
                            </TableData>
                          </TableRow>
                        );
                      })}
                  </tbody>
                </Table>
              </div>
              <div style={{ display: "flex" }}>
                <TablePricesModal>
                  <PaymentCheckBox handlePaymentInput={handlePaymentInput} />
                  <p>Monto Total: ${ordenActual.totalPrice}</p>
                  <Button
                    width="8rem"
                    height="25px"
                    buttonColor="#00C2FF"
                    onClick={() =>
                      handleCloseOrder(ordenActual.id, {
                        products: ordenActual.products,
                        totalPrice: ordenActual.totalPrice,
                        estado: "Finalizada",
                        paymentMethod: ordenActual.paymentMethod,
                      })
                    }
                  >
                    Cerrar
                  </Button>
                </TablePricesModal>
              </div>
            </OrderContainer>

            <Button
              padding="5px"
              margin="15px 0 0 0"
              width="9rem"
              height="2rem"
              onClick={() =>
                modifcarOrden(ordenActual.id, {
                  products: ordenActual.products,
                  totalPrice: ordenActual.totalPrice,
                  estado: ordenActual.estado,
                  paymentMethod: ordenActual.paymentMethod,
                })
              }
            >
              MODIFICAR
            </Button>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
}

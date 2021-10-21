import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postOrder, changeStatus } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faCheck } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import moment from "moment";
import withReactContent from "sweetalert2-react-content";
import { Button } from "../../css";
import {
  OrderContainer,
  Overlay,
  ModalContainer,
  HeaderModal,
  HeaderModalTitle,
  HeaderModalDetails,
  CategoriasPedidos,
  CloseButton,
  SelectModal,
  InputModal,
  FormModal,
  TablesModal,
  TableProductsModal,
  TablePricesModal,
  InputAmount,
} from "../../css/ModalStyles";
import { Select } from "../../css/Select";

import { Table, TableHead, TableData, TableHd, TableRow, Options } from "../../css/Table";
import { faTrash, faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

import FilterProductTypes from "../Settings/components/FilterProductTypes";

export default function ModalSalon({ state, setState }) {
  const token = useSelector((state) => state.userToken);
  const userId = useSelector((state) => state.userId);
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const products = useSelector((state) => state.products);
  const [producto, setProducto] = useState({
    name: "",
    amount: "",
    observations: "",
    price: undefined,
  });

  let currentDate = moment().locale("es").format("DD/MM/YYYY");

  const [order, setOrder] = useState({
    type: "Salon",
    tableNumber: "",
    products: [],
    estado: 1,
    totalPrice: 0,
    date: "",
    hour: "",
    userId: "",
  });

  useEffect(() => {
    setOrder({
      ...order,
      date: moment().locale("es").format("YYYY/MM/DD"),
      hour: moment().format("HH:mm:ss"),
      tableNumber: state.tableNumber,
      userId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function handleClose(e) {
    setState({
      status: false,
      tableNumber: "",
    });
    setOrder({
      type: "Salon",
      tableNumber: "",
      products: [],
      estado: 1,
      totalPrice: 0,
      date: "",
      hour: "",
      userId: "",
    });

    setProducto({
      name: "",
      amount: "",
      observations: "",
      price: "",
    });
  }

  function handleChange(e) {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  }

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

  function handleSubmit(e) {
    e.preventDefault();
    setOrder((prev) => {
      return {
        ...order,
        products: [...prev.products, producto],
      };
    });
    setOrder((prev) => {
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
  }

  function handleInputAmount(e, name) {
    setOrder((prev) => {
      const product = prev.products.find((p) => p.name === name);
      product.amount = e.target.value;
      return {
        ...order,
      };
    });
    setOrder((prev) => {
      return {
        ...prev,
        totalPrice: prev.products.reduce(function (prev, actual) {
          return prev + actual.price * actual.amount;
        }, 0),
      };
    });
  }

  function handlePostOrder(e) {
    dispatch(postOrder(order, token));
    setState(!state);
    dispatch(changeStatus({ isOccupated: true, tableNumber: order.tableNumber }, token));

    setState({
      status: false,
      tableNumber: "",
    });
    dispatch(changeStatus({ isOccupated: true, tableNumber: order.tableNumber }, token));

    setOrder({
      type: "Salon",
      tableNumber: "",
      products: [],
      estado: 1,
      totalPrice: 0,
      date: "",
      hour: "",
      userId: "",
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
        setOrder((prev) => {
          return {
            ...order,
            products: prev.products.filter((p) => p.name !== name),
          };
        });
        setOrder((prev) => {
          return {
            ...prev,
            totalPrice: prev.products.reduce(function (prev, actual) {
              return prev + actual.price * actual.amount;
            }, 0),
          };
        });
        MySwal.fire({
          title: "Producto borrado",
          text: "El producto se borró correctamente!",
          icon: "success",
          confirmButtonColor: "#00A0D2",
        });
      }
    });
  }

  function disminuir() {
    //setProducto(producto.amount+5)
    if (producto.amount >= 2) {
      setProducto({
        ...producto,
        amount: producto.amount - 1,
      });
    }
    console.log(producto.amount);
  }

  function aumentar() {
    var aux = 0;
    if (producto.amount < 30) {
      aux = producto.amount + 1;
      aux = aux - (aux - producto.amount);
      aux = aux + 1;
      setProducto({
        ...producto,
        amount: aux,
      });
    }
  }

  return (
    <div>
      <Overlay display={state.status ? "flex" : "none"}>
        <ModalContainer align="unset" manwidth="945px">
          <HeaderModal>
            <img src="https://i.imgur.com/0OF9UWi.png" alt="img not found" />
            <HeaderModalTitle>
              <h3>
                Mesa:
                {order.tableNumber > 0 ? order.tableNumber : "Ingrese Nª de mesa"}
              </h3>
              {/* <h4>Mozo: Enzo Derviche</h4> */}
            </HeaderModalTitle>
            <HeaderModalDetails>
              <p>Fecha: {currentDate}</p>
              <p>Hora: {order.hour}</p>
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
                <FormModal onSubmit={(e) => handleSubmit(e)}>
                  <InputModal>
                    <input
                      value={order.tableNumber}
                      type="number"
                      name="tableNumber"
                      min="1"
                      max="30"
                      onChange={(e) => handleChange(e)}
                      placeholder="Mesa"
                    />
                  </InputModal>
                  <Select
                    id="selectProduct"
                    width="50%"
                    height="2.4rem"
                    border="solid 1px black"
                    fontWeight="bold"
                    onChange={(e) => handleChangeProduct(e)}
                    name="name"
                  >
                    <option
                      id="inputDefault"
                      // value={-1}
                      value="Seleccione un producto"
                      defaultValue
                      hidden
                    >
                      Seleccione un producto
                    </option>
                    {products &&
                      products.map((e) => {
                        return (
                          <option key={e._id} value={e.name}>
                            {e.name}
                          </option>
                        );
                      })}
                  </Select>

                  <FontAwesomeIcon
                    onClick={() => disminuir()}
                    icon={faMinusCircle}
                    size="2x"
                    style={{ cursor: "pointer" }}
                  ></FontAwesomeIcon>
                  {/* <input type="button" value="-" onClick={disminuir}></input> */}
                  <InputModal>
                    <input
                      type="number"
                      placeholder="Cant."
                      onChange={(e) => handleChangeProduct(e)}
                      name="amount"
                      min="1"
                      max="30"
                      value={producto.amount}
                    />
                  </InputModal>
                  <FontAwesomeIcon
                    onClick={() => aumentar()}
                    icon={faPlusCircle}
                    size="2x"
                    style={{ cursor: "pointer" }}
                  ></FontAwesomeIcon>
                  {/* <input type="button" value="+" onClick={aumentar}></input>   */}
                  <Button type="submit" width="8%" buttonColor="#00C72C">
                    <FontAwesomeIcon icon={faCheck} />
                  </Button>
                </FormModal>
              </SelectModal>

              <TablesModal>
                <TableProductsModal>
                  <Table id="productsTable">
                    <TableHead>
                      <TableRow>
                        <TableHd width="10%">Cant.</TableHd>
                        <TableHd width="60%">Productos</TableHd>
                        <TableHd width="15%">Precio</TableHd>
                        <TableHd width="15%">Opciones</TableHd>
                      </TableRow>
                    </TableHead>
                    <tbody>
                      {order.products.length
                        ? order.products.map((el) => {
                            return (
                              <TableRow key={el.name}>
                                <TableData align="center">
                                  <InputAmount
                                    onChange={(e) => handleInputAmount(e, el.name)}
                                    placeholder={el.amount}
                                  />
                                </TableData>
                                <TableData>{el.name}</TableData>
                                <TableData align="center">$ {el.price}</TableData>
                                <TableData align="center">
                                  <Options justify="center">
                                    <Button
                                      onClick={(e) => handleDelete(el.name)}
                                      width="2rem"
                                      height="2rem"
                                      buttonColor="rgba(255, 0, 0, 1)"
                                    >
                                      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </Button>
                                  </Options>
                                </TableData>
                              </TableRow>
                            );
                          })
                        : null}
                    </tbody>
                  </Table>
                </TableProductsModal>
              </TablesModal>
            </div>
            <div style={{ display: "flex" }}>
              <TablePricesModal>
                <p>Monto Total: ${order.totalPrice}</p>
                <Button width="8rem" height="25px" buttonColor="#00C2FF">
                  Cerrar
                </Button>
              </TablePricesModal>
            </div>
          </OrderContainer>
          <Button
            onClick={(e) => handlePostOrder(e)}
            width="9rem"
            height="2.5rem"
            buttonColor="#00C72C"
            alignself="center"
            margin="1rem 0 0 0"
          >
            Crear Pedido
          </Button>
        </ModalContainer>
      </Overlay>
    </div>
  );
}

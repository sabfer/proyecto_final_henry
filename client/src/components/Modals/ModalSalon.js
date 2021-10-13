import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postOrder, changeStatus } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import moment from "moment";
import withReactContent from "sweetalert2-react-content";
import { Button } from "../../css";
import {
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
} from "./ModalStyles";
import { Select } from "../../css/Select";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "../../css/Table";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import FilterProductTypes from "../Settings/components/FilterProductTypes";

export default function ModalSalon({ state, setState }) {
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const products = useSelector((state) => state.products);
  const [producto, setProducto] = useState({
    name: "",
    amount: "",
    observations: "",
    price: undefined,
  });

  const [order, setOrder] = useState({
    type: "Salon",
    tableNumber: 0,
    products: [],
    estado: "Pendiente",
    totalPrice: 0,
    date: "",
    hour: "",
    // date: moment().locale("es").format("DD/MM/YYYY"),
    // hour: moment().format("h:mm:ss a"),
    /*clientId: 112412,
    userId: 1224125, */
  });

  useEffect(() => {
    setOrder({
      ...order,
      date: moment().locale("es").format("DD/MM/YYYY"),
      hour: moment().format("h:mm:ss a"),
    });
    
  },[])

  function handleClose(e) {
    setState(!state);
    setOrder({
      type: "Salon",
      tableNumber: undefined,
      products: [],
      estado: "Pendiente",
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
    document.getElementById("selectProduct").value =
      document.getElementById("inputDefault").value;
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
    dispatch(
      changeStatus({ isOccupated: true, tableNumber: order.tableNumber }, token)
    );
    setOrder({
      type: "Salon",
      tableNumber: "",
      products: [],
      estado: "En progreso",
      date: "",
      hour: "",
    });
    /* setTimeout(function () {
      dispatch(getSalonOrders({key:'type' , value: "Salon"}));
    }, 1000) */
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

  return (
    <div>
      <Overlay display={state ? "flex" : "none"}>
        <ModalContainer align="unset">
          <HeaderModal>
            <img src="https://i.imgur.com/0OF9UWi.png" alt="img not found" />
            <HeaderModalTitle>
              <h3>Mesa: {order.tableNumber}</h3>
              <h4>Mozo: Enzo Derviche</h4>
            </HeaderModalTitle>
            <HeaderModalDetails>
              <p>Fecha: {order.date}</p>
              <p>Hora: {order.hour}</p>
            </HeaderModalDetails>
          </HeaderModal>
          <CloseButton onClick={(e) => handleClose(e)}>
            <FontAwesomeIcon icon={faWindowClose} />
          </CloseButton>

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
                  onChange={(e) => handleChange(e)}
                  placeholder="Mesa"
                />
              </InputModal>
              <Select
                id="selectProduct"
                width="83%"
                height="2.4rem"
                border="solid 1px black"
                fontWeight="bold"
                onChange={(e) => handleChangeProduct(e)}
                name="name"
              >
                <option id="inputDefault" value="none" selected disabled hidden>
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
                ✓
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
                            <TableData align="center">{el.price}</TableData>
                            <TableData>
                              <div className="options" justify="center">
                                <Button
                                  onClick={(e) => handleDelete(el.name)}
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
                      })
                    : null}
                </tbody>
              </Table>
            </TableProductsModal>
            <TablePricesModal>
              <p>Monto Total: ${order.totalPrice}</p>
              <Button width="8rem" height="25px" buttonColor="#00C2FF">
                Cerrar
              </Button>
            </TablePricesModal>
          </TablesModal>
          <Button
            onClick={(e) => handlePostOrder(e)}
            width="9rem"
            height="2rem"
            buttonColor="#00C72C"
          >
            Crear Pedido
          </Button>
        </ModalContainer>
      </Overlay>
    </div>
  );
}

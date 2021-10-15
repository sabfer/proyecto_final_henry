import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder, getTakeAwayOrders } from "../../actions/index";
import {
    Table,
    TableHead,
    TableData,
    TableHd,
    TableRow,
    Options
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
    TablePricesModal,
    OrderContainer,
} from "../../css/ModalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import FilterProductTypes from "../Settings/components/FilterProductTypes";
import PaymentCheckBox from "./Components/PaymentCheckBox";

export default function UptadeTableTA({ state, setStateModal, orderNumber }) {
    const token = useSelector((state) => state.userToken);
    const ordenes = useSelector((state) => state.orders.takeAwayOrders);
    const products = useSelector((state) => state.products);

    const MySwal = withReactContent(Swal);
    const dispatch = useDispatch();

    const order = ordenes
    ? ordenes.find(
        (ord) => ord.orderNumber === orderNumber && ord.estado !== "Finalizada"
        )
    : undefined;

    const [producto, setProducto] = useState({
        name: "",
        amount: "",
        observations: "",
        price: undefined,
    });

const [ordenActual, setOrdenActual] = useState({
    id: order._id,
    orderNumber: order.orderNumber,
    name: order.name,
    date: order.date,
    hour: order.hour,
    products: order.products.map((prod) => {
        return { ...prod };
    }),
    estado: order.estado,
    paymentMethod: order.paymentMethod,
    totalPrice: order.totalPrice,
});

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
            handleDeleteProduct(name);
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
function handleDeleteProduct(name) {
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
            setTimeout(() => {
                dispatch(getTakeAwayOrders(token));
            }, 600);
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

function handleClose(e) {
    setStateModal(!state);
    setOrdenActual({
        id: order._id,
        orderNumber: order.orderNumber,
        name: order.name,
        date: order.date,
        hour: order.hour,
        products: order.products,
        estado: order.estado,
        totalPrice: order.totalPrice,
    });
}

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
        {order && (
            <Overlay display={state ? "flex" : "none"}>
            <ModalContainer>
                <HeaderModal>
                <img src="https://i.imgur.com/ZyWpO0s.png" alt="img not found" />
                <HeaderModalTitle>
                    <h3>Orden: {ordenActual.orderNumber} </h3>
                    <h4>Cliente: {order.nameClient} </h4>
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
                                <TableData>{product.name}</TableData>
                                <TableData>{product.price}</TableData>
                                <TableData>
                                <input
                                    onChange={(e) =>
                                    handleInputAmount(e, product.name)
                                    }
                                    placeholder={product.amount}
                                />
                                </TableData>
                                <TableData>
                                <Options justify="center">
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
                                </Options>
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
                margin="20px 0 0 0"
                width="14rem"
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
            MODIFICAR ORDEN
            </Button>
            </ModalContainer>
            </Overlay>
        )}
        </div>
    );
}

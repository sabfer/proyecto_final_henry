import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrders,
  orderOrders,
  sortByPrice,
  sortByDate,
} from "../../../../../actions";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Loading } from "../../../../../css";
import {
  SearchBarContainer,
  AjustesDerechaTop,
  ExportExcel,
} from "../../../../../css/SettingStyles";
import SearchOrders from "../components/SearchOrders";
import FilterOrdersTypes from "../components/FilterOrdersTypes";
import NumberOfProducts from "../../../components/NumberOfProduct";
import { Paginado } from "../../../../../css";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "../../../../../css/Table";
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
  faSyncAlt,
  faFileExcel,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function OrdersTable(props) {
  const dispatch = useDispatch();
  const [state, setStateOrder] = useState({
    number: false,
    date: false,
    price: false,
  });

  const token = useSelector((state) => state.userToken);

  const ordersTotal = props.ordenes;

  function handleNumberOrder() {
    setStateOrder((prev) => {
      return {
        ...prev,
        number: !prev.number,
      };
    });
    orderByNumber(ordersTotal, state.number);
    // dispatch(orderOrders(state.number))
  }

  function handleDateOrder() {
    setStateOrder((prev) => {
      return {
        ...prev,
        date: !prev.date,
      };
    });
    orderByDate(ordersTotal, state.date);
    // dispatch(sortByDate(state.date));
  }

  function handleCashOrder() {
    setStateOrder((prev) => {
      return {
        ...prev,
        price: !prev.price,
      };
    });
    orderByPrice(ordersTotal, state.price);
    // dispatch(sortByPrice(state.price));
  }

  //BOTON RESTABLECER PÁGINA
  function handleButton(e) {
    dispatch(getOrders(token));
  }

  //PAGINADO
  const productPerPag = 20;
  var cantPaginas = 0;
  if (ordersTotal) {
    cantPaginas = Math.ceil(ordersTotal.length / productPerPag);
  }
  const [currentPage, setCurrentPage] = useState(0);
  const [pagAct, setPagAct] = useState(1);
  const getFilter = () => {
    return ordersTotal.slice(currentPage, currentPage + productPerPag);
  };
  const handlePrev = () => {
    if (pagAct > 1) {
      setCurrentPage(currentPage - productPerPag);
      setPagAct(pagAct - 1);
    }
  };
  const handleNext = () => {
    if (pagAct >= 1 && pagAct < cantPaginas) {
      setCurrentPage(currentPage + productPerPag);
      setPagAct(pagAct + 1);
    }
  };

  return (
    <div>
      <AjustesDerechaTop>
        <h1>{props.title}</h1>
      </AjustesDerechaTop>
      <SearchBarContainer>
        <SearchOrders />
        <FilterOrdersTypes />
        <Button
          width="12rem"
          padding="0.8rem"
          justify="space-between"
          buttonColor="rgb(21, 151, 67)"
          type="button"
          onClick={(e) => {
            handleButton(e);
          }}
        >
          Restablecer
          <FontAwesomeIcon icon={faSyncAlt}></FontAwesomeIcon>
        </Button>
      </SearchBarContainer>

      {Array.isArray(ordersTotal) ? (
        <div>
          <Table id="ordersTable">
            <TableHead>
              <TableRow>
                <TableHd width="10%">
                  <span className="productName">
                    <p style={{ margin: 0 }}>N° Orden</p>
                    <FontAwesomeIcon
                      onClick={handleNumberOrder}
                      color={state.number ? "#FF846A" : "#A2DFFF"}
                      icon={state.number ? faAngleDoubleUp : faAngleDoubleDown}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    ></FontAwesomeIcon>
                  </span>
                </TableHd>
                <TableHd width="10%">
                  <span className="productName">
                    <p style={{ margin: 0 }}>Fecha</p>
                    <FontAwesomeIcon
                      onClick={handleDateOrder}
                      color={state.date ? "#FF846A" : "#A2DFFF"}
                      icon={state.date ? faAngleDoubleUp : faAngleDoubleDown}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    ></FontAwesomeIcon>
                  </span>
                </TableHd>
                <TableHd width="10%">
                  <p>Hora</p>
                </TableHd>
                <TableHd width="20%">
                  <p>Tipo</p>
                </TableHd>
                <TableHd width="20%">
                  <p>Nombre Cliente</p>
                </TableHd>
                <TableHd width="20%">
                  <p>Productos</p>
                </TableHd>
                <TableHd width="10%">
                  <span className="productName">
                    <p style={{ margin: 0 }}>Ingreso</p>
                    <FontAwesomeIcon
                      onClick={handleCashOrder}
                      color={state.price ? "#FF846A" : "#A2DFFF"}
                      icon={state.price ? faAngleDoubleUp : faAngleDoubleDown}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    ></FontAwesomeIcon>
                  </span>
                </TableHd>
              </TableRow>
            </TableHead>
            <tbody>
              {getFilter().map((el) => {
                return (
                  <TableRow key={el._id}>
                    <TableData>{el.orderNumber}</TableData>
                    <TableData>
                      {el.date
                        .split("/")
                        .reverse()
                        .toString()
                        .replaceAll(",", "/")}
                    </TableData>
                    <TableData>{el.hour}</TableData>
                    <TableData>{el.type}</TableData>
                    <TableData>
                      {el.nameClient ? el.nameClient : "--"}
                    </TableData>
                    <TableData>
                      {el.products
                        .map((e) => e.name)
                        .toString()
                        .replaceAll(",", ", ")}
                    </TableData>
                    <TableData>
                      ${" "}
                      {new Intl.NumberFormat()
                        .format(el.totalPrice)
                        .replaceAll(",", ".") + ",00"}
                    </TableData>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : (
        <Loading>
          <p>Loading...</p>
          <img
            src="https://i.imgur.com/5JQ02CS.gif"
            alt="loading gif"
            width="100px"
          />
        </Loading>
      )}

      <ExportExcel>
        <NumberOfProducts
          cantidad=" ordenes cargadas exitosamente"
          total={ordersTotal.length}
        />
        <Button width="2.5rem" height="2.5rem" buttonColor="rgb(14, 116, 59)">
          <FontAwesomeIcon icon={faFileExcel} size="lg">
            <ReactHTMLTableToExcel
              id="botonExportarProd"
              table="productsTable"
              className="Excel"
              filename="Productos_cargados_en_el_sistema"
              sheet="Productos"
            />
          </FontAwesomeIcon>
        </Button>
      </ExportExcel>

      <Paginado>
        <FontAwesomeIcon
          onClick={() => handlePrev()}
          icon={faAngleDoubleLeft}
          size="lg"
          style={{ cursor: "pointer" }}
        ></FontAwesomeIcon>
        <span> </span>
        <span>
          {pagAct} de {cantPaginas}
        </span>
        <span> </span>
        <FontAwesomeIcon
          onClick={() => handleNext()}
          icon={faAngleDoubleRight}
          size="lg"
          style={{ cursor: "pointer" }}
        ></FontAwesomeIcon>
      </Paginado>
    </div>
  );
}

function orderByNumber(orders, payload) {
  payload
    ? (orders = orders.sort((a, b) => b.orderNumber - a.orderNumber))
    : (orders = orders.sort((a, b) => a.orderNumber - b.orderNumber));
}

function orderByDate(orders, payload) {
  payload
    ? (orders = orders.sort(
        (a, b) => b.date.replaceAll("/", "") - a.date.replaceAll("/", "")
      ))
    : (orders = orders.sort(
        (a, b) => a.date.replaceAll("/", "") - b.date.replaceAll("/", "")
      ));
}

function orderByPrice(orders, payload) {
  payload
    ? (orders = orders.sort((a, b) => b.totalPrice - a.totalPrice))
    : (orders = orders.sort((a, b) => a.totalPrice - b.totalPrice));
}

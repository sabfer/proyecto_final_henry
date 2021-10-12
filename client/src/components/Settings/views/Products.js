import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct, orderTheProducts } from "../../../actions";
//------------------------------------------\\
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//------------------------------------------\\
import { Button, Loading } from "../../../css";
import {
  SearchBarContainer,
  AjustesDerechaTop,
} from "../../../css/SettingStyles";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "../../../css/Table";
import {
  faPenSquare,
  faTrash,
  faSortAlphaDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Modals/Modal";
import Search from "../components/Search";
import FilterProductTypes from "../components/FilterProductTypes";
import NumberOfProducts from "../components/NumberOfProduct";
import ExcelToJson from "../components/ImportExcel";

import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

export default function Productos() {
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [newProductModal, setNewProductModal] = useState(false);
  const [editProductModal, setEditProductModal] = useState(false);
  const [order, setOrder] = useState(false);
  const [inputModalProduct, setInputModalProduct] = useState({
    _id: "",
    name: "",
    price: "",
    productType: "",
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProducts());
    }, 1000);
  }, [dispatch]);

  function handleDelete(e) {
    MySwal.fire({
      title: "¿Estas seguro?",
      text: "¡El producto será borrado de la base de datos!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1ABD53",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(e));
        setTimeout(() => {
          dispatch(getProducts());
        }, 300);
        MySwal.fire({
          title: "Producto borrado",
          text: "El producto se borró correctamente.",
          icon: "success",
          confirmButtonColor: "#00A0D2",
        });
      }
    });
  }

  function handleClick(e, props) {
    e.preventDefault();
    setInputModalProduct({
      _id: props._id,
      name: props.name,
      price: props.price,
      productType: props.productType,
    });
    setEditProductModal(!editProductModal);
  }

  function handleOrder(e) {
    setOrder(!order);
    dispatch(orderTheProducts(order));
  }

  function handleButton(e) {
    dispatch(getProducts());
  }

  return (
    <div>
      <NumberOfProducts />
      <div align="center">
        <ExcelToJson/>
        <ReactHTMLTableToExcel
          id="botonExportarProd"
          className="btnExport"
          table="productsTable"
          filename="Productos_cargados_en_el_sistema"
          sheet="Productos"
          buttonText="Export to Excel"
        />
      </div>
      <table id="table-to-xls"></table>
      <AjustesDerechaTop>
        <h1>Productos</h1>
        <Button
          onClick={() => setNewProductModal(!newProductModal)}
          width="12.5rem"
          justify="space-between"
          padding="0.625rem"
          buttonColor="rgb(2, 101, 210)"
        >
          Añadir producto
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </Button>

        <Button
          width="10rem"
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
      </AjustesDerechaTop>
      <SearchBarContainer>
        <Search />
        <FilterProductTypes />
        <Modal
          id={3}
          state={newProductModal}
          setStateModal={setNewProductModal}
          title="Crear un Producto"
          label1="Nombre"
          label2="Descripción"
          label3="Precio"
          label4="Tipo de Producto"
          modalContainerBox={true}
          showInSettings={true}
        />
      </SearchBarContainer>

      {Array.isArray(products) ? (
        <div>
          <Table id="productsTable">
            <TableHead>
              <TableRow>
                <TableHd width="40%">
                  <span className="productName">
                    <p style={{ margin: 0 }}>Nombre</p>
                    <FontAwesomeIcon
                      onClick={(e) => handleOrder(e)}
                      color={order ? "#FF846A" : "#A2DFFF"}
                      icon={faSortAlphaDown}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    ></FontAwesomeIcon>
                  </span>
                </TableHd>
                <TableHd width="40%">Tipo de producto</TableHd>
                <TableHd width="10%">Precio</TableHd>
                <TableHd width="10%">Opciones</TableHd>
              </TableRow>
            </TableHead>
            <tbody>
              {products.map((el) => {
                return (
                  <TableRow key={el._id}>
                    <TableData>{el.name}</TableData>
                    <TableData>{el.productType}</TableData>
                    <TableData>$ {el.price}</TableData>
                    <TableData>
                      <div className="options">
                        <Button
                          onClick={(e) =>
                            handleClick(e, {
                              name: el.name,
                              price: el.price,
                              productType: el.productType,
                              _id: el._id,
                            })
                          }
                          width="2rem"
                          height="2rem"
                          buttonColor="rgb(2, 101, 210)"
                        >
                          <FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon>
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

      <Modal
        idElement={inputModalProduct._id}
        id={7}
        state={editProductModal}
        setStateModal={setEditProductModal}
        title="Modificar Producto"
        label1="Nombre"
        label2="Precio"
        label3="Tipo de Producto"
        name={inputModalProduct.name}
        price={inputModalProduct.price}
        productType={inputModalProduct.productType}
        modalContainerBox={true}
      />
    </div>
  );
}

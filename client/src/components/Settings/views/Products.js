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
  ExportExcel,
} from "../../../css/SettingStyles";
import Modal from "../../Modals/Modal";
import Search from "../components/Search";
import FilterProductTypes from "../components/FilterProductTypes";
import NumberOfProducts from "../components/NumberOfProduct";
import { Paginado } from "../../../css";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
  Options,
} from "../../../css/Table";
import {
  faPenSquare,
  faTrash,
  faSortAlphaDown,
  faPlus,
  faSyncAlt,
  faFileExcel,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Productos() {
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const token = useSelector((state) => state.userToken);
  const products = useSelector((state) => state.products);

  const categories = useSelector((state) => state.productTypes);
  const products2 = useSelector((state) => state.products);

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
      dispatch(getProducts(token));
    }, 1000);
  }, [dispatch, token]);

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
        dispatch(deleteProduct(e, token));
        setTimeout(() => {
          dispatch(getProducts(token));
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
    dispatch(getProducts(token));
  }

  const productPerPag = 10;
  var cantPaginas = 0;
  if (products2) {
    cantPaginas = Math.ceil(products2.length / productPerPag);
  }
  const [currentPage, setCurrentPage] = useState(0);
  const [pagAct, setPagAct] = useState(1);
  const getFilter = () => {
    return products2.slice(currentPage, currentPage + productPerPag);
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
      </AjustesDerechaTop>
      <SearchBarContainer>
        <Search />
        <FilterProductTypes />
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
          categories={categories}
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
              {/* {products.map((el) => { */}
              {getFilter().map((el) => {
                return (
                  <TableRow key={el._id}>
                    <TableData>{el.name}</TableData>
                    <TableData>{el.productType}</TableData>
                    <TableData>$ {el.price}</TableData>
                    <TableData>
                      <Options justify="space-between">
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
                      </Options>
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
          <img src="https://i.imgur.com/5JQ02CS.gif" alt="loading gif" width="100px" />
        </Loading>
      )}


      <ExportExcel>
        <NumberOfProducts />
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

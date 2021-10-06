import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getProducts, deleteProduct } from "../../../actions";
import Modal from "../../Modals/Modal";
import Search from "./Search";
import FilterProductTypes from "./FilterProductTypes";
import { Button } from "../../../css";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "../../../css/Table";
import { Loading } from "../../../css/SettingStyles";
import {
  faPenSquare,
  faTrash,
  faSortAlphaDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Productos() {
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);
  const [newProductModal, setNewProductModal] = useState(false);
  const [editProductModal, setEditProductModal] = useState(false);
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

  return (
    <div>
      <h1>Productos</h1>
      <Search />
      <FilterProductTypes />
      <Button
        onClick={() => setNewProductModal(!newProductModal)}
        width="11.9rem"
        justify="space-between"
        padding="0.625rem"
        buttonColor="rgb(204, 0, 0)"
      >
        <FontAwesomeIcon icon={faPlus} size="lg" />
        Crear producto
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
      />
      {Array.isArray(products) ? (
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableHd width="35%">
                  <span className="productName">
                    <p style={{ margin: 0 }}>Nombre</p>
                    <FontAwesomeIcon
                      icon={faSortAlphaDown}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    ></FontAwesomeIcon>
                  </span>
                </TableHd>
                <TableHd width="40%">Tipo de producto</TableHd>
                <TableHd width="10%">Precio</TableHd>
                <TableHd>Opciones</TableHd>
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
                      <div>
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
                          buttonColor="rgba(0, 163, 255, 1)"
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

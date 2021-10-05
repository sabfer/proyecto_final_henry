import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import Table from "./Table"; */
import { getProducts } from "../../../actions";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "../../../css/Table";
import { Button } from "../../../css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteProduct } from "../../../actions";
import Modal from "../../Modals/Modal";

import Search from "./Search";

export default function Productos() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [editProductModal, setEditProductModal] = useState(false);
  const [modalProduct, setmodalProduct] = useState({
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
    if (
      window.confirm(
        "¿Estás seguro de querer eliminar el producto seleccionado?"
      )
    ) {
      dispatch(deleteProduct(e));
      setTimeout(() => {
        dispatch(getProducts());
      }, 1000);
    }
  }

  function handleClick(e, props) {
    alert("soy yo")
    setmodalProduct({
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
      {/* <Table data={products}></Table> */}
      <Search />
      {Array.isArray(products) ? (
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableHd width="35%">Nombre</TableHd>
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
        <p>Loading...</p>
      )}

      <Modal
        idElement={modalProduct._id}
        id={7}
        state={editProductModal}
        setStateModal={setEditProductModal}
        title="Modificar Producto"
        label1="Nombre"
        label2="Precio"
        label3="Tipo de Producto"
        name={modalProduct.name}
        price={modalProduct.price}
        productType={modalProduct.productType}
        modalContainerBox={true}
      />
    </div>
  );
}

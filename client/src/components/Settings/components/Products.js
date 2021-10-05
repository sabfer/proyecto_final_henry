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
import Modal from "../../Home/Modal";
import Search from "./Search";

export default function Productos() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [stateModal7, setStateModal7] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProducts());
    }, 1000);
  }, [dispatch]);

  return (
    <div>
      <h1>Productos</h1>
      {/* <Table data={products}></Table> */}
      <Search />
      {Array.isArray(products) ? (
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
                  <TableData>{el.price}</TableData>
                  <TableData>
                    <div>
                      <Button
                        onClick={(e) => setStateModal7(!stateModal7)}
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
                  <Modal
                    id={7}
                    state={stateModal7}
                    setStateModal={setStateModal7}
                    title="Modificar Producto"
                    label1="Nombre"
                    placeHolder1={el.name}
                    label2="Precio"
                    placeHolder2={el.price}
                    label3="Tipo de Producto"
                    placeHolder3={el.productType}
                    modalContainerBox={true}
                  />
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, deleteCategory } from "../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Loading } from "../../../css";
import { AjustesDerechaTop } from "../../../css/SettingStyles";
import { Table, TableHead, TableData, TableHd, TableRow, Options } from "../../../css/Table";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Modal from "../../Modals/Modal";

export default function Categorias() {
  const token = useSelector((state) => state.userToken);
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const productTypes = useSelector((state) => state.productTypes);
  const [newCategory, setNewCategory] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCategories(token));
    }, 1000);
  }, [dispatch, token]);

  function handleDelete(id) {
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
            dispatch(deleteCategory(id));
            setTimeout(() => {
              dispatch(getCategories(token))
            }, 500)
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
      <AjustesDerechaTop>
        <h1>Categorías</h1>
        <Button
          onClick={() => setNewCategory(!newCategory)}
          width="13.5rem"
          justify="space-between"
          padding="0.625rem"
          buttonColor="rgb(2, 101, 210)"
        >
          Añadir categoría
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </Button>
      </AjustesDerechaTop>
      {productTypes &&
      productTypes.hasOwnProperty("categories") &&
      productTypes.categories === null ? (
        <p>Todavía no has creado categorias</p>
      ) : Array.isArray(productTypes) ? (
        <div>
          <Table id="productsTable">
            <TableHead>
              <TableRow>
                <TableHd width="87%">
                  <p style={{ margin: 0 }}>Nombre de la categoría</p>
                </TableHd>
                <TableHd width="8%">
                  <p style={{ margin: 0 }}>Opciones</p>
                </TableHd>
              </TableRow>
            </TableHead>
            <tbody>
              {productTypes.map((el) => {
                return (
                  <TableRow key={el._id}>
                    <TableData>{el.name}</TableData>
                    <TableData align="center">
                                <Options justify="center">
                                    <Button
                                    onClick={(e) =>
                                        handleDelete(el._id)
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
      ) : (
        <Loading>
          <p>Loading...</p>
          <img src="https://i.imgur.com/5JQ02CS.gif" alt="loading gif" width="100px" />
        </Loading>
      )}

      <Modal
        id={8}
        state={newCategory}
        setStateModal={setNewCategory}
        title="Crear un categoría"
        label1="Nombre"
        modalContainerBox={true}
      />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../actions";
//------------------------------------------\\
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//------------------------------------------\\
import { Button, Loading } from "../../../css";
import { AjustesDerechaTop } from "../../../css/SettingStyles";
import { Table, TableHead, TableData, TableHd, TableRow } from "../../../css/Table";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Modals/Modal";

export default function Productos() {
  const dispatch = useDispatch();
  const productTypes = useSelector((state) => state.productTypes);
  const [newCategory, setNewCategory] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCategories());
    }, 1000);
  }, [dispatch]);

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
                <TableHd width="100%">
                  <p style={{ margin: 0 }}>Nombre de la categoría</p>
                </TableHd>
              </TableRow>
            </TableHead>
            <tbody>
              {productTypes.map((el) => {
                return (
                  <TableRow key={el._id}>
                    <TableData>{el.name}</TableData>
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

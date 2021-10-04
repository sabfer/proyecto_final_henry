import React, { useEffect } from "react";
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

import MOCK_DATA from "./MOCK_DATA.json";
import Search from "./Search";

export default function Productos() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProducts());
    }, 1000);
  }, [dispatch]);

  return (
    <div>
      <h1>Productos</h1>
      {/* <Table data={products}></Table> */}
      <Search/>
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
                <TableRow>
                  <TableData>{el.name}</TableData>
                  <TableData>{el.productType}</TableData>
                  <TableData>{el.price}</TableData>
                  <TableData>
                    <div>
                      <Button
                        width="2rem"
                        height="2rem"
                        buttonColor="rgba(0, 163, 255, 1)"
                      >
                        <FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon>
                      </Button>
                      <Button
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

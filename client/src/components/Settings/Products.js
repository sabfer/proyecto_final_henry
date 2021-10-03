import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "./SettingStyles";

export default function Productos() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Productos</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableHd>Nombre</TableHd>
            <TableHd>Tipo de producto</TableHd>
            <TableHd>Precio</TableHd>
            <TableHd>Opciones</TableHd>
          </TableRow>
        </TableHead>
        <tbody>
          {Array.isArray(products) ? (
            products[0] ? (
              products.map((el) => {
                return (
                  <TableRow>
                    <TableData>{el.name}</TableData>
                    <TableData>{el.productType}</TableData>
                    <TableData>{el.price}</TableData>
                    <TableData>Opciones</TableData>
                  </TableRow>
                );
              })
            ) : (
              <p>Loading...</p>
            )
          ) : (
            <span></span>
          )}
        </tbody>
      </Table>
    </div>
  );
}

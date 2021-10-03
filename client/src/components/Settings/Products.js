import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getNameProducts } from "../../actions";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "./SettingStyles";
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
      <Search/>
      {Array.isArray(products) ? (
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
            {products.map((el) => {
              return (
                <TableRow>
                  <TableData>{el.name}</TableData>
                  <TableData>{el.productType}</TableData>
                  <TableData>{el.price}</TableData>
                  <TableData>Opciones</TableData>
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

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../../../actions";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../../../css";
import { ExportExcel } from "../../../../../css/SettingStyles";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "../../../../../css/Table";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

export default function OrdersTable() {
  return (
    <div>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableHd width="10%">
                <p style={{ margin: 0 }}>uno</p>
              </TableHd>
              <TableHd width="10%">
                <p style={{ margin: 0 }}>dos</p>
              </TableHd>
              <TableHd width="10%">
                <p style={{ margin: 0 }}>tres</p>
              </TableHd>
            </TableRow>
          </TableHead>
          <tbody>
            <TableData>1</TableData>
            <TableData>2</TableData>
            <TableData>3</TableData>)
          </tbody>
        </Table>
      </div>
      <ExportExcel>
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

      <span> </span>
    </div>
  );
}

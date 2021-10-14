import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommerces, updateCommerce, deleteCommerce } from "../../../actions";
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
import Modal from "../../Modals/Modal";

export default function Commerces() {
  const dispatch = useDispatch();
  const commerces = useSelector((state) => state.commerces);
  const [stateModal7, setStateModal7] = useState(false);

  function handleDelete(e) {
    if (
      window.confirm(
        "¿Estás seguro de querer eliminar el comercio seleccionado?"
      )
    ) {
      dispatch(deleteCommerce(e));
      setTimeout(() => {
        dispatch(getCommerces());
      }, 100);
    }
  }

  /* function handleUpdate(e) {
    dispatch(updateCommerce(e));
  } */

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCommerces());
    }, 1000);
  }, [dispatch]);

  return (
    <div>
      <h1>Comercios</h1>
      {Array.isArray(commerces) ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableHd width="42%">Nombre</TableHd>
              <TableHd width="43%">Direccion</TableHd>
              <TableHd>Opciones</TableHd>
            </TableRow>
          </TableHead>
          <tbody>
            {commerces.map((el) => {
              return (
                <TableRow key={el._id}>
                  <TableData>{el.name}</TableData>
                  <TableData>{el.direction}</TableData>
                  <TableData>
                    <div>
                      <Button
                        // onClick={(e) => handleUpdate(el._id)}
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
                    title="Modificar Comercio"
                    label1="Nombre"
                    placeHolder1={el.name}
                    label2="Direction"
                    placeHolder2={el.direction}
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

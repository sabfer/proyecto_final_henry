import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateUsers, deleteUser } from "../../../actions";
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

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [stateModal7, setStateModal7] = useState(false);

  function handleDelete(e) {
    if (
      window.confirm(
        "¿Estás seguro de querer eliminar el usuario seleccionado?"
      )
    ) {
      dispatch(deleteUser(e));
      setTimeout(() => {
        dispatch(getUsers());
      }, 100);
    }
  }

  function handleUpdate(e) {
    dispatch(updateUsers(e));
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUsers());
    }, 1000);
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      {Array.isArray(users) ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableHd width="35%">Email</TableHd>
              <TableHd width="45%">Password</TableHd>
              <TableHd>Opciones</TableHd>
            </TableRow>
          </TableHead>
          <tbody>
            {users.map((el) => {
              return (
                <TableRow key={el._id}>
                  <TableData>{el.email}</TableData>
                  <TableData>{el.password}</TableData>
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
                    title="Modificar Usuario"
                    label1="Email"
                    placeHolder1={el.email}
                    label2="Password"
                    placeHolder2={el.password}
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

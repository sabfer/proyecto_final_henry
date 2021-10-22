import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  getUserId,
  updateSettings,
  getMesas,
  postMesas,
  deleteMesas,
} from "../../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarker, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Inputs, InputContainers } from "../../../css/LandingStyles";

export default function Generales() {
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const id = useSelector((state) => state.userId);
  const email = useSelector((state) => state.userEmail);
  const name = useSelector((state) => state.userName);
  const tables = useSelector((state) => state.mesas);
  /* const waiters = useSelector((state) => state.waiters); */
  const expirationTime = useSelector((state) => state.expSession);

  //console.log(tables);

  if (token && (!id || !email || !name || !expirationTime)) {
    dispatch(getUserId(token));
  }

  const [input, setInput] = useState({
    id: id || "",
    name: name || "",
    expirationTime: expirationTime || "",
  });

  const [inputMesas, setInputMesas] = useState({
    tableDelete: "",
    tableAdd: "",
  });

  useEffect(() => {
    dispatch(getMesas(token));
    setInput({
      id: id,
      name: name,
      expirationTime: expirationTime,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id, name, expirationTime]);

  function mesasOnChange(e) {
    setInputMesas({
      ...inputMesas,
      [e.target.name]: e.target.value,
    });
  }

  //console.log(inputMesas);

  function handleMesas(e) {
    e.preventDefault();
    let mesa = tables.find((table) => {
      return table.tableNumber === parseInt(inputMesas.tableAdd);
    });
    if (mesa) {
      if (mesa.tableNumber === parseInt(inputMesas.tableAdd)) {
        MySwal.fire({
          title: "Esa mesa ya existe",
          text: "No se realizó ninguna modificación",
          icon: "info",
          confirmButtonColor: "#1ABD53",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            setInputMesas({
              tableAdd: "",
            });
          }
        });
      }
    } else {
      MySwal.fire({
        title: "Mesa agregada",
        text: "¡Se agrego la mesa de forma correcta!",
        icon: "success",
        confirmButtonColor: "#1ABD53",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(postMesas(token, parseInt(inputMesas.tableAdd)));
          setInputMesas({
            tableAdd: "",
          });
          setTimeout(() => {
            dispatch(getMesas(token));
          }, 300);
        }
      });
    }
  }

  function deleteMesa(e) {
    let mesa = tables.find((mesa) => {
      return mesa.tableNumber === parseInt(inputMesas.tableDelete);
    });
    MySwal.fire({
      title: "¿Estas seguro?",
      text: "¡Se elimará esta mesa del restaurante!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1ABD53",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(mesa._id);
        dispatch(deleteMesas(token, mesa._id));
        setInputMesas({
          tableDelete: "",
        });
        setTimeout(() => {
          dispatch(getMesas(token));
        }, 300);
        MySwal.fire({
          title: "Eliminación exitosa",
          text: "Valores actualizados correctamente.",
          icon: "success",
          confirmButtonColor: "#00A0D2",
        });
      }
    });
  }

  // console.log(inputMesas);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick(e) {
    e.preventDefault();
    MySwal.fire({
      title: "¿Estas seguro?",
      text: "¡Se modificarán los valores cambiados!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1ABD53",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateSettings(token, input));
        MySwal.fire({
          title: "Actualizacón exitosa",
          text: "Valores actualizados correctamente.",
          icon: "success",
          confirmButtonColor: "#00A0D2",
        });
      }
    });
  }

  return (
    <div>
      <h1>Generales</h1>
      <div>
        <InputContainers align="flex-start">
          <h2>Email:</h2>
          <Inputs
            width="50%"
            bgcolor="rgba(0,0,0,0.1)"
            color="#000"
            border="2px solid #000"
            type="text"
            // name="email"
            // onChange={(e) => handleChange(e)}
            disabled
            defaultValue={email}
          />
        </InputContainers>
      </div>
      <div>
        <InputContainers align="flex-start">
          <h2>Nombre de usuario:</h2>
          <Inputs
            width="50%"
            bgcolor="white"
            color="#000"
            border="2px solid #000"
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            defaultValue={input.name ?? name}
          />
        </InputContainers>
      </div>
      <div>
        <InputContainers align="flex-start">
          <h2>Tiempo de expiración de sesión:</h2>
          <Inputs
            width="50%"
            bgcolor="white"
            color="#000"
            border="2px solid #000"
            type="text"
            name="expirationTime"
            onChange={(e) => handleChange(e)}
            defaultValue={input.expirationTime ?? expirationTime}
          />
        </InputContainers>
      </div>
      <Button
        justify="space-between"
        display="flex"
        width="12rem"
        padding="1.4rem 1rem"
        height="2rem"
        buttonColor="rgb(2, 101, 210)"
        onClick={(e) => handleClick(e)}
      >
        Actualizar datos
        <FontAwesomeIcon icon={faMarker}></FontAwesomeIcon>
      </Button>
      <div>
        <InputContainers align="flex-start">
          <h2>Cantidad de mesas:</h2>
          <Inputs
            width="50%"
            bgcolor="rgba(0,0,0,0.1)"
            color="#000"
            border="2px solid #000"
            type="text"
            disabled
            defaultValue={tables && tables.length + " mesas"}
          />
        </InputContainers>
      </div>
      <div>
        <h2>Agregar mesa</h2>
        <InputContainers flexdirection="row">
          <Inputs
            placeholder="Ingresa el número de mesa"
            width="50%"
            bgcolor="white"
            color="#000"
            border="2px solid #000"
            type="text"
            name="tableAdd"
            value={inputMesas.tableAdd}
            onChange={(e) => mesasOnChange(e)}
          />
          <Button
            marginLeft="1rem"
            justify="space-between"
            display="flex"
            width="11rem"
            padding="1.3rem"
            height="2rem"
            buttonColor="rgb(2, 101, 210)"
            onClick={(e) => handleMesas(e)}
          >
            Añadir mesa
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        </InputContainers>
      </div>
      <div>
        <h2>Eliminar mesa</h2>
        <InputContainers flexdirection="row">
          <Inputs
            placeholder="Ingresa el número de mesa"
            width="50%"
            bgcolor="white"
            color="#000"
            border="2px solid #000"
            type="text"
            name="tableDelete"
            value={inputMesas.tableDelete}
            onChange={(e) => mesasOnChange(e)}
          />
          <Button
            marginLeft="1rem"
            justify="space-between"
            display="flex"
            width="11rem"
            padding="1.3rem"
            height="2rem"
            buttonColor="rgb(255, 93, 90)"
            onClick={(e) => deleteMesa(e)}
          >
            Eliminar mesa
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        </InputContainers>
      </div>
    </div>
  );
}

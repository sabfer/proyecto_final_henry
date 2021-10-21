import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../css";
import { LeyendaError, Label, InputContainer } from "../../../css/StyleForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getUserId, updateSettings } from "../../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarker } from "@fortawesome/free-solid-svg-icons";
import { Inputs } from "../../../css/LandingStyles";

export default function Generales() {
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const id = useSelector((state) => state.userId);
  const email = useSelector((state) => state.userEmail);
  const name = useSelector((state) => state.userName);
  const tables = useSelector((state) => state.userMesas);
  const waiters = useSelector((state) => state.waiters);
  const expirationTime = useSelector((state) => state.expSession);

  if (token && (!id || !email || !name || !expirationTime)) {
    dispatch(getUserId(token));
  }

  const [input, setInput] = useState({
    id: id,
    name: name,
    expirationTime: expirationTime,
  });

  useEffect(() => {
    setInput({
      id: id,
      name: name,
      expirationTime: expirationTime,
    });
  }, [id, name, expirationTime]);

  console.log(
    id ?? "sin id",
    email ?? "sin email",
    name ?? "sin nombre",
    tables?.length ?? "sin mesas",
    waiters ?? "sin mozos",
    expirationTime ?? "sin t. exp"
  );

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.name, e.target.value)
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
        // setTimeout(() => {
        //   dispatch(getProducts(token));
        // }, 300);
        MySwal.fire({
          title: "Actualizacón exitosa",
          text: "Valores actualizados correctaente.",
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
        <InputContainer>
          <h2>Email:</h2>
          <Inputs
            width="50%"
            bgcolor="rgba(0,0,0,0.1)"
            color="#000"
            border="2px solid #000"
            type="text"
            name="name"
            leyenda="texto"
            onChange={(e) => handleChange(e)}
            disabled={true}
            value={email}
          />
        </InputContainer>
      </div>
      <div>
        <InputContainer>
          <h2>Nombre de usuario:</h2>
          <Inputs
            width="50%"
            bgcolor="white"
            color="#000"
            border="2px solid #000"
            type="text"
            name="name"
            leyenda="texto"
            onChange={(e) => handleChange(e)}
            value={input.name ?? name}
          />
        </InputContainer>
      </div>
      <div>
        <InputContainer>
          <h2>Tiempo de expiración de sesión:</h2>
          <Inputs
            width="50%"
            bgcolor="white"
            color="#000"
            border="2px solid #000"
            type="text"
            name="expirationTime"
            leyenda="texto"
            onChange={(e) => handleChange(e)}
            value={input.expirationTime ?? expirationTime}
          />
        </InputContainer>
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
    </div>
  );
}

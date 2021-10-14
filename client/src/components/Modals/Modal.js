import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../css";
import { Overlay, ModalContainer, HeaderModal, CloseButton } from "../../css/ModalStyles";
import {
  postProduct,
  updateProduct,
  postCommerce,
  getProducts,
  postCategories,
  getCategories,
} from "../../actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { conditionalForm } from "./Forms";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Modal({
  state,
  setStateModal,
  title,
  label1,
  label2,
  label3,
  label4,
  modalContainerBox,
  id,
  name,
  price,
  productType,
  user,
  pass,
  location,
  idElement,
  showInSettings,
}) {
  const token = useSelector((state) => state.userToken);
  const categories = useSelector((state) => state.productTypes);
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "" || name,
    price: "" || price,
    productType: "" || productType,
    user: user,
    pass: pass,
    location: "",
    description: "",
    orderD: "",
    orderTA: "",
  });

  const [inpValido, setInputvalido] = useState({
    name: "",
    price: "",
    user: "",
    pass: "",
    location: "",
    productType: "",
  });

  const expresiones = {
    name: /^[a-zA-Z0-9_\\-\u00f1\u00d1\u00C0-\u017F]{3,32}\s?/,
    user: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    pass: /^[a-zA-Z0-9_\\-\u00f1\u00d1\u00C0-\u017F]{5,32}$/,
    productType: /^[a-zA-Z0-9_\\-\s\u00f1\u00d1\u00C0-\u017F]{4,32}$/,
    price: /^.{0,100}$/,
    location: /^[a-zA-Z0-9_\\-\u00f1\u00d1\u00C0-\u017F]{4,48}\s?/,
  };

  useEffect(() => {
    setInput({
      name: name,
      price: price,
      productType: productType,

      user: user,
      pass: pass,

      location: location,
    });
  }, [name, price, productType, user, pass, location]);

  let labels = { label1, label2, label3, label4 };
  let productValues = {
    name: name,
    price: price,
    productType: productType,
    user: user,
    pass: pass,
    location,
  };
  let leyendaError = {
    ley1: "primer nombre tiene que tener mas de 2 digitos",
    ley2: "ingrese numeros positivos",
    ley3: "ingrese tipo de producto con mas de 3 digitos",
    ley4: "ingrese usuario con formato de correo sin espacio sin acentos",
    ley5: "ingrese un password con mas de 4 digitos sin espacios",
    ley6: "primera palabra tiene que tener mas de 3 digitos",
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const validacion = (e) => {
    if (expresiones) {
      if (expresiones[e.target.name].test(input[e.target.name])) {
        setInputvalido({
          ...inpValido,
          [e.target.name]: "true",
        });
      } else
        setInputvalido({
          ...inpValido,
          [e.target.name]: "false",
        });
    }
  };

  function handleSubmit(e) {
    // e.preventDefault();
    if (id === 1) {
      if (
        inpValido.name === "true" &&
        inpValido.user === "true" &&
        inpValido.pass === "true"
      ) {
        dispatch(input);
        MySwal.fire({
          title: "¡Usuario creado correctamente!",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "rgb(21, 151, 67)",
        }).then((result) => {
          if (result.isConfirmed) {
            setStateModal(!state);
            setInput({
              name: "",
              user: "",
              pass: "",
            });
          }
        });
      } else
        MySwal.fire({
          title: "¡Espera!",
          text: "Faltan campos por llenar",
          icon: "error",
          confirmButtonText: "Cool",
          confirmButtonColor: "rgb(21, 151, 67)",
        });
    }

    if (id === 2) {
      if (inpValido.name === "true" && inpValido.location === "true") {
        dispatch(postCommerce(input, token));
        MySwal.fire({
          title: "¡Comercio creado corectamente!",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "rgb(21, 151, 67)",
        }).then((result) => {
          if (result.isConfirmed) {
            setStateModal(!state);
            setInput({
              name: "",
              location: "",
            });
          }
        });
      } else
        MySwal.fire({
          title: "¡Espera!",
          text: "Faltan campos por llenar",
          icon: "error",
          confirmButtonText: "Cool",
          confirmButtonColor: "rgb(21, 151, 67)",
        });
    }

    if (id === 3) {
      if (
        inpValido.name === "true" &&
        inpValido.price === "true" &&
        inpValido.productType === "true"
      ) {
        dispatch(postProduct(input, token));
        MySwal.fire({
          title: "¡Producto creado correctamente!",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "rgb(21, 151, 67)",
        }).then((result) => {
          if (result.isConfirmed) {
            if (showInSettings) {
              dispatch(getProducts(token));
            }
            setStateModal(!state);
            setInput({
              name: "",
              price: "",
              productType: "",
            });
          }
        });
      } else
        MySwal.fire({
          title: "¡Espera!",
          text: "Faltan campos por llenar",
          icon: "error",
          confirmButtonText: "Cool",
          confirmButtonColor: "rgb(21, 151, 67)",
        });
    }

    // if (id === 4) {}

    if (id === 7) {
      const payload = {};
      for (let key in input) {
        if (input[key] !== undefined) {
          payload[key] = input[key];
        }
      }
      dispatch(updateProduct(payload, idElement, token));
      MySwal.fire({
        title: "¡Producto actualizado!",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "rgb(21, 151, 67)",
      }).then((result) => {
        if (result.isConfirmed) {
          setStateModal(!state);
          setInput({
            name: "",
            location: "",
          });
        }
      });
    }

    if (id === 8) {
      dispatch(postCategories(input, token));
      MySwal.fire({
        title: "Categoría creada correctamente!",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "rgb(21, 151, 67)",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(getCategories());
          setStateModal(!state);
          setInput({
            name: "",
          });
        }
      });
    }
  }

  function handleClose(e) {
    setStateModal(!state);
    setInput({
      ...input,
      name: "",
      price: "",
      productType: "",
    });
  }

  return (
    <div>
      <Overlay display={state ? "flex" : "none"}>
        <ModalContainer modalContainerBox={modalContainerBox} minwidth="390px">
          <HeaderModal>
            <h2>{title}</h2>
          </HeaderModal>
          <CloseButton onClick={(e) => handleClose(e)}>
            <FontAwesomeIcon icon={faWindowClose} />
          </CloseButton>
          {conditionalForm(
            id,
            input,
            handleChange,
            labels,
            productValues,
            leyendaError,
            inpValido,
            validacion,
            categories
          )}
          <Button
            width="100%"
            height="2.5rem"
            margin="1rem 0 0 0"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Aceptar
          </Button>
        </ModalContainer>
      </Overlay>
    </div>
  );
}

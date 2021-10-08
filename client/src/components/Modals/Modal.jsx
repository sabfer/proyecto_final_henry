import React, { useState, useEffect } from "react";
import { Overlay, ModalContainer, HeaderModal, CloseButton } from "./ModalStyles";
import { postProduct, updateProduct, postCommerce, getProducts } from "../../actions";
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
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: name,
    price: price,
    productType: productType,
    user: user,
    pass: pass,
    location: undefined,
    description: undefined,
    table: undefined,
    products: undefined,
    orderD: undefined,
    orderTA: undefined,
  });

  const [inpValido, setInputvalido] = useState({
    name: "",
    price: "",
    productType: "",
    user: "",
    pass: "",
    location: "",
  });

  const expresiones = {
    name: /^[a-zA-Z0-9_\\-\s\u00f1\u00d1\u00C0-\u017F]{3,32}$/, // Letras, numeros, guion y guion_bajo y espacio
    //^[a-zA-ZÀ-ÿ\s]{4,40}$ /^([a-z]+[0-9]{0,2}){5,12}
    user: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    //user: /^([a-z-ÿ\s]+[0-9]{0,2}){4,12}$/, // Letras, numeros, guion y guion_bajo
    pass: /^[a-zA-Z0-9_\\-\u00f1\u00d1\u00C0-\u017F]{5,32}$/, // Letras, numeros, guion y guion_baj
    //ubication: /^([a-z-ÿ\s]+[0-9]{0,2}){5,12}$/, // Letras, numeros, guion y guion_bajo
    productType: /^[a-zA-Z0-9_\\-\s\u00f1\u00d1\u00C0-\u017F]{4,32}$/, // Letras, numeros, guion y guion_bajo y espacio
    price: /^.{0,100}$/, // 0 a 100 digitos.
    location: /^[a-zA-Z0-9_\\-\s\u00f1\u00d1\u00C0-\u017F]{6,48}$/, // Letras, numeros, guion y guion_bajo y espacio
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
    ley1: "ingrese nombre con mas de 2 digitos",
    ley2: "ingrese numeros positivos",
    ley3: "ingrese tipo de producto con mas de 3 digitos",
    ley4: "ingrese usuario con formato de correo sin espacio sin acentos",
    ley5: "ingrese un password con mas de 4 digitos sin espacios",
    ley6: "ingrese una ubicacion con mas de 5 digitos",
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

  // if (
  //   input[e.target.name] &&
  //   expresiones[e.target.name].test(input[e.target.name])
  // ) {
  //   setInputvalido({
  //     ...inpValido,
  //     [e.target.name]: "true",
  //   });
  // } else
  //   setInputvalido({
  //     ...inpValido,
  //     [e.target.name]: "false",
  //   });
  // //console.log([e.target.name]) //se imprime Array [ "productType" ]
  // if (input[e.target.name]) {
  //   console.log(input[e.target.name].length);
  // }

  function handleSubmit(e) {
    // e.preventDefault();
    if (id === 1) {
      if (inpValido.name && inpValido.user && inpValido.pass) {
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
      if (inpValido.name && inpValido.location) {
        dispatch(postCommerce(input));
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
      if (inpValido.name && inpValido.productType=="true" && input.price > 0 ) {
        dispatch(postProduct(input));
        MySwal.fire({
          title: "¡Producto creado correctamente!",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "rgb(21, 151, 67)",
        }).then((result) => {
          if (result.isConfirmed) {
            if (showInSettings) {
              dispatch(getProducts());
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
    if (id === 7) {
      const payload = {};
      for (let key in input) {
        if (input[key] !== undefined) {
          payload[key] = input[key];
        }
      }
      dispatch(updateProduct(payload, idElement));
      MySwal.fire({
        title: "¡Produco actualizado!",
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
      {state && (
        <Overlay>
          <ModalContainer modalContainerBox={modalContainerBox}>
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
              validacion
            )}
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Aceptar
            </button>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
}

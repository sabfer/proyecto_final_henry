import React, { useState, useEffect } from "react";
import { LeyendaError } from "./StyleForm";
import {
  Overlay,
  ModalContainer,
  HeaderModal,
  CloseButton,
} from "./ModalStyles";
import { postProduct, updateProduct, postCommerce } from "../../actions";
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
    name: "false",
    price: "false",
    productType: "false",

    user: "false",
    pass: "false",

    location:"false"
  });

  console.log(input, "statelocal");
  console.log(inpValido, "statevalido");

  const expresiones = {
    name: /^([a-z-ÿ\s]+[0-9]{0,2}){3,12}$/, // Letras, numeros, guion y guion_bajo
    //^[a-zA-ZÀ-ÿ\s]{4,40}$ /^([a-z]+[0-9]{0,2}){5,12}
    user: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    //user: /^([a-z-ÿ\s]+[0-9]{0,2}){4,12}$/, // Letras, numeros, guion y guion_bajo
    pass: /^[a-zA-Z0-9\\-]{5,16}$/, // Letras, numeros, guion y guion_baj
    //ubication: /^([a-z-ÿ\s]+[0-9]{0,2}){5,12}$/, // Letras, numeros, guion y guion_bajo
    productType: /^([a-z-ÿ\s]+[0-9]{0,2}){4,12}$/, // Letras, numeros, guion y guion_bajo
    price: /^.{0,100}$/, // 0 a 100 digitos.
    location: /^([a-z-ÿ\s]+[0-9]{0,2}){6,12}$/ // Letras, numeros, guion y guion_bajo
  };

  useEffect(() => {
    setInput({
      name: name,
      price: price,
      productType: productType,

      user: user,
      pass: pass,

      location:location
    });
  }, [name, price, productType, user, pass,location]);

  let labels = { label1, label2, label3, label4 };
  let productValues = {
    name: name,
    price: price,
    productType: productType,
    user: user,
    pass: pass,
    location
  };
  let leyendaError = {
    ley1: "ingrese nombre con mas de 2 digitos",
    ley2: "ingrese numeros positivos",
    ley3: "ingrese tipo de producto con mas de 3 digitos",
    ley4: "ingrese usuario con formato de correo",
    ley5: "ingrese un password con mas de 5 digitos",
    ley6: "ingrese una ubicacion con mas de 5 digitos"
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
      if (
        inpValido.name == "true" &&
        inpValido.user=="true" &&
        inpValido.pass == "true"
      ) {
        //dispatch(input); object que se envia a las actions
        MySwal.fire({
          title: "User created",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        setInput({
          name: "",
          user: "",
          pass: "",
        });
      }else
      MySwal.fire({
        title: "Error!",
        text: "Complete all dates",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }

    if (id === 2) {
      if (
        inpValido.name == "true" &&
        inpValido.location=="true"
      ) {
        //dispatch(postCommerce(input)); object que se envia a las actions
        MySwal.fire({
          title: " Comercio created",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        setInput({
          name: "",
          location:""
        });
      }else
      MySwal.fire({
        title: "Error!",
        text: "Complete all dates",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }

    if (id === 3) {
      if (
        inpValido.name == "true" &&
        input.price > 0 &&
        inpValido.productType == "true"
      ) {
        dispatch(postProduct(input));
        MySwal.fire({
          title: "Product created",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        console.log("se despacho la accion");
        setInput({
          name: "",
          price: "",
          productType: "",
        });
      } else
        MySwal.fire({
          title: "Error!",
          text: "Complete all dates",
          icon: "error",
          confirmButtonText: "Cool",
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
      setStateModal(!state);
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
      1
    </div>
  );
}

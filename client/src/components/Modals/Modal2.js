import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../css";
import { Overlay, ModalContainer, HeaderModal, CloseButton } from "../../css/ModalStyles";
import { getProductsInv, postProductInv, updateProductInv } from "../../actions";
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
  label1, //name
  label2, //user
  label3, //price
  label4, //
  label5, //prodInvType
  label6, //cant
  label7,
  modalContainerBox,
  id,
  fecha,
  name,
  price,
  cant,
  prodInvType,
  proveeType,
  idElement,
  showInSettings,
}) {
  const token = useSelector((state) => state.userToken);
  /////////////////////////////////////////////////////////////

  //const categoriesProducts = useSelector((state) => state.prodInvTypesInv);
  const categoriesProducts = [
    { _id: "10", name: "Carnes" },
    { _id: "11", name: "Pescados" },
    { _id: "12", name: "Bebidas" },
    { _id: "13", name: "Bebidas Alcoholicas" },
    { _id: "14", name: "Verduras" },
    { _id: "15", name: "Mercaderias" },
    { _id: "16", name: "Insumos" },
  ];

  const categoriesProv = [
    { _id: "20", name: "CocaCola" },
    { _id: "21", name: "Carniceria Bermejo" },
    { _id: "22", name: "Jumbo" },
    { _id: "23", name: "Super Vea" },
    { _id: "24", name: "Polleria 9 de Julio" },
    { _id: "25", name: "Libreria San Marcos" },
    { _id: "26", name: "Panaderia Milagros" },
    { _id: "27", name: "PepsiCo" },
  ];
  /////////////////////////////////////////////////////////////
  const categories = useSelector((state) => state.prodInvTypes); //no borrar
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    fecha: "" || fecha,
    name: "" || name,
    price: "" || price,
    cant: "" || cant,
    prodInvType: "" || prodInvType,
    proveeType: "" || proveeType,
    description: "",
    orderD: "",
    orderTA: "",
  });

  const [inpValido, setInputvalido] = useState({
    fecha: "",
    name: "",
    price: "",
    cant: "",
    prodInvType: "",
    proveeType: "",
  });

  /* console.log(input);
  console.log(inpValido); */

  const expresiones = {
    name: /^[a-zA-Z0-9_\\-\u00f1\u00d1\u00C0-\u017F]{3,32}\s?/,
    prodInvType: /^[a-zA-Z0-9_\\-\s\u00f1\u00d1\u00C0-\u017F]{4,32}$/,
    proveeType: /^[a-zA-Z0-9_\\-\s\u00f1\u00d1\u00C0-\u017F]{4,32}$/,
    price: /^.{0,100}$/,
    cant: /^.{0,100}$/,
  };

  useEffect(() => {
    setInput({
      fecha: "" || fecha,
      name: "" || name,
      price: "" || price,
      cant: "" || cant,
      prodInvType: "" || prodInvType,
      proveeType: "" || proveeType,
    });
  }, [name, cant, price, prodInvType, proveeType, fecha]);

  let labels = { label1, label2, label3, label4, label5, label6, label7 };
  let productValues = {
    fecha: fecha,
    name: name,
    price: price,
    cant: cant,
    prodInvType: prodInvType,
    proveeType: proveeType,
  };
  let leyendaError = {
    ley1: "El nombre tiene que tener mas de 2 digitos",
    ley2: "Ingresar números positivos",
    ley3: "Ingrese tipo de producto",
    ley4: "Ingrese usuario con formato de correo sin espacio y sin acentos",
    ley5: "Ingrese una contraseña con mas de 4 digitos sin espacios",
    ley6: "Primera palabra tiene que tener mas de 3 digitos",
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
    /////////////////CREACION PROD INV//////////////////////////////////
    if (id === 4) {
      if (inpValido.name === "true") {
        const objeto = {
          fecha: input.fecha,
          name: input.name,
          price: input.price,
          cant: input.cant,
          prodInvType: input.prodInvType,
          proveeType: input.proveeType,
        };
        dispatch(postProductInv(objeto, token));
        MySwal.fire({
          title: "¡Inventario creado correctamente!",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "rgb(21, 151, 67)",
        }).then((result) => {
          if (result.isConfirmed) {
            if (showInSettings) {
              dispatch(getProductsInv(token));
            }
            setStateModal(!state);
            setInput({
              fecha: "",
              name: "",
              price: "",
              cant: "",
              prodInvType: "",
              proveeType: "",
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
    ///////////////////////////////////////////////

    if (id === 9) {
      const payload = {
        fecha: input.fecha,
        name: input.name,
        price: input.price,
        cant: input.cant,
        prodInvType: input.prodInvType,
        proveeType: input.proveeType,
      };
      dispatch(updateProductInv(payload, idElement, token));
      MySwal.fire({
        title: "¡Producto actualizado!",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "rgb(21, 151, 67)",
      }).then((result) => {
        if (result.isConfirmed) {
          setStateModal(!state);
        }
      });
    }
  }

  function handleClose(e) {
    setStateModal(!state);
    setInput({
      ...input,
      fecha: "",
      name: "",
      price: "",
      cant: "",
      prodInvType: "",
      proveeType: "",
    });
  }

  return (
    <div>
      <Overlay display={state ? "flex" : "none"}>
        <ModalContainer modalContainerBox={modalContainerBox} minwidth="450px">
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
            categories,
            categoriesProducts,
            categoriesProv
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

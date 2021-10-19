import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../css";
import { Overlay, ModalContainer, HeaderModal, CloseButton } from "../../css/ModalStyles";
import {
  postProduct,
  updateProduct,
  postCommerce,
  getProducts,
  getProductsInv,
  postCategories,
  getCategories,
  postProductInv
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
  label1,//nombre
  label2,
  label3,//precio
  label4,//tipoProd
  ////////
  label5,//tipoProvee
  label6,//cant

  ///////
  modalContainerBox,
  id,
  name,
  price,
  prodInvType,
  ///////
  proveeType,
  fecha,
  cant,
  ///////
  user,
  pass,
  location,
  idElement,
  showInSettings,
}) {
  const token = useSelector((state) => state.userToken);
  /////////////////////////////////////////////////////////////

  //const categoriesProducts = useSelector((state) => state.prodInvTypesInv);
  const categoriesProducts = [{ _id: "6163535ae098f3500c2d35dc", name: "Carnes" },
  { _id: "11", name: "Pescados" },
  { _id: "12", name: "Bebidas" },
  { _id: "13", name: "Bebidas Alcoholicas" },
  { _id: "14", name: "Verduras" },
  { _id: "15", name: "Mercaderias" }]

  const categoriesProv = [{ _id: "6163535ae098f3500c2d35dc", name: "CocaCola" },
  { _id: "21", name: "Carniceria Bermejo" },
  { _id: "22", name: "Jumbo" },
  { _id: "23", name: "Super Vea" },
  { _id: "24", name: "Polleria 9 de Julio" },
  { _id: "25", name: "Libreria San Marcos" }]
  /////////////////////////////////////////////////////////////
  const categories = useSelector((state) => state.prodInvTypes);
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "" || name,
    price: "" || price,
    prodInvType: "" || prodInvType,
    user: "" || user,
    pass: "" || pass,
    location: "",
    description: "",
    orderD: "",
    orderTA: "",
    proveeType: "" || proveeType,
    fecha: "" || fecha,
    cant:""|| cant
  });

  const [inpValido, setInputvalido] = useState({
    name: "",
    price: "",
    user: "",
    pass: "",
    location: "",
    prodInvType: "",
    proveeType: "",
    fecha: "",
    cant:""
  });
  console.log(input)
  console.log(inpValido)

  const expresiones = {
    name: /^[a-zA-Z0-9_\\-\u00f1\u00d1\u00C0-\u017F]{3,32}\s?/,
    user: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    pass: /^[a-zA-Z0-9_\\-\u00f1\u00d1\u00C0-\u017F]{5,32}$/,
    prodInvType: /^[a-zA-Z0-9_\\-\s\u00f1\u00d1\u00C0-\u017F]{4,32}$/,
    proveeType: /^[a-zA-Z0-9_\\-\s\u00f1\u00d1\u00C0-\u017F]{4,32}$/,
    price: /^.{0,100}$/,
    cant:/^.{0,100}$/,
    location: /^[a-zA-Z0-9_\\-\u00f1\u00d1\u00C0-\u017F]{4,48}\s?/,
  };

  useEffect(() => {
    setInput({
      name: "" || name,
      price: "" || price,
      prodInvType: "" || prodInvType,
      user: "" || user,
      pass: "" || pass,
      location: "" || location,
      proveeType: "" || proveeType,
      fecha: "" || fecha,
      cant:""|| cant
    });
  }, [name, price, prodInvType, user, pass, location, proveeType, fecha,cant]);

  let labels = { label1, label2, label3, label4, label5,label6};
  let productValues = {
    name: name,
    price: price,
    prodInvType: prodInvType,
    user: user,
    pass: pass,
    location: location,
    proveeType: proveeType,
    fecha: fecha,
    cant:cant
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
        inpValido.prodInvType === "true"
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
              prodInvType: "",
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

    /////////////////////////////////////////////////// 
    if (id === 4) {
      if (
        inpValido.name === "true" &&
        inpValido.price === "true" &&
        inpValido.prodInvType === "true" &&
        inpValido.proveeType==="true" &&
        inpValido.cant==="true"
      ) {
        const objeto={
          name:input.name,
          prodInvType:input.prodInvType,
          price:input.price,
          cant:input.cant,
          proveedor:input.proveeType
        }
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
              name: "",
              price: "",
              prodInvType: "",
              proveeType:"",
              cant:""
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

    if (id === 7) {
      const payload = {
        name: input.name,
        price: input.price,
        prodInvType: input.prodInvType,
      };
      dispatch(updateProduct(payload, idElement, token));
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
      prodInvType: "",
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
            categories,
            //////////////////
            categoriesProducts,
            categoriesProv
            //////////////////
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

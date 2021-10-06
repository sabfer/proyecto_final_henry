import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getProducts, deleteProduct } from "../../../actions";
import Modal from "../../Modals/Modal";
import Search from "./Search";
import { Button } from "../../../css";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "../../../css/Table";
import {
  faPenSquare,
  faTrash,
  faSortAlphaDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Productos() {
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [editProductModal, setEditProductModal] = useState(false);
  const [modalProduct, setmodalProduct] = useState({
    _id: "",
    name: "",
    price: "",
    productType: "",
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProducts());
    }, 1000);
  }, [dispatch]);

  /* useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, products]); */

  function handleDelete(e) {
    MySwal.fire({
      title: "¿Estas seguro?",
      text: "¡El producto será borrado de la base de datos!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1ABD53",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(e));
        MySwal.fire({
          title: "Producto borrado",
          text: "El producto se borró correctamente.",
          icon: "success",
          confirmButtonColor: "#00A0D2",
        });
        setTimeout(() => {
          dispatch(getProducts());
        }, 300);
      }
    });
    /* if (
      window.confirm(
        "¿Estás seguro de querer eliminar el producto seleccionado?"
      )
    ) {
      dispatch(deleteProduct(e));
      setTimeout(() => {
        dispatch(getProducts());
      }, 100);
    } */
  }

  function handleClick(e, props) {
    e.preventDefault();
    setmodalProduct({
      _id: props._id,
      name: props.name,
      price: props.price,
      productType: props.productType,
    });
    setEditProductModal(!editProductModal);
  }

  return (
    <div>
      <h1>Productos</h1>
      {/* <Table data={products}></Table> */}
      <Search />
      {Array.isArray(products) ? (
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableHd width="35%">
                  <span className="productName">
                    <p style={{ margin: 0 }}>Nombre</p>
                    <FontAwesomeIcon
                      icon={faSortAlphaDown}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    ></FontAwesomeIcon>
                  </span>
                </TableHd>
                <TableHd width="40%">Tipo de producto</TableHd>
                <TableHd width="10%">Precio</TableHd>
                <TableHd>Opciones</TableHd>
              </TableRow>
            </TableHead>
            <tbody>
              {products.map((el) => {
                return (
                  <TableRow key={el._id}>
                    <TableData>{el.name}</TableData>
                    <TableData>{el.productType}</TableData>
                    <TableData>$ {el.price}</TableData>
                    <TableData>
                      <div>
                        <Button
                          onClick={(e) =>
                            handleClick(e, {
                              name: el.name,
                              price: el.price,
                              productType: el.productType,
                              _id: el._id,
                            })
                          }
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
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <Modal
        idElement={modalProduct._id}
        id={7}
        state={editProductModal}
        setStateModal={setEditProductModal}
        title="Modificar Producto"
        label1="Nombre"
        label2="Precio"
        label3="Tipo de Producto"
        name={modalProduct.name}
        price={modalProduct.price}
        productType={modalProduct.productType}
        modalContainerBox={true}
      />
    </div>
  );
}

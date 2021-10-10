import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Button, Loading } from "../../css";
import {
  Overlay,
  ModalContainer,
  HeaderModal,
  HeaderModalTitle,
  HeaderModalDetails,
  CategoriasPedidos,
  CloseButton,
  SelectModal,
  InputModal,
  ButtonConfirm,
  FormModal,
  TablesModal,
  TableProductsModal,
  TablePricesModal,
  ButtonCerrar
} from "./ModalStyles";
import { Select } from "../../css/Select";
import {
  Table,
  TableHead,
  TableData,
  TableHd,
  TableRow,
} from "../../css/Table";
import {
  faPenSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import FilterProductTypes from "../Settings/components/FilterProductTypes";

export default function ModalSalon({ state, setState, title }) {
  const products = useSelector((state) => state.products);
  const [input, setInput] = useState("");

  

  function handleClose(e) {
    setState(!state);
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  // function handleSubmit(e) {}

  return (
    <div>
      {state && (
        <Overlay>
          <ModalContainer
            align="unset"
          >
            <HeaderModal>
                <img src="https://i.imgur.com/0OF9UWi.png" />
              <HeaderModalTitle>   
                <h3>Mesa: {35}</h3>
                <h4>Mozo:  Enzo Derviche</h4>
              </HeaderModalTitle>
              <HeaderModalDetails>
                <p>Fecha: 10/10/2021</p>
                <p>Hora: 13:51</p>
                <h4>ORDEN nº: 00001</h4>
              </HeaderModalDetails>
            </HeaderModal>  
            <CloseButton onClick={(e) => handleClose(e)}>
              <FontAwesomeIcon icon={faWindowClose} />
            </CloseButton>

            <CategoriasPedidos>
              <FilterProductTypes /> 
            </CategoriasPedidos>
            
            <SelectModal>
                <FormModal>
                  <Select
                    width="83%"
                    height="2.4rem"
                    border="solid 1px black"
                    fontWeight="bold"
                  >
                    {products &&
                      products.map((e) => {
                        return <option value="{e.name}">{e.name} </option>;
                      })}
                  </Select>
                  <InputModal>
                      <input
                          type="number"
                          placeholder="Cant."
                      />
                  </InputModal>
                </FormModal>
                <ButtonConfirm type="submit">
                      x
                </ButtonConfirm>
            </SelectModal>

            <TablesModal>

              <TableProductsModal>
                <Table id="productsTable">
                <TableHead>
                  <TableRow>
                    <TableHd width="10%">Cant.</TableHd>
                    <TableHd width="50%">Productos</TableHd>
                    <TableHd width="20%">Precio</TableHd>
                    <TableHd width="20%">Opciones</TableHd>
                  </TableRow>
                </TableHead>
                <tbody>
                  {/* {products.map((el) => { */}
                    {/* return ( */}
                      <TableRow /* key={el._id} */>
                        <TableData>{/* {el.name} */}</TableData>
                        <TableData>{/* a */}</TableData>
                        <TableData>{/* $ {el.price} */}</TableData>
                        <TableData>
                          <div className="options">
                            <Button
                              /* onClick={(e) =>
                                handleClick(e, {
                                  name: el.name,
                                  price: el.price,
                                  productType: el.productType,
                                  _id: el._id,
                                })
                              } */
                              width="2rem"
                              height="2rem"
                              buttonColor="rgb(2, 101, 210)"
                            >
                              <FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon>
                            </Button>
                            <Button
                              /* onClick={(e) => handleDelete(el._id)} */
                              width="2rem"
                              height="2rem"
                              buttonColor="rgba(255, 0, 0, 1)"
                            >
                              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </Button>
                          </div>
                        </TableData>
                      </TableRow>
                   {/*  */}
                 {/*  })} */}
                </tbody>
              </Table>
              </TableProductsModal>
              <TablePricesModal>
                <p>Detalles</p>
                <p>Subtotal: $10000</p>
                <p>Propina: $100</p>
                <p>Monto Total: $10100</p>
                <ButtonCerrar>
                  Cerrar
                </ButtonCerrar>
              </TablePricesModal>

            </TablesModal>

          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
};

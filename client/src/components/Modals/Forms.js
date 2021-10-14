import { LeyendaError, Label, InputContainer } from "../../css/StyleForm";
import { Select } from "../../css/Select";

export const conditionalForm = (
  id,
  input,
  onChange,
  { label1, label2, label3, label4 },
  { name, price },
  { ley1, ley2, ley3, ley4, ley5, ley6 },
  inpValido,
  validacion,
  categories
) => {
  //Formulario: "CREAR USUARIO"
  if (id === 1) {
    return (
      <form>
        <InputContainer>
          <Label valido={inpValido.name}>{label1}</Label>
          <input
            type="text"
            name="name"
            required
            value={input.name}
            onChange={(e) => onChange(e)}
            leyenda={ley1}
            //cuando precionas una tecla se la presiona hacia adentro y cuando se
            //levanta el dedo es donde se ejecuta esta funcion
            onKeyUp={validacion}
            //cuando se hace click fuiera del input
            onBlur={validacion}
          />
          <LeyendaError valido={inpValido.name}>{ley1}</LeyendaError>
        </InputContainer>
        <InputContainer>
          <Label valido={inpValido.user}>{label2}</Label>
          <input
            type="text"
            name="user"
            required
            value={input.user}
            onChange={(e) => onChange(e)}
            leyenda={ley1}
            //cuando precionas una tecla se la presiona hacia adentro y cuando se
            //levanta el dedo es donde se ejecuta esta funcion
            onKeyUp={validacion}
            //cuando se hace click fuiera del input
            onBlur={validacion}
          />
          <LeyendaError valido={inpValido.user}>{ley4}</LeyendaError>
        </InputContainer>
        <InputContainer>
          <Label valido={inpValido.pass}>{label3}</Label>
          <input
            type="text"
            name="pass"
            required
            value={input.pass}
            onChange={(e) => onChange(e)}
            leyenda={ley1}
            //cuando precionas una tecla se la presiona hacia adentro y cuando se
            //levanta el dedo es donde se ejecuta esta funcion
            onKeyUp={validacion}
            //cuando se hace click fuiera del input
            onBlur={validacion}
          />
          <LeyendaError valido={inpValido.pass}>{ley5}</LeyendaError>
        </InputContainer>
      </form>
    );
  }
  //Formulario: "CREAR COMERCIO"
  if (id === 2) {
    return (
      <form>
        <InputContainer>
          <Label valido={inpValido.name}>{label1}</Label>
          <input
            type="text"
            name="name"
            required
            value={input.name}
            onChange={(e) => onChange(e)}
            leyenda={ley1}
            //cuando precionas una tecla se la presiona hacia adentro y cuando se
            //levanta el dedo es donde se ejecuta esta funcion
            onKeyUp={validacion}
            //cuando se hace click fuiera del input
            onBlur={validacion}
          />
          <LeyendaError valido={inpValido.name}>{ley1}</LeyendaError>
        </InputContainer>
        <InputContainer>
          <Label valido={inpValido.name}>{label2}</Label>
          <input
            type="text"
            name="location"
            required
            value={input.location}
            onChange={(e) => onChange(e)}
            leyenda={ley6}
            //cuando precionas una tecla se la presiona hacia adentro y cuando se
            //levanta el dedo es donde se ejecuta esta funcion
            onKeyUp={validacion}
            //cuando se hace click fuiera del input
            onBlur={validacion}
          />
          <LeyendaError valido={inpValido.location}>{ley6}</LeyendaError>
        </InputContainer>
      </form>
    );
  }
  //Formulario: "CREAR PRODUCTO"
  if (id === 3) {
    return (
      <form>
        <InputContainer>
          <Label valido={inpValido.name}>{label1}</Label>
          <input
            type="text"
            name="name"
            required
            value={input.name}
            onChange={(e) => onChange(e)}
            leyenda={ley1}
            //cuando precionas una tecla se la presiona hacia adentro y cuando se
            //levanta el dedo es donde se ejecuta esta funcion
            onKeyUp={validacion}
            //cuando se hace click fuiera del input
            onBlur={validacion}
          />
          <LeyendaError valido={inpValido.name}>{ley1}</LeyendaError>
        </InputContainer>
        <InputContainer>
          <Label valido={inpValido.price}>{label3}</Label>
          <input
            type="number"
            name="price"
            min="1"
            required
            value={input.price}
            onChange={(e) => onChange(e)}
            leyenda={ley2}
            //cuando precionas una tecla se la presiona hacia adentro y cuando se
            //levanta el dedo es donde se ejecuta esta funcion
            onKeyUp={validacion}
            //cuando se hace click fuiera del input
            onBlur={validacion}
          />

          <LeyendaError valido={inpValido.price}>{ley2}</LeyendaError>
        </InputContainer>
        <InputContainer>
          <Label>{label4}</Label>
          <Select
            onChange={(e) => onChange(e)}
            name="productType"
            required
            margin="0 0 1rem 0"
            onKeyUp={validacion}
            onBlur={validacion}
          >
            <option defaultValue="none" name="categorías" hidden>
              Categorías
            </option>
            {categories &&
              categories.map((ctg) => (
                <option key={ctg._id} name={ctg.name} value={ctg.name}>
                  {ctg.name}
                </option>
              ))}
          </Select>
        </InputContainer>
      </form>
    );
  }
  // Formulario: "CREAR PEDIDO SALON"
  // if (id === 4) {
  //   return (
  //     <form>
  //       <InputContainer>
  //         <label>{label1}</label>
  //         <input
  //           type="string"
  //           name="table"
  //           value={input.table}
  //           onChange={(e) => onChange(e)}
  //         />
  //       </InputContainer>
  //       <InputContainer>
  //         <label>{label2}</label>
  //         <input
  //           type="text"
  //           name="products"
  //           value={input.products}
  //           onChange={(e) => onChange(e)}
  //         />
  //       </InputContainer>
  //       <InputContainer>
  //         <label>{label3}</label>
  //         <input type="text" name="user" value={input.user} onChange={onChange} />
  //       </InputContainer>
  //     </form>
  //   );
  // }
  // Formulario: "CREAR PEDIDO PARA LLEVAR"
  if (id === 5) {
    return (
      <form>
        <InputContainer>
          <label>{label1}</label>
          <input
            type="text"
            name="orderD"
            value={input.orderD}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
        <InputContainer>
          <label>{label2}</label>
          <input
            type="text"
            name="products"
            value={input.products}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
      </form>
    );
  }
  // Formulario: "CREAR PEDIDO TAKE AWAY"
  if (id === 6) {
    return (
      <form>
        <InputContainer>
          <label>{label1}</label>
          <input
            type="text"
            name="orderTA"
            value={input.orderTA}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
        <InputContainer>
          <label>{label2}</label>
          <input
            type="text"
            name="products"
            value={input.products}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
      </form>
    );
  }
  // Formulario: "MODIFICAR PRODUCTO"
  if (id === 7) {
    return (
      <form>
        <InputContainer>
          <label>{label1}</label>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder={name}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
        <InputContainer>
          <label>{label2}</label>
          <input
            type="number"
            name="price"
            value={input.price}
            placeholder={price}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
        <Select
          onChange={(e) => onChange(e)}
          name="productType"
          required
          margin="0 0 1rem 0"
        >
          <option defaultValue="none" name="categorías" hidden>
            Categorías
          </option>
          {categories &&
            categories.map((ctg) => (
              <option key={ctg._id} name={ctg.name} value={ctg.name}>
                {ctg.name}
              </option>
            ))}
        </Select>
      </form>
    );
  }

  if (id === 8) {
    return (
      <form>
        <InputContainer>
          <label>{label1}</label>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder={name}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
      </form>
    );
  }
};

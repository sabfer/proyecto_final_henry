import { LeyendaError, Label } from "./StyleForm";
export const conditionalForm = (
  id,
  input,
  onChange,
  { label1, label2, label3, label4 },
  { name, price, productType },
  { ley1, ley2, ley3, ley4, ley5, ley6 },
  inpValido,
  validacion
) => {
  console.log(input); //este es el estado local
  console.log(inpValido, "de forms");
  //Formulario: "CREAR USUARIO"
  if (id === 1) {
    return (
      <form>
        <Label valido={inpValido.name}>{label1}</Label>
        <br />
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
        <Label valido={inpValido.user}>{label2}</Label>
        <br />
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

        <Label valido={inpValido.pass}>{label3}</Label>
        <br />
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
      </form>
    );
  }
  //Formulario: "CREAR COMERCIO"
  if (id === 2) {
    return (
      <form>
        <Label valido={inpValido.name}>{label1}</Label>
        <br />
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

        <Label valido={inpValido.name}>{label2}</Label>
        <br />
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
      </form>
    );
  }
  //Formulario: "CREAR PRODUCTO"
  if (id === 3) {
    return (
      <form>
        <Label valido={inpValido.name}>{label1}</Label>
        <br />
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

        <Label valido={inpValido.price}>{label3}</Label>
        <br />
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

        <Label valido={inpValido.productType}>{label4}</Label>
        <br />
        <input
          type="text"
          name="productType"
          required
          value={input.productType}
          onChange={(e) => onChange(e)}
          leyenda={ley3}
          //cuando precionas una tecla se la presiona hacia adentro y cuando se
          //levanta el dedo es donde se ejecuta esta funcion
          onKeyUp={validacion}
          //cuando se hace click fuiera del input
          onBlur={validacion}
        />
        <LeyendaError valido={inpValido.productType}>{ley3}</LeyendaError>
      </form>
    );
  }
  // Formulario: "CREAR PEDIDO SALON"
  if (id === 4) {
    return (
      <form>
        <label>{label1}</label>
        <br />
        <input
          type="string"
          name="table"
          value={input.table}
          onChange={(e) => onChange(e)}
        />
        <label>{label2}</label>
        <br />
        <input
          type="text"
          name="products"
          value={input.products}
          onChange={(e) => onChange(e)}
        />
        <label>{label3}</label>
        <br />
        <input type="text" name="user" value={input.user} onChange={onChange} />
      </form>
    );
  }
  // Formulario: "CREAR PEDIDO PARA LLEVAR"
  if (id === 5) {
    return (
      <form>
        <label>{label1}</label>
        <br />
        <input
          type="text"
          name="orderD"
          value={input.orderD}
          onChange={(e) => onChange(e)}
        />
        <label>{label2}</label>
        <br />
        <input
          type="text"
          name="products"
          value={input.products}
          onChange={(e) => onChange(e)}
        />
      </form>
    );
  }
  // Formulario: "CREAR PEDIDO TAKE AWAY"
  if (id === 6) {
    return (
      <form>
        <label>{label1}</label>
        <br />
        <input
          type="text"
          name="orderTA"
          value={input.orderTA}
          onChange={(e) => onChange(e)}
        />
        <label>{label2}</label>
        <br />
        <input
          type="text"
          name="products"
          value={input.products}
          onChange={(e) => onChange(e)}
        />
      </form>
    );
  }

  // Formulario: "MODIFICAR PRODUCTO"
  if (id === 7) {
    return (
      <form>
        <label>{label1}</label>
        <br />
        <input
          type="text"
          name="name"
          value={input.name}
          placeholder={name}
          onChange={(e) => onChange(e)}
        />
        <label>{label2}</label>
        <br />
        <input
          type="number"
          name="price"
          value={input.price}
          placeholder={price}
          onChange={(e) => onChange(e)}
        />
        <label>{label3}</label>
        <br />
        <input
          type="text"
          name="productType"
          value={input.productType}
          placeholder={productType}
          onChange={(e) => onChange(e)}
        />
      </form>
    );
  }
};

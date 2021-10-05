export const conditionalForm = (
  id,
  input,
  onChange,
  { label1, label2, label3, label4 },
  { name, price, productType }
) => {
  //Formulario: "CREAR USUARIO"
  if (id === 1) {
    return (
      <form>
        <label>{label1}</label>
        <br />
        <input type="text" name="name" value={input.name} onChange={onChange} />
        <label>{label2}</label>
        <br />
        <input type="text" name="user" value={input.user} onChange={onChange} />
        <label>{label3}</label>
        <br />
        <input type="text" name="pass" value={input.pass} onChange={onChange} />
      </form>
    );
  }
  //Formulario: "CREAR COMERCIO"
  if (id === 2) {
    return (
      <form>
        <label>{label1}</label>
        <br />
        <input type="text" name="name" value={input.name} onChange={onChange} />
        <label>{label2}</label>
        <br />
        <input
          type="text"
          name="direction"
          value={input.direction}
          onChange={onChange}
        />
      </form>
    );
  }
  //Formulario: "CREAR PRODUCTO"
  if (id === 3) {
    return (
      <form>
        <label>{label1}</label>
        <br />
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => onChange(e)}
        />
        <label>{label3}</label>
        <br />
        <input
          type="number"
          name="price"
          value={input.price}
          onChange={(e) => onChange(e)}
        />
        <label>{label4}</label>
        <br />
        <input
          type="text"
          name="productType"
          value={input.productType}
          onChange={(e) => onChange(e)}
        />
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
          onChange={onChange}
        />
        <label>{label2}</label>
        <br />
        <input
          type="text"
          name="products"
          value={input.products}
          onChange={onChange}
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
          onChange={onChange}
        />
        <label>{label2}</label>
        <br />
        <input
          type="text"
          name="products"
          value={input.products}
          onChange={onChange}
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
          onChange={onChange}
        />
        <label>{label2}</label>
        <br />
        <input
          type="text"
          name="products"
          value={input.products}
          onChange={onChange}
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

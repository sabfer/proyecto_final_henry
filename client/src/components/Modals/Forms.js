import { LeyendaError, Label, InputContainer } from "../../css/StyleForm";
import { Select } from "../../css/Select";
export const conditionalForm = (
  id,
  input,
  onChange,
  { label1, label2, label3, label4, label5, label6, label7 },
  { name, user, pass, productType, prodInvType, fecha, price, cant },
  { ley1, ley2, ley3, ley4, ley5, ley6, ley7, ley8 },
  inpValido,
  validacion,
  categories,
  categoriesProducts,
  categoriesProv
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
            //value={input.name}
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
            //value={input.user}
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
            //value={input.pass}
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

  //Formulario: "CREAR PRODUCTO"
  if (id === 3) {
    return (
      <form>
        <InputContainer>
          <Label>{label1}</Label>
          <input
            type="text"
            name="name"
            required
            //value={input.name}
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
          <Label>{label3}</Label>
          <input
            type="number"
            name="price"
            min="1"
            required
            //value={input.price}
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

  //Formulario: "CREAR COMPRA INVENTARIO"
  if (id === 4) {
    return (
      <form>
        <InputContainer>
          <Label>{label7}</Label>
          <input
            type="date"
            name="fecha"
            required
            //value={input.fecha}
            onChange={(e) => onChange(e)}
            leyenda={ley8}
            validacion={validacion}
            //cuando precionas una tecla se la presiona hacia adentro y cuando se
            //levanta el dedo es donde se ejecuta esta funcion
            onKeyUp={validacion}
            //cuando se hace click fuiera del input
            onBlur={validacion}
          />
          <LeyendaError valido={inpValido.fecha}>{ley8}</LeyendaError>
        </InputContainer>

        <InputContainer>
          <Label>{label1}</Label>
          <input
            type="text"
            name="name"
            placeholder=" ingrese nombre"
            required
            onChange={(e) => onChange(e)}
            leyenda={ley1}
            onKeyUp={validacion}
            onBlur={validacion}
          />
          <LeyendaError valido={inpValido.name}>{ley1}</LeyendaError>
        </InputContainer>

        <div class="InputsNC">
          <div class="InputN">
            <InputContainer>
              <Label>{label3}</Label>
              <input
                className="inp"
                type="number"
                name="price"
                min="1"
                required
                //value={input.price}
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
          </div>
          <div class="InputC">
            <InputContainer>
              <Label>{label6}</Label>
              <input
                className="inp"
                type="number"
                name="cant"
                width="30px"
                min="1"
                required
                //value={input.price}
                onChange={(e) => onChange(e)}
              //leyenda={ley2}
              //cuando precionas una tecla se la presiona hacia adentro y cuando se
              //levanta el dedo es donde se ejecuta esta funcion
              onKeyUp={validacion}
              //cuando se hace click fuiera del input
              onBlur={validacion}
              />
              <LeyendaError valido={inpValido.cant}>{ley2}</LeyendaError>
            </InputContainer>
          </div>
        </div>
        <InputContainer>
          <Label>{label4}</Label>
          <Select
            onChange={(e) => onChange(e)}
            name="prodInvType"
            required
            margin="0 0 1rem 0"
            onKeyUp={validacion}
            onBlur={validacion}
            leyenda={ley7}
          >
            <option defaultValue="none" name="categorías" hidden >
              Categorias
            </option>
            {categoriesProducts &&
              categoriesProducts.map((ctg) => (
                <option key={ctg._id} name={ctg.name} value={ctg.name}>
                  {ctg.name}
                </option>
              ))}
            <LeyendaError valido={inpValido.name}>{ley7}</LeyendaError>
          </Select>
        </InputContainer>
        <InputContainer>
          <Label>{label5}</Label>
          <Select
            onChange={(e) => onChange(e)}
            name="proveeType"
            required
            margin="0 0 1rem 0"
            onKeyUp={validacion}
            onBlur={validacion}
            leyenda={ley7}
          >
            <option defaultValue="none" name="categoríasProvee" hidden>
              Categorias Proveedores
            </option>
            {categoriesProv &&
              categoriesProv.map((ctg) => (
                <option key={ctg._id} name={ctg.name} value={ctg.name}>
                  {ctg.name}
                </option>
              ))}
            <LeyendaError valido={inpValido.name}>{ley7}</LeyendaError>
          </Select>
        </InputContainer>
      </form>
    );
  }

  if (id === 7) {
    return (
      <form>
        <InputContainer>
          <Label>{label1}</Label>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder={name}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
        <InputContainer>
          <Label>{label2}</Label>
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
  /* FORMULARIO PARA CREAR CATEGORIAS */
  if (id === 8) {
    return (
      <form>
        <InputContainer>
          <Label>{label1}</Label>
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

  // Formulario: "MODIFICAR PRODUCTO INVENTARIO"
  if (id === 9) {
    return (
      <form>
        <InputContainer>
          <Label>{label7}</Label>
          <input
            type="date"
            name="fecha"
            value={input.fecha}
            //placeholder={fecha} 
            onChange={(e) => onChange(e)}
          />
        </InputContainer>

        <InputContainer>
          <Label>{label1}</Label>
          <input
            type="text"
            name="name"
            value={input.name}
            //placeholder={name} 
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
        <InputContainer>
          <Label>{label3}</Label>
          <input
            type="number"
            name="price"
            value={input.price}
            //placeholder={price}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
        <InputContainer>
          <Label>{label6}</Label>
          <input
            type="number"
            name="cant"
            value={input.cant}
            //placeholder={cant}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
        <InputContainer>
          <Label>{label4}</Label>
          <Select
            onChange={(e) => onChange(e)}
            name="productType"
            required
            margin="0 0 1rem 0"
          >
            <option defaultValue="none" name="categorías" hidden>
              Categorías
            </option>
            {categoriesProducts &&
              categoriesProducts.map((ctg) => (
                <option key={ctg._id} name={ctg.name} value={ctg.name}>
                  {ctg.name}
                </option>
              ))}
          </Select>
        </InputContainer>
        <InputContainer>
          <Label>{label5}</Label>
          <Select
            onChange={(e) => onChange(e)}
            name="proveetType"
            required
            margin="0 0 1rem 0"
          >
            <option defaultValue="none" name="categorías" hidden>
              Categorías
            </option>
            {categoriesProv &&
              categoriesProv.map((ctg) => (
                <option key={ctg._id} name={ctg.name} value={ctg.name}>
                  {ctg.name}
                </option>
              ))}
          </Select>
        </InputContainer>
      </form>
    );
  }
};

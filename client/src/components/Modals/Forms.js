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
            onChange={(e) => onChange(e)}
            leyenda={ley1}
            onKeyUp={validacion}
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
            onChange={(e) => onChange(e)}
            leyenda={ley2}
            onKeyUp={validacion}
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
  /* FORMULARIO PARA CREAR CATEGORIAS */
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

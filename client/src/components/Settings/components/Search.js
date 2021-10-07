import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProducts } from "../../../actions";
import { SearchContainer } from "../../../css/SettingStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    setName((prevState) => {
      dispatch(getNameProducts(prevState));
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameProducts(name));
    setName("");
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      dispatch(getNameProducts(name));
      setName("");
    }
  }

  return (
    <SearchContainer>
      <div className="input">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={name}
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="icon"
          onClick={(e) => handleSubmit(e)}
        ></FontAwesomeIcon>
      </div>
    </SearchContainer>
  );
}

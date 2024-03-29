import PropTypes from "prop-types";

import "../scss/Filters.scss";

function Filters({ handleFilter, filteredQuote }) {
  const handleInputQuote = (event) => {
    event.preventDefault();
    handleFilter("quote", event.currentTarget.value);
  };

  const handleInputCharacter = (event) => {
    event.preventDefault();
    handleFilter("character", event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Filtrar por frase:</h2>
      <label htmlFor="quote"></label>
      <input
        type="text"
        name="quote"
        id="quote"
        placeholder="Frase..."
        onInput={handleInputQuote}
      />
      <h2>Filtrar por personaje:</h2>
      <label htmlFor="character"></label>
      <select name="character" id="character" onInput={handleInputCharacter}>
        <option value={"Todos"}>Todos</option>
        <option value={"Ross"}>Ross</option>
        <option value={"Monica"}>Monica</option>
        <option value={"Joey"}>Joey</option>
        <option value={"Phoebe"}>Phoebe</option>
        <option value={"Chandler"}>Chandler</option>
        <option value={"Rachel"}>Rachel</option>
      </select>
    </form>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;

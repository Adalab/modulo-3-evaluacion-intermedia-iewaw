function Filters({ handleFilter }) {
  const handleInputQuote = (event) => {
    handleFilter(event.currentTarget.value);
  };

  return (
    <form className="form">
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
      <select name="character" id="character">
        <option>Todos</option>
        <option>Ross</option>
        <option>Monica</option>
        <option>Joey</option>
        <option>Phoebe</option>
        <option>Chandler</option>
        <option>Rachel</option>
      </select>
    </form>
  );
}

export default Filters;

function Filters() {
  const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Checking the form");
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <h2>Filtrar por frase:</h2>
      <label htmlFor="phrase"></label>
      <input type="text" name="phrase" id="phrase" placeholder="Frase..." />
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

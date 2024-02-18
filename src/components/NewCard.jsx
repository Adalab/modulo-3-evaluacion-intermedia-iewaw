import React, { useState } from "react";
import PropTypes from "prop-types";

import "../scss/NewCard.scss";

function NewCard({ setQuotes }) {
  const [newQuote, setNewQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newQuote.trim() !== "" && author.trim() !== "") {
      setQuotes((originalQuotes) => [
        ...originalQuotes,
        { quote: newQuote, character: author },
      ]);
      setNewQuote("");
      setAuthor("");
    }
  };

  return (
    <div className="newCard">
      <h2>¡Añade una nueva frase!</h2>
      <form className="newCard__form" onSubmit={handleSubmit}>
        <label htmlFor="newQuote">Escribe la frase: </label>
        <div className="newForm__input">
          <input
            type="text"
            name="newQuote"
            id="newQuote"
            value={newQuote}
            onChange={(event) => setNewQuote(event.target.value)}
          ></input>
        </div>
        <label htmlFor="author">El personaje: </label>
        <div className="newForm__input">
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          ></input>
        </div>
        <button type="submit">AÑADE</button>
      </form>
    </div>
  );
}

export default NewCard;

NewCard.propTypes = {
  setQuotes: PropTypes.func.isRequired,
};

import { useState } from "react";

import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";

import dataQuotes from "../data/quotes.json";

import "../scss/App.scss";

function App() {
  const [quotes] = useState(dataQuotes);
  const [filteredQuote, setFilteredQuote] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("Todos");

  const filteredQuotes = quotes
    .filter((quote) =>
      quote.quote.toLowerCase().includes(filteredQuote.toLowerCase())
    )
    .filter((quote) =>
      selectedCharacter === "Todos"
        ? true
        : quote.character === selectedCharacter
    );

  const handleSearch = (filterType, value) => {
    switch (filterType) {
      case "quote":
        setFilteredQuote(value);
        break;
      case "character":
        setSelectedCharacter(value);
        break;
    }
  };

  return (
    <div className="body">
      <Header />
      <Filters handleFilter={handleSearch} filteredQuote={filteredQuote} />
      <QuotesList quotes={filteredQuotes} />
    </div>
  );
}

export default App;

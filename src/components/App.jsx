import { useState } from "react";
import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";

import dataQuotes from "../data/quotes.json";

function App() {
  const [quotes] = useState(dataQuotes);
  const [filteredQuote, setFilteredQuote] = useState("");
  const [selectedCharacted, setSelectedCharacter] = useState("Todos");

  const filteredQuotes = quotes
    .filter((quote) =>
      quote.quote.toLowerCase().includes(filteredQuote.toLowerCase())
    )
    .filter((quote) =>
      selectedCharacted === "Todos"
        ? true
        : quote.character === selectedCharacted
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
      <Filters handleFilter={handleSearch} />
      <QuotesList quotes={filteredQuotes} />
    </div>
  );
}

export default App;

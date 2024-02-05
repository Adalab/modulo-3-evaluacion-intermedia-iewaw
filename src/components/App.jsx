import { useState } from "react";
import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";

import dataQuotes from "../data/quotes.json";

function App() {
  const [quotes] = useState(dataQuotes);
  const [filteredQuote, setFilteredQuote] = useState("");

  const filteredQuotes = quotes.filter((quote) =>
    quote.quote.includes(filteredQuote)
  );

  const handleSearch = (value) => {
    setFilteredQuote(value);
  };

  return (
    <div>
      <Header />
      <Filters handleFilter={handleSearch} />
      <QuotesList quotes={filteredQuotes} />
    </div>
  );
}

export default App;

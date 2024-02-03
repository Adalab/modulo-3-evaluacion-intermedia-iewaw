import { useState } from "react";
import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";

import dataPhrases from "../data/phrases.json";

function App() {
  const [phrases, setPhrases] = useState(dataPhrases);

  return (
    <div>
      <Header />
      <Filters />
      <QuotesList phrases={phrases} />
    </div>
  );
}

export default App;

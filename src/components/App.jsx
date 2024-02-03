import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";

function App() {
  return (
    <div>
      <Header />
      <Filters />
      <QuotesList />
    </div>
  );
}

export default App;

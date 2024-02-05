import QuoteItem from "./QuoteItem";
import PropTypes from "prop-types";

function QuotesList({ quotes }) {
  const renderedQuotes = quotes.map((quote, index) => (
    <li key={index} className="quoteLi">
      <QuoteItem quote={quote.quote} character={quote.character} />
    </li>
  ));

  return <ul className="quotesList">{renderedQuotes}</ul>;
}

QuotesList.propTypes = {
  phrases: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      character: PropTypes.string,
    })
  ),
};

export default QuotesList;

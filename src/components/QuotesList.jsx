import QuoteItem from "./QuoteItem";
import PropTypes from "prop-types";

function QuotesList({ phrases }) {
  const renderedQuotes = phrases.map((phrase, index) => (
    <li key={index} class="quoteLi">
      <QuoteItem quote={phrase.quote} character={phrase.character} />
    </li>
  ));

  return <ul class="quotesList">{renderedQuotes}</ul>;
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

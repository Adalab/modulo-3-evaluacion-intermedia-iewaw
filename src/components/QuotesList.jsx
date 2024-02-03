import QuoteItem from "./QuoteItem";

function QuotesList(props) {
  return <>{props.phrases.map((phrase) => console.log(phrase))}</>;
}

export default QuotesList;

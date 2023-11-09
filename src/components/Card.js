import "./Card.css";

function Card(props) {
  // props = {quote: "str" , author:"str"}
  return (
    <div id="cardContainer">
      <div id="qoute"> {props.quote} </div>
      <div id="author"> ...{props.author}</div>
    </div>
  );
}

export default Card;

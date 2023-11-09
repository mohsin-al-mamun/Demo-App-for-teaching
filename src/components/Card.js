import "./Card.css";

function Card(props) {
  return (
    <div id="cardContainer">
      <div id="qoute"> {props.qoute} </div>
      <div id="author"> ...{props.author}</div>
    </div>
  );
}

export default Card;

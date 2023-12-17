import "./Card.css";

function Card(props) {
  return (
    <div id="center">
      <div> {props.name} </div>
      <div>{props.designation}</div>
    </div>
  );
}

export default Card;

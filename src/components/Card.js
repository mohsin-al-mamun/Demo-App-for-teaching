import "./Card.css";

function Card(props) {
  return (
    <div id="center">
      <div> {props.name} </div>
      <div>{props.email}</div>
    </div>
  );
}

export default Card;

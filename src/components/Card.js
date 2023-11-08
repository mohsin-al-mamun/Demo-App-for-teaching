import "./Card.css";

function Card(props) {
  //  props = {name:"Mohsin", designation:"Software Developer" }
  return (
    <div id="center">
      <div> {props.name} </div>
      <div>{props.designation}</div>
    </div>
  );
}

export default Card;

import "./Son.css";

function Son(props) {
  return (
    <div id="son">
      <div>{props.info.name}</div>
      <div>{props.info.designation}</div>
    </div>
  );
}

export default Son;

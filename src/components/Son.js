import "./Son.css";

function Son(props) {
  return (
    // props = {info: {name:"Mohsin", designation:"Software Developer"}}
    <div id="son">
      <div>{props.info.name}</div>
      <div>{props.info.designation}</div>
    </div>
  );
}

export default Son;

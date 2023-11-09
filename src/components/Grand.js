import "./Grand.css";
import Father from "./Father";

function Grand() {
  const info = { name: "Mohsin", designation: "Software Developer" };
  return (
    <div id="grand">
      <Father info={info} />
    </div>
  );
}

export default Grand;

//  <Card name="Mohsin"  isMarried= false age=31 >      props = { name:"Mohsin", isMarried:false, age:31}
// functin Card (props) {  <p> {props.name} </p>}

//  <Card info = {info} >      props = {info: info}    ---  info={name:"Mohsin", designation:"Software Developer"}
// functin Card (props) {  <p> {props.info.name} </p>}

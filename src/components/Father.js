import "./Father.css";
import Son from "./Son";
function Father(props) {
  // props = { propsF: info}                               props = {value:5 }
  return (
    <div id="father">
      <Son info={props.info} />
      {/* props = {propsS:props.propsF.info } */}
    </div>
  );
}

export default Father;

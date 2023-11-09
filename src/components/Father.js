import "./Father.css";
import Son from "./Son";
function Father(props) {
  // props = { info: info}                               props = {value:5 }
  return (
    <div id="father">
      <Son info={props.info} />
    </div>
  );
}

export default Father;

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

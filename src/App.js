import "./App.css";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import { arrayOfQuotes } from "./data";

function App() {
  return (
    <div id="container ">
      <div id="header"> Famous Qoutes </div>
      <div id="Cardcontainer">
        {arrayOfQuotes.map((item) => {
          return <Card quote={item.quote} author={item.author} />;
        })}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}

export default App;

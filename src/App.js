import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div id="container ">
      <div id="header"> Famous Qoutes </div>
      <div id="Cardcontainer">
        <Card
          qoute="It is during our darkest moments that we must focus to see the light."
          author=" Aristotle"
        />
      </div>
    </div>
  );
}

export default App;

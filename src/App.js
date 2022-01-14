import Navbar from "./components/Navbar";
import Card from "./components/Card";
// import data from "../data";

function App(props) {

  // const card = data.map((value) => {
  //   console.info(value)
  // })

  return (
    <div className="container">
      <Navbar />
      <div className="app--card">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {

  const card = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  console.log(card)

  return (
    <div className="container">
      <Navbar />
      <div className="app--card">
        {card}
      </div>
    </div>
  );
}

export default App;

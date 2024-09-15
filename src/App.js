import "./App.css";

function App() {
  const groceries = ["Broccoli", "Kale", "Sweet potatoes"];

  return (
    <ul>
      {groceries.map((groceryItem) => {
        return <li key={groceryItem}>{groceryItem}</li>;
      })}
    </ul>
  );
}

export default App;

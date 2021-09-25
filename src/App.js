import "./App.css";
import { Cart } from "./Component/Cart/Cart";
import { Header } from "./Component/Header/Header";
import { Shop } from "./Component/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Shop />
      </div>
    </div>
  );
}

export default App;

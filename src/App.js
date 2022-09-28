import { useState } from "react";
import Navbar from "./components/Navbar";
import RouteSwitch from "./components/RouteSwitch";

function App() {
  const [cart, setCart] = useState([]);

  return <RouteSwitch cart={[cart, setCart]} />;
}

export default App;

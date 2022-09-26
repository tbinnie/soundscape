import Landing from "./components/landing/Landing";
import Shop from "./components/shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

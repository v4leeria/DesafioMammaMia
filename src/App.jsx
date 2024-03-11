import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detalle from "./views/Detalle";
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import { Provider } from "./contexto/PizzaContexto";
import Error404 from "./views/Error404";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detalle/:id" element={<Detalle />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

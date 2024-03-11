import { useState, useEffect, createContext } from "react";

const PizzaContexto = createContext();

export const Provider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [precio, setPrecio] = useState([]);
  const [total, setTotal] = useState(0);

  const getData = async () => {
    const res = await fetch("./pizzas.json");
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const globalState = {
    pizzas,
    carrito,
    precio,
    setCarrito,
    setPrecio,
    total,
    setTotal,
  };

  return (
    <PizzaContexto.Provider value={globalState}>
      {children}
    </PizzaContexto.Provider>
  );
};
export default PizzaContexto;

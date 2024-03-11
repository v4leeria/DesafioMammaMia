import { useContext } from "react";

import PizzaContexto from "../contexto/PizzaContexto";

const Carrito = () => {
  const { carrito, total } = useContext(PizzaContexto);

  return (
    <div className="carrito">
      <h1>¡Llevas estas ricas pizzas!</h1>
      <table className="tablaCarrito">
        <thead>
          <tr>
            <th>Pizza</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((pizza) => (
            <tr key={pizza.id}>
              <td>
                <img src={pizza.img} alt={pizza.name} />
              </td>
              <td>{pizza.name}</td>
              <td>${pizza.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${total}</h4>
    </div>
  );
};

export default Carrito;

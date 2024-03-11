import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PizzaContexto from "../contexto/PizzaContexto";

const Detalle = () => {
  const { id } = useParams();
  const { pizzas, setCarrito, setTotal } = useContext(PizzaContexto);

  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) {
    return <h1>No encontramos la pizza que buscas :/</h1>;
  }

  const { name, img, ingredients, price } = pizza;

  const agregarAlCarrito = () => {
    setCarrito((carritoOriginal) => [...carritoOriginal, pizza]);
    setTotal((totalOriginal) => totalOriginal + price);
  };

  return (
    <div className="containerDetalle">
      <img src={img} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>{pizza.desc}</p>
        <h2>Ingredientes</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2>
          <strong>Precio: $ {price}</strong>
        </h2>
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Detalle;

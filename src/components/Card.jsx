import { Link } from "react-router-dom";
import { useContext } from "react";
import PizzaContexto from "../contexto/PizzaContexto";

const Card = ({ pizza }) => {
  const { setCarrito, setTotal } = useContext(PizzaContexto);
  const { id, name, img, ingredients, price } = pizza;

  const agregarAlCarrito = () => {
    setCarrito((carritoOrigal) => [...carritoOrigal, pizza]);
    setTotal((totalOriginal) => totalOriginal + price);
  };
  return (
    <div className="containerCard">
      <div className="imagencard">
        <img src={img} alt={name} />
      </div>
      <div className="carddetail">
        <h2>{name}</h2>
        <hr />
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>
          <strong>Precio: $ {price}</strong>
        </p>
        <Link to={`/Detalle/${id}`}>
          <button className="verMas">Ver más</button>
        </Link>
        <button className="agregarCarrito" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Card;

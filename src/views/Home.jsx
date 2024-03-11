import PizzaContexto from "../contexto/PizzaContexto";
import Card from "./../components/Card";
import { useContext } from "react";

const Home = () => {
  const { pizzas } = useContext(PizzaContexto);

  return (
    <>
      <header className="header">
        <h1>¡Pizzeria Mamma Mia!</h1>
        <p>Las mejores pizzas de Santiago</p>
      </header>

      <h2>Escoge tus pizzas favoritas</h2>

      <div className="containerPizzas">
        {pizzas.map((pizza, index) => (
          <Card key={index} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default Home;

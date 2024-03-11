import { useContext } from "react";
import PizzaContexto from "../contexto/PizzaContexto";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "unactive");
  const { total } = useContext(PizzaContexto);
  return (
    <>
      <div className="navbar">
        <div>
          <NavLink to="/" className={setActiveClass}>
            <img src="src/assets/logo.png" alt="" className="logo" />
          </NavLink>
        </div>
        <div>
          <img src="src/assets/carrito.png" alt="" className="iconos" />
          <NavLink to="/Carrito" className={setActiveClass}>
            Carrito: $ {total}
          </NavLink>
        </div>
      </div>
    </>
  );
}

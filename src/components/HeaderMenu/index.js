import { Link } from "react-router-dom";
import { HeaderMenuNav } from "./styles";

export const HeaderMenu = () => {
  return (
    <HeaderMenuNav>
      <ul>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/description">Descrição</Link>
        </li>
      </ul>
    </HeaderMenuNav>
  );
};

import CartWidget from '../components/CartWidget';
import mayjuLogo from '../../assets/mayjuLogoBlanco.png';

const NavBar = () => {
  return (
    <div>
      <header>
        <a href="/">
          <img src={mayjuLogo} alt="Logo mayju en color blanco" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="">SELLOS AUTOMÁTICOS</a>
            </li>
            <li>
              <a href="">SELLOS MANUALES</a>
            </li>
            <li>
              <a href="">SELLOS DE LACRE</a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </div>
  )
}

export default NavBar;

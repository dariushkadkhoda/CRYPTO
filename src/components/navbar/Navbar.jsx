import "./Navbar.scss";
import Logo from "../../assets/img/Logo.png"

export const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <a href="#" className="navbar__logo">
          <img src={Logo} alt="Logo"  />
        </a>
        <ul>
          <li><a href="#">product</a></li>
          <li><a href="#">compony</a></li>
          <li><a href="#">prices</a></li>
          <li><a href="#">blog</a></li>
        </ul>
        <div className="navbar__btns">
          <a href="login"></a>
          <a href="" className="btn">register</a>
        </div>
      </nav>
    </header>
  )
}

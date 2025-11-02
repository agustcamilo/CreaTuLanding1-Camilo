import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">ByteStore</div>

      <nav className="navbar__links">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </nav>

      {}
      <CartWidget count={2} />
    </header>
  );
}

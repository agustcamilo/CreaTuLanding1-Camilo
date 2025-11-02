export default function CartWidget({ count = 0 }) {
  return (
    <button className="cart" aria-label="Carrito de compras">
      <span role="img" aria-hidden="true">
        🛒
      </span>
      {count > 0 && <span className="cart__badge">{count}</span>}
    </button>
  );
}

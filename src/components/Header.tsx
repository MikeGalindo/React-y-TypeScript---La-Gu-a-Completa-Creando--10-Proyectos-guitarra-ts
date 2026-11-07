import type { ICarritoItem } from "../interface";

type HeaderProps = {
  carrito: ICarritoItem[];
  onDecrementCantidad: (guitarra: ICarritoItem) => void;
  onIncrementCantidad: (guitarra: ICarritoItem) => void;
  onRemoveFromCarrito: (guitarra: ICarritoItem) => void;
  onClearCarrito: () => void;
  isEmpty: boolean;
  totalPagar: number;
};

const Header = ({
  carrito,
  onDecrementCantidad,
  onIncrementCantidad,
  onRemoveFromCarrito,
  onClearCarrito,
  isEmpty,
  totalPagar,
}: HeaderProps) => {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" src="img/logo.svg" alt="imagen logo" />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {isEmpty && (
                  <p className="text-center">El carrito esta vacio</p>
                )}
                {!isEmpty && (
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {carrito.map((guitarra, index) => (
                        <tr key={`guitarra-${index}`}>
                          <td>
                            <img
                              className="img-fluid"
                              src={`img/${guitarra.image}.jpg`}
                              alt={`imagen guitarra ${guitarra.name}`}
                            />
                          </td>
                          <td>{guitarra.name}</td>
                          <td className="fw-bold">${guitarra.price}</td>
                          <td className="flex align-items-start gap-4">
                            <button
                              type="button"
                              className="btn btn-dark"
                              onClick={() => onDecrementCantidad(guitarra)}
                            >
                              -
                            </button>
                            {guitarra.cantidad}
                            <button
                              type="button"
                              className="btn btn-dark"
                              onClick={() => onIncrementCantidad(guitarra)}
                            >
                              +
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              type="button"
                              onClick={() => onRemoveFromCarrito(guitarra)}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <p className="text-end">
                  Total pagar: <span className="fw-bold">${totalPagar}</span>
                </p>
                <button
                  className="btn btn-dark w-100 mt-3 p-2"
                  onClick={onClearCarrito}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;

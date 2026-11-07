import Header from "./components/Header";
import Guitarra from "./components/Guitarra";
import useCarrito from "./hooks/useCarrito";
const App = () => {
  const {
    carrito,
    guitarras,
    isEmpty,
    totalPagar,
    agregarAlCarrito,
    onRemoveFromCarrito,
    onDecrementCantidad,
    onIncrementCantidad,
    onClearCarrito,
  } = useCarrito();
  return (
    <>
      <Header
        carrito={carrito}
        onDecrementCantidad={onDecrementCantidad}
        onIncrementCantidad={onIncrementCantidad}
        onRemoveFromCarrito={onRemoveFromCarrito}
        onClearCarrito={onClearCarrito}
        isEmpty={isEmpty}
        totalPagar={totalPagar}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitarras.map((guitarra, index) => (
            <Guitarra
              key={index}
              Guitarra={guitarra}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;

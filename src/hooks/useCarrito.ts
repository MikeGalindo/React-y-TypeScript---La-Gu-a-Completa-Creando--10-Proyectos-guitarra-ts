import { useState, useEffect,useMemo } from "react";
import { db } from "../data/db";
import type { IGuitar, ICarritoItem } from "../interface";


const useCarrito = () => {
  const initialCarrito = () => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  };
  const [guitarras, setGuitarras] = useState<IGuitar[]>([]);
  const [carrito, setCarrito] = useState<ICarritoItem[]>(initialCarrito);
  const agregarAlCarrito = (guitarra: IGuitar) => {
    if (carrito.some((item) => item.id === guitarra.id)) {
      setCarrito(
        carrito.map((item) =>
          item.id === guitarra.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        ),
      );
    } else {
      const nuevoItem: ICarritoItem = { ...guitarra, cantidad: 1 };
      setCarrito([...carrito, nuevoItem]);
    }
  };
  const onRemoveFromCarrito = (guitarra: ICarritoItem) => {
    setCarrito(carrito.filter((item) => item.id !== guitarra.id));
  };
  const onDecrementCantidad = (guitarra: ICarritoItem) => {
    if (guitarra.cantidad === 1) {
      onRemoveFromCarrito(guitarra);
    } else {
      setCarrito(
        carrito.map((item) =>
          item.id === guitarra.id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item,
        ),
      );
    }
  };
  const onIncrementCantidad = (guitarra: ICarritoItem) => {
    setCarrito(
      carrito.map((item) =>
        item.id === guitarra.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item,
      ),
    );
  };
  const onClearCarrito = () => {
    setCarrito([]);
  };
  //state derivado
  const isEmpty = carrito.length === 0;
  const totalPagar = useMemo(
    () =>
      carrito.reduce(
        (total, guitarra) => total + guitarra.price * guitarra.cantidad,
        0,
      ),
    [carrito],
  );
  useEffect(() => {
    // Aquí puedes realizar la lógica para obtener las guitarras desde una API o cualquier otra fuente de datos
    setGuitarras(db);
  }, []);
  useEffect(() => {
    // carrito Actual
    const carritoActual = JSON.stringify(carrito);
    if (carritoActual !== localStorage.getItem("carrito")) {
      localStorage.setItem("carrito", carritoActual);
    }
  }, [carrito]);

  return {
    carrito,
    guitarras,
    isEmpty,
    totalPagar,
    agregarAlCarrito,
    onRemoveFromCarrito,
    onDecrementCantidad,
    onIncrementCantidad,
    onClearCarrito,
  };
};

export default useCarrito;

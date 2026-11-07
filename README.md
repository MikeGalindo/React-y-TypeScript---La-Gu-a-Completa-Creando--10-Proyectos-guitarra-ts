# GuitarLA — React + TypeScript

Aplicación de carrito de compras para una tienda de guitarras. Es un proyecto de práctica que nace del curso **"React y TypeScript - La Guía Completa Creando +10 Proyectos"** y que uso como punto de partida para **reafirmar y actualizar mis conocimientos en los stacks PERN y MERN**.

> **Estado actual:** la implementación disponible es el frontend en React + TypeScript + Vite. El backend (Express/Node) y la base de datos (PostgreSQL o MongoDB) forman parte de la siguiente etapa del proyecto, no de lo que ya está construido.

## Propósito

El objetivo no es solo completar el ejercicio del curso, sino usar una base conocida para practicar, de extremo a extremo, las piezas que uso en mi trabajo diario como desarrollador full stack:

- Modelado de datos y contratos tipados.
- Consumo de una API REST propia.
- Persistencia real en PostgreSQL (PERN) y MongoDB (MERN).
- Separación de responsabilidades entre frontend, backend y datos.
- Pruebas, validación y documentación del cambio.

La aplicación del curso permite concentrarse en el frontend mientras se itera el backend, de modo que el mismo producto se pueda resolver dos veces: una con PostgreSQL y otra con MongoDB.

## Funcionalidades actuales

- Catálogo de 12 guitarras con nombre, imagen, descripción y precio.
- Agregar productos al carrito.
- Incrementar y decrementar cantidades.
- Eliminar un producto del carrito.
- Vaciar el carrito por completo.
- Cálculo del total a pagar.
- Estado vacío del carrito.
- Persistencia del carrito en `localStorage`.
- Tipado estricto de datos, props y estado con TypeScript.

## Stack

| Capa | Tecnología |
|---|---|
| UI | React 19 |
| Lenguaje | TypeScript |
| Build / dev server | Vite |
| Estilos | Bootstrap (clases) + CSS propio |
| Estado | Hooks de React (`useState`, `useEffect`, `useMemo`) |
| Persistencia actual | `localStorage` |

**Objetivo de stack:** PERN (PostgreSQL, Express, React, Node.js) y MERN (MongoDB, Express, React, Node.js).

## Estructura

```text
src/
├── assets/               # Recursos del proyecto
├── components/
│   ├── Guitarra.tsx      # Tarjeta de producto y acción de agregar
│   └── Header.tsx        # Carrito, cantidades, total y vaciado
├── data/
│   └── db.ts             # Catálogo local de guitarras
├── hooks/
│   └── useCarrito.ts     # Lógica y estado del carrito
├── interface/
│   └── index.ts          # Tipos IGuitar e ICarritoItem
├── App.tsx               # Composición de la vista
├── index.css             # Estilos base
└── main.tsx              # Punto de entrada
```

### Decisiones de implementación

- **Lógica centralizada en `useCarrito`:** el componente `App` solo compone; el estado y las operaciones del carrito viven en un hook reutilizable.
- **Tipos explícitos:** `IGuitar` describe el producto y `ICarritoItem` se deriva con `Omit<IGuitar, "description">` más `cantidad`, evitando duplicar la forma del dato.
- **Estado derivado:** `isEmpty` y `totalPagar` se calculan a partir del carrito; el total usa `useMemo` para no recalcular en cada render innecesariamente.
- **Sincronización con `localStorage`:** el carrito se inicializa desde el almacenamiento y se guarda en un `useEffect`, comparando antes el valor para evitar escrituras redundantes.
- **Cantidad mínima uno:** decrementar cuando la cantidad es 1 elimina el producto.

## Cómo ejecutar

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

La aplicación queda disponible en la URL que indique Vite (por defecto `http://localhost:5173`).

### Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Compila TypeScript y genera el build de producción |
| `npm run preview` | Sirve localmente el build generado |
| `npm run lint` | Ejecuta ESLint |

## Ruta de aprendizaje: hacia PERN y MERN

El plan es evolucionar este mismo dominio (catálogo + carrito) sin reescribir la interfaz:

1. **API REST con Express + TypeScript**
   - Endpoints de productos y carrito.
   - Validación de payloads y manejo de errores.
   - Variables de entorno y configuración por ambiente.
2. **Persistencia con PostgreSQL (PERN)**
   - Modelo relacional de productos, carrito y detalle.
   - Consultas parametrizadas y transacciones.
   - Migraciones y datos de prueba.
3. **Persistencia con MongoDB (MERN)**
   - Modelos con Mongoose.
   - Comparación de decisiones entre modelado relacional y documental.
4. **Integración frontend ↔ backend**
   - Reemplazo de `db.ts` y `localStorage` por llamadas HTTP.
   - Estados de carga, error y reintento.
   - Tipos compartidos entre cliente y servidor.
5. **Calidad y entrega**
   - Pruebas de componentes y de API.
   - Lint, build y despliegue.
   - Documentación de decisiones técnicas.

El avance se registrará por etapas, manteniendo la aplicación funcional en cada una.

## Contexto profesional

Este repositorio forma parte de mi plan de actualización técnica. Mi experiencia principal está en aplicaciones empresariales con **SQL Server, Node.js, PHP (CodeIgniter) y React**; aquí busco trasladar esas bases a PostgreSQL y MongoDB, y reforzar el desarrollo full stack con TypeScript de punta a punta.

**Miguel Ángel Galindo Mora**
Desarrollador Full Stack Senior

- GitHub: [github.com/MikeGalindo](https://github.com/MikeGalindo)
- LinkedIn: [linkedin.com/in/angel-galindo-42aba1262](https://www.linkedin.com/in/angel-galindo-42aba1262)
- Correo: [angel460grd@gmail.com](mailto:angel460grd@gmail.com)

## Créditos

Proyecto basado en el curso **"React y TypeScript - La Guía Completa Creando +10 Proyectos"**. El código se ha adaptado y documentado como material de práctica y actualización profesional.

## Licencia

Uso educativo y de portafolio personal. Las imágenes y recursos del curso pertenecen a sus autores originales.

import { Alumno } from "./Alumno";
import { Avatar } from "./Avatar";

// Componente que renderiza una lista de tarjetas de alumnos
// Recibe: datosAlumnos (array de objetos alumno)
export function ListaAlumnos({ datosAlumnos }) {
  return (
    // Mapea cada alumno y crea un componente Alumno por cada uno
    datosAlumnos.map((alumno, index) => (
      <Alumno
        nombre={alumno.nombre}
        apellido={alumno.apellido}
        grupo={alumno.grupo}
        promocion={alumno.promocion}
        key={index}
      >
        {/* Avatar se pasa como children */}
        <Avatar img={alumno.img} />
      </Alumno>
    ))
  );
}

import { Alumno } from "./Alumno";
import { Avatar } from "./Avatar";

// Componente que renderiza una lista de tarjetas de alumnos
// Recibe: datosAlumnos (array de objetos alumno)
export function ListaAlumnos({
  datosAlumnos,
  isAdmin,
  abrirModal,
  eliminarAlumno,
}) {
  return (
    // Mapea cada alumno y crea un componente Alumno por cada uno
    datosAlumnos.map((alumno) => (
      <Alumno
        nombre={alumno.nombre}
        apellidos={alumno.apellidos}
        ciclo={alumno.ciclo}
        promocion={alumno.promocion}
        key={alumno.id}
        isAdmin={isAdmin}
        abrirModal={() => abrirModal(alumno)}
        eliminarAlumno={() => eliminarAlumno(alumno.id)}
      >
        {/* Avatar se pasa como children */}
        <Avatar urlImagen={alumno.urlImagen} />
      </Alumno>
    ))
  );
}

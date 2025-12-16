// Componente que renderiza la imagen del alumno
export function Avatar({ img }) {
  return (
    <img
      src={img}
      alt="Avatar del alumno"
      className="w-full h-full object-cover"
    />
  );
}

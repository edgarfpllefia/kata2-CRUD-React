// Componente que renderiza la imagen del alumno
export function Avatar({ urlImagen }) {
  return (
    <img
      src={urlImagen}
      alt="Avatar del alumno"
      className="w-full h-full object-cover"
    />
  );
}

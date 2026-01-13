import { useState, useEffect } from "react";

export function FormularioAlumno({ alumno, cerrarModal, guardarCambios }) {
  const [nombre, setNombre] = useState(alumno.nombre);
  const [apellido, setApellido] = useState(alumno.apellido);
  const [promocion, setPromocion] = useState(alumno.promocion);
  const [grupo, setGrupo] = useState(alumno.grupo);
  const [img, setImg] = useState(alumno.img);

  // Bloquear scroll cuando se monta el modal
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    const alumnoEditado = {
      nombre,
      apellido,
      promocion,
      grupo,
      img,
    };

    guardarCambios(alumnoEditado);

    cerrarModal();

    console.log("Formulario enviado");
  };

  return (
    // Fondo semitransparente que deja ver el anuario detrás
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(100, 116, 139, 0.25)" }}
    >
      {/* Contenedor blanco del formulario */}
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
        {/* Botón cerrar */}
        <button
          onClick={cerrarModal}
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Editar Alumno</h2>

        <form onSubmit={handleForm} className="space-y-4">
          <fieldset>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="apellido"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Apellido:
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="promocion"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Promoción:
            </label>
            <input
              type="text"
              id="promocion"
              name="promocion"
              value={promocion}
              onChange={(e) => setPromocion(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="grupo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Grupo:
            </label>
            <input
              type="text"
              id="grupo"
              name="grupo"
              value={grupo}
              onChange={(e) => setGrupo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Imagen URL:
            </label>
            <input
              type="text"
              id="img"
              name="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}

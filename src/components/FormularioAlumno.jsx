import { useState, useEffect } from "react";

export function FormularioAlumno({
  alumno,
  cerrarModal,
  guardarCambios,
  isNew,
}) {
  const [nombre, setNombre] = useState(alumno?.nombre || "");
  const [apellidos, setApellidos] = useState(alumno?.apellidos || "");
  const [email, setEmail] = useState(alumno?.email || "");
  const [promocion, setPromocion] = useState(alumno?.promocion || "");
  const [ciclo, setCiclo] = useState(alumno?.ciclo || "");
  const [urlImagen, setUrlImagen] = useState(alumno?.urlImagen || "");

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
      apellidos,
      email,
      promocion,
      ciclo,
      urlImagen,
    };

    guardarCambios(alumnoEditado);
    cerrarModal();
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

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {isNew ? "Crear Alumno" : "Editar Alumno"}
        </h2>

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
              htmlFor="apellidos"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Apellidos:
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              htmlFor="ciclo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ciclo:
            </label>
            <select
              id="ciclo"
              name="ciclo"
              value={ciclo}
              onChange={(e) => setCiclo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecciona un ciclo</option>
              <option value="DAW">DAW</option>
              <option value="SMX">SMX</option>
              <option value="ARI">ARI</option>
              <option value="IEA">IEA</option>
            </select>
          </fieldset>
          <fieldset>
            <label
              htmlFor="urlImagen"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              URL Imagen:
            </label>
            <input
              type="text"
              id="urlImagen"
              name="urlImagen"
              value={urlImagen}
              onChange={(e) => setUrlImagen(e.target.value)}
              placeholder="https://i.pravatar.cc/150?img=1"
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

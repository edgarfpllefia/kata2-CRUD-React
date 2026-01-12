export function Alumno({
  nombre,
  apellido = "santo",
  grupo,
  promocion,
  children,
  isAdmin,
  abrirModal,
  eliminarAlumno,
}) {
  return (
    <div className="w-64 bg-white border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Avatar container */}
      <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto border-4 border-gray-100">
        {children}
      </div>

      {/* Nombre del alumno */}
      <h4 className="text-2xl font-bold text-gray-800 mb-1 capitalize">
        {nombre} {apellido}
      </h4>

      {/* Info del grupo y promoción */}
      <div className="flex flex-col gap-1 mt-3">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          {grupo}
        </span>
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          {promocion}
        </span>
      </div>
      {isAdmin && (
        <>
          <button
            className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-300"
            onClick={abrirModal}
          >
            Editar Alumno
          </button>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
            onClick={eliminarAlumno}
          >
            Eliminar Alumno
          </button>
        </>
      )}
    </div>
  );
}

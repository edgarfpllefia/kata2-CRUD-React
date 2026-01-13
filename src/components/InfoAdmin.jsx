export function InfoAdmin(props) {
  const { usuario, isAdmin } = props;

  return (
    <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
      {isAdmin && (
        <span className="text-xs font-semibold text-white bg-indigo-600 px-2.5 py-1 rounded">
          ADMIN
        </span>
      )}
      <div className="flex flex-col">
        {isAdmin && (
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            Área de administración
          </span>
        )}
        <span className="text-sm text-gray-700">
          Bienvenido, <span className="font-semibold text-gray-900">{usuario}</span>
        </span>
      </div>
    </div>
  );
}

// Componente input controlado para buscar alumnos
export function ControlInput({nombre}){
    return(
        <input 
            onChange={(e) => nombre(e.target.value)} 
            type="text" 
            placeholder="Buscar por nombre o apellido..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
    )
}

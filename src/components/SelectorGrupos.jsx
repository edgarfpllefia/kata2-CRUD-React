// Componente selector de grupo
export function SelectorGrupos({datosGrupo, controlGrupo, grupo}){
    return(
        <select 
            onChange={controlGrupo} 
            value={grupo}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
            <option value="">Todos los grupos</option>
            {datosGrupo.map((data, index) => (
                <option value={data} key={index}>{data}</option>
            ))} 
        </select>
    )
}

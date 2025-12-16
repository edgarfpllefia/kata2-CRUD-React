// Componente selector de promoción
export function SelectorPromocion({datosPromo, controlPromocion, promocion}){
    return(
        <select 
            onChange={controlPromocion} 
            value={promocion}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
            <option value="">Todas las promociones</option>
            {datosPromo.map((data, index) => (
                <option value={data} key={index}>{data}</option>
            ))} 
        </select>
    )
}

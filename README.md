# 📚 Anuario de Alumnos en React

Una aplicación React que muestra una lista de alumnos organizados por promoción. Puedes seleccionar qué promoción ver y se filtran automáticamente los alumnos de esa promoción.

---

## 🔧 ¿Cómo funciona paso a paso?

### 1️⃣ **Los datos (App.jsx líneas 12-36)**

```javascript
const datosPromo = ["25/26", "26/27", "27/28"];
```
Define las 3 promociones disponibles.

```javascript
const datosAlumnos = [ { nombre, apellido, promocion, grupo, img }, ... ]
```
Lista de alumnos con sus datos. Cada alumno tiene una `promocion` asignada.

### 2️⃣ **El estado (App.jsx línea 14)**

```javascript
const [promocion, setPromocion] = useState(datosPromo[0]);
```
- `promocion` = promoción seleccionada actualmente (comienza con "25/26")
- `setPromocion` = función para cambiar la promoción seleccionada
- Cuando cambias el select, se actualiza aquí y se re-renderiza todo

### 3️⃣ **El filtro (App.jsx línea 40)**

```javascript
let alumnosFiltradosPromo = datosAlumnos.filter((alumno) => alumno.promocion === promocion);
```
- Coge todos los alumnos
- **Solo devuelve** los que tienen `promocion === "25/26"` (o la que hayas seleccionado)
- Es decir: si promocion = "26/27", solo muestra alumnos de 26/27

### 4️⃣ **El select (App.jsx líneas 49-52)**

```jsx
<select onChange={controlPromocion} value={promocion}>
    <option value="0">Selecciona la promocion</option>
    {datosPromo.map((data,index) => 
        (<option value={index} key={index}>Promocion: {data}</option>)
    )} 
</select>
```
- Cuando haces clic en una opción, ejecuta `controlPromocion`
- `value={promocion}` = muestra cuál está seleccionada
- `map()` = crea una `<option>` por cada promoción

### 5️⃣ **La función controlPromocion (App.jsx líneas 43-46)**

```javascript
function controlPromocion(e){
    console.log(e.target.value);
    setPromocion(datosPromo[e.target.value]);
}
```

⚠️ **AQUÍ HAY UN BUG:**
- `e.target.value` es `"0"`, `"1"` o `"2"` (el índice como string)
- `datosPromo[e.target.value]` busca `datosPromo["0"]` que da `"25/26"` ✅
- **PERO** si seleccionas "Selecciona la promocion", `value="0"` también, y puede causar confusión

### 6️⃣ **Renderizar alumnos (App.jsx línea 56)**

```jsx
<ListaAlumnos datosAlumnos={alumnosFiltradosPromo}/>
```
Pasa los alumnos filtrados a `ListaAlumnos.jsx` que:
- Itera cada alumno con `.map()`
- Renderiza un componente `<Alumno>` por cada uno
- Dentro pone un `<Avatar>` con la foto

---

## ❌ Problemas que tienes ahora

| Línea | Problema | Solución |
|-------|----------|----------|
| 2-3 | `reactLogo` y `viteLogo` importados pero no usados | Elimina esas líneas |
| 38 | `datosGrupos` definido pero nunca usado | Elimínalo o úsalo después |
| 43-46 | `controlPromocion` usa índice, confuso | Cambia a `setPromocion(e.target.value)` |
| 49 | Select sin `value` controlado | Añade `value={promocion}` |
| 51 | `value={index}` en option | Cambia a `value={data}` |
| 51 | Option "Selecciona..." con value="0" | Elimina esa opción |

---

## ✅ Código CORRECTO

```jsx
import { useState } from 'react'
import './App.css'
import { ListaAlumnos } from './listaAlumnos.jsx'

function App() {
  const datosPromo = ["25/26", "26/27", "27/28"];
  const [promocion, setPromocion] = useState(datosPromo[0]);
  
  const datosAlumnos = [
    {
        nombre: "pepe",
        apellido: "sanchez",
        promocion: "25/26",
        grupo: "DAW",
        img: "https://www.teleadhesivo.com/es/img/drball027-jpg/folder/products-listado-merchanthover/vinilos-infantiles-dragon-ball-son-goku-ataque-ii.jpg"
    },
    {
        nombre: "ana",
        apellido: "lopez",
        promocion: "26/27",
        grupo: "DAW2",
        img: "https://media.printler.com/media/photo/181053.jpg?rmode=crop&width=638&height=900"
    },
    {
        nombre: "maria",
        apellido: "gomez",
        promocion: "27/28",
        grupo: "DAW1",
        img: "https://dam.elcorteingles.es/producto/www-001044812100749-00.jpg?impolicy=Resize&width=1200&height=1200"
    }
  ];

  const alumnosFiltradosPromo = datosAlumnos.filter((alumno) => alumno.promocion === promocion);

  const controlPromocion = (e) => {
    setPromocion(e.target.value);
  }

  return (
    <>
      <h1>Promoción: {promocion}</h1>
      <select onChange={controlPromocion} value={promocion}>
        {datosPromo.map((data, index) => (
          <option key={index} value={data}>Promocion: {data}</option>
        ))}
      </select>
        
      <div className='flexCards'>
        <ListaAlumnos datosAlumnos={alumnosFiltradosPromo}/>      
      </div>
    </>
  )
}

export default App
```

---

## 🔄 Flujo completo

```
1. Usuario abre la app → promocion = "25/26" (inicial)
2. Usuario hace clic en select "Promocion: 26/27"
3. Se ejecuta controlPromocion → setPromocion("26/27")
4. React actualiza promocion a "26/27"
5. Filter recalcula: solo alumnos con promocion === "26/27"
6. Se renderiza ListaAlumnos con los nuevos alumnos
7. Pantalla se actualiza → ves los alumnos filtrados
```

---

## 📝 Resumen

- **datosPromo**: lista de promociones
- **promocion**: estado (cuál seleccionas en el select)
- **datosAlumnos**: lista completa de alumnos
- **alumnosFiltradosPromo**: solo los alumnos de la promoción seleccionada
- **controlPromocion**: cuando cambias el select, actualiza el estado `promocion`
- Todo se re-renderiza automáticamente

---

## 🚀 Cómo ejecutar

```bash
npm install
npm run dev
```

Abre el navegador en `http://localhost:5173` y verás la aplicación.

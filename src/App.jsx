import { useEffect, useState } from "react";
import "./App.css";
import { SelectorPromocion } from "./components/SelectorPromocion";
import { SelectorGrupos } from "./components/SelectorGrupos";
import { ListaAlumnos } from "./components/ListaAlumnos";
import { ControlInput } from "./components/ControlInput";
import { LoginForm } from "./components/LoginForm";
import { FormularioAlumno } from "./components/FormularioAlumno";
import { InfoAdmin } from "./components/InfoAdmin";

function App() {
  const [promocion, setPromocion] = useState("");
  const [grupo, setGrupo] = useState("");
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [logueado, setLogueado] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [alumnoEditar, setAlumnoEditar] = useState(null);
  const [isNew, setIsNew] = useState(false);

  const datosPromo = ["25/26", "26/27", "27/28"];

  const datosGrupos = ["DAW1", "SMX", "ARI", "IEA"];

  const usuarios = [
    { username: "admin", password: "123", role: "admin" },
    { username: "user", password: "123", role: "user" },
  ];

  const [datosAlumnos, setDatosAlumnos] = useState([
    {
      id: 1,
      nombre: "pepe",
      apellido: "sanchez",
      promocion: "25/26",
      grupo: "DAW1",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      nombre: "ana",
      apellido: "lopez",
      promocion: "26/27",
      grupo: "SMX",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      nombre: "raul",
      apellido: "gomez",
      promocion: "27/28",
      grupo: "ARI",
      img: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      nombre: "carlos",
      apellido: "martinez",
      promocion: "25/26",
      grupo: "IEA",
      img: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      nombre: "lucia",
      apellido: "rodriguez",
      promocion: "26/27",
      grupo: "DAW1",
      img: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 6,
      nombre: "jorge",
      apellido: "fernandez",
      promocion: "27/28",
      grupo: "SMX",
      img: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      nombre: "laura",
      apellido: "garcia",
      promocion: "25/26",
      grupo: "ARI",
      img: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      id: 8,
      nombre: "david",
      apellido: "moreno",
      promocion: "26/27",
      grupo: "IEA",
      img: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 9,
      nombre: "sofia",
      apellido: "jimenez",
      promocion: "27/28",
      grupo: "DAW1",
      img: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      id: 10,
      nombre: "miguel",
      apellido: "ruiz",
      promocion: "25/26",
      grupo: "SMX",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 11,
      nombre: "carmen",
      apellido: "diaz",
      promocion: "26/27",
      grupo: "ARI",
      img: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 12,
      nombre: "pablo",
      apellido: "hernandez",
      promocion: "27/28",
      grupo: "IEA",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 13,
      nombre: "elena",
      apellido: "alvarez",
      promocion: "25/26",
      grupo: "DAW1",
      img: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    {
      id: 14,
      nombre: "javier",
      apellido: "romero",
      promocion: "26/27",
      grupo: "SMX",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      id: 15,
      nombre: "raquel",
      apellido: "torres",
      promocion: "27/28",
      grupo: "ARI",
      img: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      id: 16,
      nombre: "antonio",
      apellido: "navarro",
      promocion: "25/26",
      grupo: "IEA",
      img: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      id: 17,
      nombre: "beatriz",
      apellido: "vazquez",
      promocion: "26/27",
      grupo: "DAW1",
      img: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      id: 18,
      nombre: "roberto",
      apellido: "castillo",
      promocion: "27/28",
      grupo: "SMX",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
    },
  ]);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    const roleGuardado = localStorage.getItem("role");

    if (usuarioGuardado) {
      setLogueado(true);
      setUsuario(usuarioGuardado);
      setIsAdmin(roleGuardado === "admin");
    }
  }, []);

  const abrirModal = (alumno = null) => {
    setAlumnoEditar(alumno);
    setIsNew(alumno === null);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setAlumnoEditar(null);
    setModalAbierto(false);
  };

  const eliminarAlumno = (id) => {
    const nuevoArray = datosAlumnos.filter((alumno) => alumno.id !== id);
    setDatosAlumnos(nuevoArray);
  };

  function entrar(e) {
    e.preventDefault();
    const usuarioValidado = usuarios.find(
      (u) => u.username === usuario && u.password === password,
    );
    if (usuarioValidado) {
      setLogueado(true);
      localStorage.setItem("usuario", usuario);
      if (usuarioValidado.role === "admin") {
        setIsAdmin(true);
        localStorage.setItem("role", usuarioValidado.role);
      } else {
        setIsAdmin(false);
        localStorage.setItem("role", usuarioValidado.role);
      }
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }

  function guardarCambios(alumnoEditado) {
    // Determinar si es nuevo basándose en alumnoEditar, no en isNew
    const esNuevo = alumnoEditar === null;
    
    if (esNuevo) {
      const nuevoId =
        datosAlumnos.length > 0
          ? Math.max(...datosAlumnos.map((a) => a.id || 0)) + 1
          : 1;

      const nuevoAlumno = {
        id: nuevoId,
        ...alumnoEditado,
      };

      setDatosAlumnos([...datosAlumnos, nuevoAlumno]);
    } else {
      const nuevoArray = datosAlumnos.map((a) => {
        // Compara por referencia del objeto original
        if (a === alumnoEditar) {
          return alumnoEditado;
        }
        return a;
      });

      setDatosAlumnos(nuevoArray);
    }
  }

  function salir() {
    setLogueado(false);
    setUsuario("");
    setIsAdmin(false);
    localStorage.removeItem("usuario");
    localStorage.removeItem("role");
  }

  // Filtra los alumnos por la promoción seleccionada
  let alumnosFiltrados = datosAlumnos.filter((alumno) => {
    // Si hay promoción seleccionada, debe cumplirla. Si no hay, pasa el filtro
    const cumplePromocion = promocion === "" || alumno.promocion === promocion;

    // Si hay grupo seleccionado, debe cumplirlo. Si no hay, pasa el filtro
    const cumpleGrupo = grupo === "" || alumno.grupo === grupo;

    // Busca en nombre Y apellido con un solo input
    const nombreCompleto = `${alumno.nombre} ${alumno.apellido}`.toLowerCase();
    const cumpleNombre =
      nombre === "" || nombreCompleto.includes(nombre.toLowerCase());

    return cumplePromocion && cumpleGrupo && cumpleNombre;
  });

  // Función que se ejecuta cuando cambias el selector de promoción
  function controlPromocion(e) {
    setPromocion(e.target.value);
  }

  // Función que se ejecuta cuando cambias el selector de grupo
  function controlGrupo(e) {
    setGrupo(e.target.value);
  }

  return (
    <>
      {!logueado ? (
        <LoginForm
          setUsuario={setUsuario}
          setPassword={setPassword}
          entrar={entrar}
        />
      ) : (
        <>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header con título principal */}
            <header className="bg-white shadow-sm border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-800">
                      Anuario de Alumnos
                    </h1>
                    <p className="text-gray-500 mt-1">
                      Encuentra estudiantes por promoción, grupo o nombre
                    </p>
                  </div>
                  <InfoAdmin usuario={usuario} isAdmin={isAdmin}></InfoAdmin>
                  <button
                    onClick={salir}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </header>

            {/* Contenedor principal */}
            <main className="max-w-7xl mx-auto px-4 py-8">
              {/* Sección de filtros */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Filtros
                </h2>

                {/* Contenedor de selectores en línea */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {/* Selector de promocion */}
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Promoción
                    </label>
                    <SelectorPromocion
                      datosPromo={datosPromo}
                      controlPromocion={controlPromocion}
                      promocion={promocion}
                    />
                  </div>

                  {/* Selector de grupos */}
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Grupo
                    </label>
                    <SelectorGrupos
                      datosGrupo={datosGrupos}
                      controlGrupo={controlGrupo}
                      grupo={grupo}
                    />
                  </div>
                </div>

                {/* Buscador de alumnos por nombre y apellido */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Buscar por nombre o apellido
                  </label>
                  <ControlInput nombre={setNombre} />
                </div>
                <div className="mt-4">
                  {isAdmin && (
                    <button
                      onClick={() => abrirModal()}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Crear alumno
                    </button>
                  )}
                </div>
              </div>

              {/* Contador de resultados */}
              <div className="mb-4">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">
                    {alumnosFiltrados.length}
                  </span>{" "}
                  {alumnosFiltrados.length === 1
                    ? "alumno encontrado"
                    : "alumnos encontrados"}
                </p>
              </div>

              {/* Contenedor de las tarjetas */}
              <div className="flex flex-wrap justify-center gap-6">
                <ListaAlumnos
                  datosAlumnos={alumnosFiltrados}
                  isAdmin={isAdmin}
                  abrirModal={abrirModal}
                  eliminarAlumno={eliminarAlumno}
                />
              </div>
            </main>
          </div>
          {modalAbierto && (
            <FormularioAlumno
              alumno={alumnoEditar}
              cerrarModal={cerrarModal}
              guardarCambios={guardarCambios}
              isNew={isNew}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;

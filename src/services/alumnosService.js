import alumnosIniciales from "../data/alumnos.json";


const USE_API = true; 
const API_URL = "http://localhost:3000/api/alumnos";
const STORAGE_KEY = "alumnos";


const localStorageService = {
  getAll: () => {
    const alumnosGuardados = localStorage.getItem(STORAGE_KEY);
    if (alumnosGuardados) {
      return JSON.parse(alumnosGuardados);
    }
    return alumnosIniciales;
  },

  saveAll: (alumnos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(alumnos));
  },

  create: (alumno) => {
    const alumnos = localStorageService.getAll();
    const nuevoId =
      alumnos.length > 0 ? Math.max(...alumnos.map((a) => a.id || 0)) + 1 : 1;

    const nuevoAlumno = {
      id: nuevoId,
      ...alumno,
    };

    const nuevosAlumnos = [...alumnos, nuevoAlumno];
    localStorageService.saveAll(nuevosAlumnos);

    return nuevoAlumno;
  },

  update: (id, datos) => {
    const alumnos = localStorageService.getAll();
    const nuevosAlumnos = alumnos.map((alumno) =>
      alumno.id === id ? { ...alumno, ...datos } : alumno
    );
    localStorageService.saveAll(nuevosAlumnos);

    return nuevosAlumnos.find((a) => a.id === id);
  },

  delete: (id) => {
    const alumnos = localStorageService.getAll();
    const nuevosAlumnos = alumnos.filter((alumno) => alumno.id !== id);
    localStorageService.saveAll(nuevosAlumnos);

    return true;
  },
};


const apiService = {
  getAll: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error al cargar alumnos");
      }
      const alumnos = await response.json();
      return alumnos;
    } catch (error) {
      console.error("Error en getAll:", error);
      return [];
    }
  },

  saveAll: () => {
    console.warn("saveAll no se usa con API");
  },

  create: async (alumno) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alumno),
      });

      if (!response.ok) {
        throw new Error("Error al crear alumno");
      }

      const nuevoAlumno = await response.json();
      return nuevoAlumno;
    } catch (error) {
      console.error("Error en create:", error);
      throw error;
    }
  },

  update: async (id, datos) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar alumno");
      }

      const alumnoActualizado = await response.json();
      return alumnoActualizado;
    } catch (error) {
      console.error("Error en update:", error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar alumno");
      }

      return true;
    } catch (error) {
      console.error("Error en delete:", error);
      throw error;
    }
  },
};

export const alumnosService = USE_API ? apiService : localStorageService;

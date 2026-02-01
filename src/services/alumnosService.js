import alumnosIniciales from "../data/alumnos.json";

const STORAGE_KEY = "alumnos";

export const alumnosService = {
  // Obtener todos los alumnos
  getAll: () => {
    const alumnosGuardados = localStorage.getItem(STORAGE_KEY);
    if (alumnosGuardados) {
      return JSON.parse(alumnosGuardados);
    }
    // Si no hay datos en localStorage, devuelve los datos iniciales del JSON
    return alumnosIniciales;
  },

  // Guardar todos los alumnos
  saveAll: (alumnos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(alumnos));
  },

  // Crear un nuevo alumno
  create: (alumno) => {
    const alumnos = alumnosService.getAll();
    
    // Generar ID único
    const nuevoId =
      alumnos.length > 0 ? Math.max(...alumnos.map((a) => a.id || 0)) + 1 : 1;

    const nuevoAlumno = {
      id: nuevoId,
      ...alumno,
    };

    const nuevosAlumnos = [...alumnos, nuevoAlumno];
    alumnosService.saveAll(nuevosAlumnos);
    
    return nuevoAlumno;
  },

  // Actualizar un alumno existente
  update: (id, datos) => {
    const alumnos = alumnosService.getAll();
    const nuevosAlumnos = alumnos.map((alumno) =>
      alumno.id === id ? { ...alumno, ...datos } : alumno
    );
    alumnosService.saveAll(nuevosAlumnos);
    
    return nuevosAlumnos.find((a) => a.id === id);
  },

  // Eliminar un alumno
  delete: (id) => {
    const alumnos = alumnosService.getAll();
    const nuevosAlumnos = alumnos.filter((alumno) => alumno.id !== id);
    alumnosService.saveAll(nuevosAlumnos);
    
    return true;
  },
};

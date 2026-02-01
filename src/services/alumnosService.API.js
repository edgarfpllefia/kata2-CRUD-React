// Configuración de la API
const API_URL = "http://localhost:3000/api/alumnos";

export const alumnosService = {
  // Obtener todos los alumnos desde la API
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

  // Guardar todos los alumnos (no se usa con API, pero lo dejo por compatibilidad)
  saveAll: (alumnos) => {
    console.warn("saveAll no se usa con API");
  },

  // Crear un nuevo alumno
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

  // Actualizar un alumno existente
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

  // Eliminar un alumno
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

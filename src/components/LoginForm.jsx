export function LoginForm({ setUsuario, setPassword, entrar }) {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-30 ">Login</h1>
      <h2 className="text-center text-2xl mt-3">
        Panel de administrador alumnos FpLlefia
      </h2>
      <form
        className="border border-indigo-500 fit-content flex flex-col justify-center align-center p-6 rounded-lg shadow-lg bg-white mx-auto mt-40 w-80"
        onSubmit={entrar}
      >
        <label className="mb-2" htmlFor="username">
          Usuario:
        </label>
        <input
          className="border p-1 "
          type="text"
          placeholder="usuario"
          onChange={(e) => setUsuario(e.target.value)}
        />
        <label className="m-2" htmlFor="password">
          Contraseña:
        </label>
        <input
          className="border p-1"
          type="password"
          placeholder="*******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="border mt-5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 p-2 font-semibold"
          type="submit"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

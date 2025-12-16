export function LoginForm({ setUsuario, setPassword, entrar }) {
  return (
    <div>
      <form onSubmit={entrar}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Escribe tu username"
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Escribe tu contraseña"
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

import { useAuth } from "../hooks";

export function AuthRoutes() {
  const { userId, username } = useAuth();

  return (
    <div>
      <h2>AuthRoutes...</h2>
      <p>Bienvenido, {username}</p>
      <p>{userId}</p>
    </div>
  );
}

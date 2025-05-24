import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/userContext";

// Used for only Login and Signup for now
export default function PublicRoute({ children }: { children: JSX.Element }) {
  const { user} = useAuth();
  console.log(user);

  



  return user?.user_id ? (
    <Navigate to={`/${user.user_id}`} replace />
  ) : (
    children
  );
}

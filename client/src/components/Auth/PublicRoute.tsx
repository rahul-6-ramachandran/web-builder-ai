import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/userContext";
import { useEffect, useState } from "react";
import { UserDetails } from "../../types.dto";
import { decodeJWT } from "../../utils/utils";

// Used for only Login and Signup for now
export default function PublicRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  console.log(user);


  const [user_id,setUserId] = useState<UserDetails | null>()

  useEffect(()=>{
    getUser()
  },[])

  const getUser = async()=>{
    const decodedToken = await decodeJWT(user);
    setUserId(decodedToken)
  }
 
  console.log(user);

  return user_id ? (
    <Navigate to={`/${user_id}`} replace />
  ) : (
    children
  );
}
  
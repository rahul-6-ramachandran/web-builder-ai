import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserDetails } from "../types.dto";

const AuthContext = createContext<{
  user: UserDetails | null;
  setUser: Dispatch<SetStateAction<UserDetails | null>>;
  loading: boolean;
}>({
  user: null,
  setUser: () => {},
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("userInfo");
    console.log("UserData", userData);
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error("Invalid user data in localStorage", err);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

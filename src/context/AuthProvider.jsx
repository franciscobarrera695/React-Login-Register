import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/Axios.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const authUser = async () => {
      const token = sessionStorage.getItem("x-access-token");
      if (!token) {
        setLoading(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      };
      try {
        const {data} = await clientAxios("/profile", config);
       
        setAuth(data)
      } catch (error) {
        console.log(error.response);
        setAuth({});
      }
      setLoading(false);
    };
    authUser();
  }, []);

  const logout = () => {
    sessionStorage.removeItem("x-access-token");
    setAuth({});
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        logout,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
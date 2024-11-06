import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = { name: "Nodi, Shagor, Khal, Bill" };
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};

/*
1. Creat context and export it. {AuthContext}
2. Set provider with value
3. Use the Auth Provider int the main.jsx file
4. Access child into the AuthProvider as a children. (Use 'node' as a proptype.)
*/ 
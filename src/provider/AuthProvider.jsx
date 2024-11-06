import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
// Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(
        "Obsarbing current user useEffect of AuthProvider",
        currentUser
      );
    });
  }, []);

  const authInfo = { user, creatUser, login };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
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

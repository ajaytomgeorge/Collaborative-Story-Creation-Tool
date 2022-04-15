/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const UserContext = createContext({ name: "", auth: false });

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ name: "", auth: false });

  // Login updates the user data with a name parameter
  const login = (name) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { useContext } from "react";

export const UserContext = React.createContext({
  user: null,
  setUser: () => {},
});

export const UserProvider = (props) => {
  const [user, setUser] = React.useState({ email: null, authToken: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  return {
    setUser,
    user,
  };
}

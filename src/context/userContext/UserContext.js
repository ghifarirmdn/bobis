import React, { useEffect, useState } from "react";
import UserContext from ".";

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const setUserData = (userData) => {
    setUser(userData);
  };

  const getUser = () => {
    setUser(JSON.parse(localStorage.getItem("user")));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ ...props, user, setUser, getUser, setUserData }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

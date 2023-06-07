import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [domain, setDomain] = useState("localhost:8000");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function initApp() {
    fetch("http://127.0.0.1:8000/", {
      method: "GET",
      headers: {},
      body: JSON.stringify({}),
    });
  }

  const globalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <Context.Provider value={globalContext}>{children}</Context.Provider>;
};

export { Context, Provider };

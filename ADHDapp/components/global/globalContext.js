import React, { createContext, useState } from "react";
import * as SecureStore from "expo-secure-store";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [domain, setDomain] = useState("http://10.100.102.10:8000/");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [score, setScore] = useState(0);
  const [participantCode, setParticipantCode] = useState("");
  const [experimentCode, setExperimentCode] = useState("");
  const [isExistQuiz, setIsExistQuiz] = useState(true);
  const [context, setContext] = useState();
  const setToken = async (token) => {
    await SecureStore.setItemAsync("token", token);
  };

  const globalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn,
    userObj,
    setUserObj,
    setToken,
    score,
    setScore,
    isExistQuiz,
    setIsExistQuiz,
    participantCode,
    setParticipantCode,
    experimentCode,
    setExperimentCode,
    context,
    setContext,
  };

  return (
    <LoginContext.Provider value={globalContext}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };

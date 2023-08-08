import React, { createContext, useContext, useEffect, useState } from "react";
import { lightColors, darkColors } from "./colors";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext({
  dark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider = (props) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme == "dark");

  // a listener to useColorScheme
  useEffect(() => {
    setIsDark(colorScheme == "dark");
  }, [colorScheme]);

  // we will call this method when we want change the switch button
  const defaultTheme = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme) => setIsDark(scheme === "dark"),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// creating custom hook for accessing all the values

export const useTheme = () => useContext(ThemeContext);

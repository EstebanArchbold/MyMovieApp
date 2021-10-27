import React, {useMemo, useState} from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider, 
  DarkTheme as DarkThemePaper, 
  DefaultTheme as DefaultThemePaper,
} from "react-native-paper";
import { NavigationContainer, 
  DefaultTheme as DefaultThemeNavigation,
  DarkTheme as DarkThemeNavigation, 
} from "@react-navigation/native"
import Navigation from "./src/navigation/Navigation";
import PreferencesContext from "./src/context/PreferencesContext";

export default function App() {
  const [theme, setTheme] = useState("dark")

  DefaultThemePaper.colors = "#1ae1f2";
  DarkThemePaper.colors.primary = "#1ae1f2";
  DarkThemePaper.colors.accent = "#1ae1f2";

  DarkThemeNavigation.colors.background = '#192734';
  DarkThemeNavigation.colors.card = '#25212b';

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  };


// Using the hook useMemo to lock the vision mode selected
  const preference = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <PreferencesContext.Provider value={preference}>
      <PaperProvider theme={theme === 'dark' ? DarkThemePaper : DefaultThemePaper}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}/>
      <NavigationContainer theme={theme === 'dark' ? DarkThemeNavigation : DefaultThemeNavigation}>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
    </PreferencesContext.Provider>
    
  )
}
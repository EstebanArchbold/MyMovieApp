// Object that create a function who modify the theme

import { createContext } from "react";

const PreferencesContext = createContext({
    theme: '',
    toggleTheme: () => {},
});

export default PreferencesContext;
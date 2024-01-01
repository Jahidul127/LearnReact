import { createContext,useContext } from "react";

export const ThemeContex = createContext({
  themeMode: "light", //variable 
  darkTheme: ()=>{}, //method 
  lightTheme: ()=>{},//method
})

export const ThemeProvider = ThemeContex.Provider //theme Provider 

//custom hook create 
export default function useTheme(){
  return useContext(ThemeContex)
}

import { useEffect, useState } from 'react'
import { Routes } from './Routes'
import { useLocation } from 'react-router-dom'
import { CustomProvider } from 'rsuite'
import ptBR from "rsuite/locales/pt_BR"
import enUS from "rsuite/locales/en_US"
import frFR from "rsuite/locales/fr_FR"
import { useGlobalContext } from './context/globalContext'
import useUserStore from './zustand/auth.zustand'
import useThemeStore from './zustand/theme.zustand'

function App() {

  const [appLocale, setAppLocale] = useState(ptBR)
  const {theme}=useThemeStore()

  const languages = [
    { label: "Inglês", value: enUS },
    { label: "Português", value: ptBR },
    { label: "Francês", value: frFR }
  ];


  const location=useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  },[location.pathname])
  
  return <CustomProvider theme={theme} locale={appLocale}>
    <Routes />
  </CustomProvider>
  
}

export default App

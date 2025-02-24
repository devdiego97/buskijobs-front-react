import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "react-toastify/dist/ReactToastify.css"
import 'react-toastify/dist/ReactToastify.css'
import 'rsuite/dist/rsuite.min.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/globalContext.tsx'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/authContext.tsx'
import { AnimatePresence } from 'framer-motion'
import 'rsuite/dist/rsuite.min.css'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
       <AuthProvider>
      <ContextProvider>
        <BrowserRouter>
          <React.StrictMode>
          <AnimatePresence mode='wait'>
            <App/>
          </AnimatePresence>
          </React.StrictMode>
        </BrowserRouter>
        <ToastContainer position='bottom-right'/>
    </ContextProvider>
   </AuthProvider>
   

 
)

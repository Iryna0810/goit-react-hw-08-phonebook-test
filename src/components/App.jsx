// import { Form } from "./Form/Form";
// import { Title } from './Title/Title';
// import { Contacts } from "./Contacts/Contacts";
// import { Filter } from "./Filtter/Filter";
import { PersistGate } from 'redux-persist/integration/react'
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { SharedLayout } from "./SharedLayout";
import {persistor} from "../components/redux/store"

const ContactsList = lazy(() => import("../pages/Contacts"))
const Register = lazy(() => import("../pages/Register"))
const Login = lazy(() => import("../pages/Login"))


export const App = () => {
  return (
      
      // style={{
      //   display: 'flex',
      //   flexDirection: "column",
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 25,
      //   color: '#fff',
      //   backgroundColor: 'rgb(2,0,36)',
      //   background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(191,4,171,0.6839985994397759) 35%, rgba(0,212,255,1) 100%)',
      //   width: '500px',
      //   maxHeight: '100%',
      //   padding: '20px',
      //   margin: '0 auto',
      //   borderRadius: '8px',
    // }}
    <ChakraProvider>
        <PersistGate loading={null} persistor={persistor}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ContactsList />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register/>}></Route>
        </Route>
        </Routes>
        </PersistGate>
      </ChakraProvider>
  )
}


  
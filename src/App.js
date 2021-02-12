import React from 'react';
import { Admin, Resource, EditGuesser, ListGuesser, CreateGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import Login from './pages/Login/index';
import authProvider from './services/Auth';
import usuario from './pages/usuario';
// import empresa from './pages/Empresa'
import customRoutes from './services/customRoutes';

import './App.css';


const dataProvider = simpleRestProvider('http://localhost:3333')

const App = () => (
  <Admin 
      loginPage={Login}
      authProvider={authProvider}
      // dashboard={Dashboard}
      customRoutes={customRoutes} 
      dataProvider={dataProvider}
      >
      <Resource name='usuarios' {...usuario} options={{ label: 'Usuários' }}/>
  </Admin>
);

export default App;
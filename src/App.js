import React from 'react'
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import DataProvider from './contexts/datas';
import MyRoutes from './routes/routes';
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <DataProvider>
        <GlobalStyle/>
        <ToastContainer autoClose={3000} draggable={false} transition={Zoom}/>
        <MyRoutes/>
      </DataProvider>
    </>
  );
}

export default App;

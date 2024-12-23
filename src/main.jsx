import { createRoot } from 'react-dom/client'
import  './index.css'
import About from './components/About.jsx'
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom'
import Header from './components/Header.jsx'
import PasswordGenerator from './components/PasswordGenerator.jsx'
import Home from './components/Home.jsx'
import PasswordManager from './components/PasswordManager.jsx'
import store from './store/store.js'
import {Provider} from 'react-redux'

const MainLayout = ()=>{
    return(
    <>
    <Header/>
    <Outlet/>
    </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/passwordgenerator",
                element : <PasswordGenerator/>
            },
            {
                path : "/passwordmanager",
                element : <PasswordManager/>
            },
            {
                path : "/about",
                element : <About/>
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
    <Provider store={store}>

<RouterProvider router={appRouter} />   
    </Provider>
  
)

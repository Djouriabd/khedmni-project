import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import './index.css'
//import App from './App.jsx'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import About from './components/Aboutus.jsx'
import Famous from './components/Famous.jsx'
import Popular from './components/Popular.jsx'
import FAQ from './components/FAQ.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'
import Login from './components2/Login.jsx'
import Signup from './components2/Signup.jsx'
import Search from './components3/Search.jsx'
import Filter from './components3/Filter.jsx'


const Home = () => (
  <>
    <Nav />
    <Header />
    <About />
    <Famous />
    <Popular />
    <FAQ />
    <Reviews />
    <Footer />
  </>
)

const FindJob = () => (
  <>
    <Nav />
    <Search />
    <Filter />
  </>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/findjob",
    element: <FindJob />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import './index.css'
//import App from './App.jsx'
//home components
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import About from './components/Aboutus.jsx'
import Famous from './components/Famous.jsx'
import Popular from './components/Popular.jsx'
import FAQ from './components/FAQ.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'

//login sign up components
import Login from './components2/Login.jsx'
import Signup from './components2/Signup.jsx'

//find job components
import Search from './components3/Search.jsx'
import Filter from './components3/Filter.jsx'

//about us components
import Contact from './components4/Contact.jsx'

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

const ContactUs = () => (
  <>
    <Nav />
    <Contact />
    <Footer />
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
  },
  {
    path: "/contactus",
    element: <ContactUs />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

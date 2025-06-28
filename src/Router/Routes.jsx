import {
  createBrowserRouter,
} from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Experience from "../Pages/Experience";
import Educations from "../Pages/Educations";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";
import NotFoundPage from "../Components/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path:'/projects',   
            Component:Projects,
        },
        {
            path: '/skills',
            Component:Skills
        },
        {
            path: '/experience',
            Component:Experience
        },
        {
            path: '/education',
            Component:Educations
        },
        {
            path: '/about-me',
            Component:AboutMe
        },
        {
            path: '/contact',
            Component:Contact
        },
    ]
  },
  {
    path:'*',
    Component:NotFoundPage
  }
]);


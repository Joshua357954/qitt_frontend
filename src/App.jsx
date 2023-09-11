import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import HomeScreen from "./pages/HomeScreen.jsx"
import AuthScreen from "./pages/AuthScreen.jsx"
import FeedbackScreen from "./pages/FeedbackScreen.jsx"
import ProfileScreen from "./pages/ProfileScreen.jsx"
import TimetableScreen from "./pages/Timetable.jsx"
import DepartmentScreen from './pages/Department.jsx'
import AssignmentScreen from './pages/AssignmentScreen.jsx'



const router = createBrowserRouter([
    
    {
      path: "/",
      element: <HomeScreen /> ,
    },

    {
      path: "/auth",
      element: <AuthScreen />,
    },


    {
      path: "/feedback",
      element: <FeedbackScreen />,
    },

    {
      path: "/profile",
      element: <ProfileScreen />,
    },

    {
      path: "/timetable",
      element: <TimetableScreen />,
    },

    {
      path: "/department",
      element: <DepartmentScreen />,
    },

    {
      path: "/assignment",
      element: <AssignmentScreen />,
    },


    // {
    //   path: "/forum",
    //   element: <ForumScreen />,
    // },

    // {
    //   path: "/monitization",
    //   element: <MonitizationScreen />,
    // },

    // {
    //   path: "/updateProfile",
    //   element: <div className="w-screen h-screen text-4xl font-black text-center"> Complete Profile  </div>,
    // },
])


export default router

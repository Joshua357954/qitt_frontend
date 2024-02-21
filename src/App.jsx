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
import AssignmentDetailScreen from './pages/AssignmentDetails.jsx'
import Resources from './pages/Resources.jsx'
import Library from './pages/Library.jsx'
import Notice from './pages/Notice.jsx'
import VerifyUser from './pages/verifyUser.jsx'
import PastQuestionScreen from './pages/PastQuestion.jsx'
import QuizScreen from './pages/QuizScreen.jsx'
import ScoreBoardScreen from './pages/ScoreBoard.jsx'

import AdminScreen from './pages/screens/User/Users.jsx'

import AdminAssignmentScreen from './pages/screens/Assignment/AssignmentScreen.jsx'
import UpdateAssignmentScreen from './pages/screens/Assignment/UpdateAssignment.jsx'

import AdminTimetableScreen from './pages/screens/Timetable/TimetableScreen.jsx'
import UpdateTimetableScreen from './pages/screens/Timetable/UpdateTimetable.jsx'


import AdminFeedbackScreen from './pages/screens/FeedbackScreen.jsx'


const router = createBrowserRouter([
    
    {
      path: "/",
      element: <AuthScreen /> ,
    },

    {
      path: "/auth",
      element: <HomeScreen />,
    },
    {
      path: "/verifyUser/:id",
      element: <VerifyUser />,
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
    {
          path: "/assignmentByCourse",
          element: <AssignmentDetailScreen />,
    },
      {
          path: "/assignment/:course/:date",
          element: <AssignmentDetailScreen />,
    },
      {
          path: "/pastQuestion",
          element: <PastQuestionScreen />,
    },
      {
          path: "/past_question_practice/:course/:time/:numberOfQuestions",
          element: <QuizScreen />,
    },
      {
          path: "/past_question_scoreboard",
          element: <ScoreBoardScreen />,
    },

      {
          path: "/resources",
          element: <Resources/>,
    },
      {
          path: "/library",
          element: <Library/>,
    },

    {
          path: "/notice",
          element: <Notice/>,
    },

    {
      path: "/admin",
      element: <AdminScreen />,
    },
    {
      path: "/admin/timetable",
      element: <AdminTimetableScreen />,
    },
    {
      path: "/admin/updateTimetable",
      element: <UpdateTimetableScreen />,
    },

    {
      path: "/admin/feedback",
      element: <AdminFeedbackScreen />,
    },
    {
      path: "/admin/assignment",
      element: <AdminAssignmentScreen />,
    },
        {
      path: "/admin/updateAssignment",
      element: <UpdateAssignmentScreen />,
    },
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

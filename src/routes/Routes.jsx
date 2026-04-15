import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/home/Homepage";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import FriendDetails from "../components/frienddetails/FriendDetails";
import ErrorLayout from "../layouts/ErrorLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: '/timeline',
        Component: Timeline,
      },
      {
        path: '/stats',
        Component: Stats
      },
      {
        path:'/friendDetails/:id',
        loader: () => fetch('/friendsData.json'),
        Component: FriendDetails,
      }
    ]
  }
])
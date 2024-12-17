import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../components/JobDetails/JobDetails";
import AddJob from "../pages/AddJob/AddJob";
import LogInPage from "../pages/LogInPage/LogInPage";
import SIgnUpPage from "../pages/SignUpPage/SIgnUpPage";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import JobUpdate from "../pages/JobUpdate/JobUpdate";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllJobs from "../pages/AllJobs/AllJobs";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/job/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>
            },
            {
                path: 'add-job',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: 'jobs',
                element: <AllJobs />
            },
            {
                path: 'my-posted-job',
                element: <PrivateRoute><MyPostedJob /></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><JobUpdate /></PrivateRoute>
            },
            {
                path: 'my-bids',
                element: <PrivateRoute><MyBids /></PrivateRoute>
            },
            {
                path: 'bid-requests',
                element: <PrivateRoute><BidRequests /></PrivateRoute>
            },
            {
                path: 'sign-in',
                element: <LogInPage />
            },
            {
                path: 'sign-up',
                element: <SIgnUpPage />
            }
        ]

    }
])

export default routes;
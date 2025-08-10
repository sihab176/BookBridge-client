import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/Layout/Layout";
import Home from "../Pages/Home";

import BookShelf from "../Pages/BookShelf";
import AddBook from "../Pages/AddBook";
import MyBook from "../Pages/MyBook";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Details from "../Pages/Details";
import EditMyBooks from "../Pages/EditMyBooks";
import PrivetRoute from "../Provider/PrivetRoute";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://assignment-11-server-six-alpha.vercel.app/books"),
        Component: Home,
        hydrateFallbackElement: (
          <div className="flex-col gap-4 w-full flex items-center justify-center h-screen">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
              <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
            </div>
          </div>
        ),
      },
      {
        path: "/bookShelf",

        Component: BookShelf,
      },
      {
        path: "/addBook",
        element: (
          <PrivetRoute>
            <AddBook></AddBook>{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "/myBook/:email",

        element: (
          <PrivetRoute>
            <MyBook></MyBook>
          </PrivetRoute>
        ),
        hydrateFallbackElement: (
          <div className="flex-col gap-4 w-full flex items-center justify-center h-screen">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
              <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
            </div>
          </div>
        ),
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-six-alpha.vercel.app/books/${params.id}`
          ),
        element: (
          // <PrivetRoute>
          <Details />
          // </PrivetRoute>
        ),
      },
      {
        path: "/updateBook/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-six-alpha.vercel.app/books/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <EditMyBooks></EditMyBooks>
          </PrivetRoute>
        ),
      },
      {
        path: "/userProfile/:email",

        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
    ],
  },
  { path: "*", Component: ErrorPage },
]);
// https://assignment-11-server-six-alpha.vercel.app/books

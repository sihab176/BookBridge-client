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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/books"),
        Component: Home,
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
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/books/${params.id}`),
        element: (
          <PrivetRoute>
            <Details />
          </PrivetRoute>
        ),
      },
      {
        path: "/updateBook/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/books/${params.id}`),
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
]);

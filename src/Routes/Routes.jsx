import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/Layout/Layout";
import Home from "../Pages/Home";

import BookShelf from "../Pages/BookShelf";
import AddBook from "../Pages/AddBook";
import MyBook from "../Pages/MyBook";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
        { index: true, Component: Home },
        {path:"/bookShelf",Component:BookShelf},
        {path:"addBook",Component:AddBook},
        {path:"myBook",Component:MyBook}

    ],
  },
]);

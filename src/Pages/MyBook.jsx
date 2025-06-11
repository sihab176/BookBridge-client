import React from "react";
import { useLoaderData } from "react-router";

const MyBook = () => {
  const myAllBook=useLoaderData()
  console.log(myAllBook);
  return <div>this is my book page</div>;
};

export default MyBook;

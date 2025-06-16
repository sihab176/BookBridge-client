import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import Chart from "../components/Chart/Chart";

const Profile = () => {
  const myData = useLoaderData();
  const { user } = use(AuthContext);
  // console.log(user, myData);






  return (
    <div className="w-11/12  bg-accent rounded-xl md:p-20 mx-auto my-20">
      <div className="text-center mb-8">
        {/* user photo */}
        <div className="flex justify-center">
          <img className="md:w-28 rounded-full" src={user?.photoURL} alt="" />
        </div>
        {/* user profile info */}
        <div>
          <h1 className="text-2xl font-semibold">{user?.displayName}</h1>
          <p>
            <span className="font-semibold">email:</span> {user?.email}
          </p>
        </div>
      </div>
    {/* summary */}
      <div className="border-t py-9">
        <h1 className="text-3xl font-semibold">Book Summary </h1>
        <div className="flex justify-between items-center">
          <p>Total Books : </p>
          <p>{myData.length}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Books by Category : </p>
          <div className="flex gap-8">
            {myData.map((data) => (
              <p>{data.category}</p>
            ))}
          </div>
        </div>
      </div>
      {/* book by chart  */}
      <div>
        <p className="text-4xl font-semibold py-14 border-t">Books by Category :</p>
        <Chart myData={myData}></Chart>
      </div>
    </div>
  );
};

export default Profile;

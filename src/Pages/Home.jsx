import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import CardContainer from "../components/Navbar/CardContainer/CardContainer";
import Featured from "../components/Featured/Featured";
import ImageContainer from "../components/ExtraSection/ImageContainer";
import Learner from "../components/ExtraSection/Learner";

const Home = () => {
  const fetchData = useLoaderData();

  return (
    <div>
      <Banner />
      <CardContainer fetchData={fetchData}></CardContainer>
      <Featured />
      <ImageContainer />
      <Learner />
    </div>
  );
};

export default Home;

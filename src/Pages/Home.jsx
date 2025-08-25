import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import CardContainer from "../components/Navbar/CardContainer/CardContainer";
import Featured from "../components/Featured/Featured";
import ImageContainer from "../components/ExtraSection/ImageContainer";
import Learner from "../components/ExtraSection/Learner";
import OfferSection from "../components/ExtraSection/OfferSection";

const Home = () => {
  const fetchData = useLoaderData();
  useEffect(() => {
    document.title = "Book Bridge | Home";
  }, []);

  return (
    <div className="">
      <Banner />
      <CardContainer fetchData={fetchData}></CardContainer>
      <Featured />
      <ImageContainer />
      <OfferSection />
      <Learner />
    </div>
  );
};

export default Home;

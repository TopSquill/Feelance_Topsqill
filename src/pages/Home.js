import React from "react";
import BannerSection from "../components/BannerSection";
import Category from "../components/Category";
import BannerSecond from "../components/BannerSecond";
import UserSection from "../modal/UserSection";

const Home = () => {
  return (
    <>
      <BannerSection />
      <Category />
      <BannerSecond />
    </>
  );
};

export default Home;

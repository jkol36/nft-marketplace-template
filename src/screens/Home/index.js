import React from "react";
import Popular from "./Popular";
import Discover from "./Discover";
import Description from "./Description";
import Content from "../../components/Content/Content";

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <Content />
      <Popular />
      {/* <Collections /> */}
      <Discover />
      <Description />
    </>
  );
};

export default Home;

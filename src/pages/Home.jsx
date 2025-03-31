import React from "react";
import Header from "./../components/Header";
import HomePageMainContent from "./../components/HomePageMainContent";
import "./../styles/home.css";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <HomePageMainContent />
    </div>
  );
};

export default Home;

import React from "react";
import DarkTheme from "layouts/Dark";
import Intro4 from "components/Intro4/intro4";

const Homepage5 = () => {
  return (
    <DarkTheme>
      <Intro4 />
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Coming Soon</title>
      <meta name="description" content="Coming Soon" />
    </>
  )
}

export default Homepage5;

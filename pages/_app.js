//import App from "next/app";
import React from "react";

//import withRedux from "next-redux-wrapper";
//import createStore from "../store";

// Main SCSS
import "../assets/scss/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import React from "react";
// import propTypes from 'prop-types';

/** components */
import SubscriberPage from "./SubscriberPage";

export default function SubscriberContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return (
    <>
      <SubscriberPage {...props} />
    </>
  );
}

import React, { useState, useEffect, memo } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import NavLeft from "./nav/NavLeft";
import NavBar from "./nav/NavBar";

/* Actions */
import ACTION_TYPES from "../store/actionTypes";

export default function MainLayout(mainProps) {
  const { children, dispatch, storeLayout, activeLink } = mainProps;

  /* layout vars */
  const wideNav = { width: "240px" };
  const wideContent = { marginLeft: "240px" };

  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isWideNav, setIsWideNav] = useState({ ...wideNav });
  const [isWideContent, setIsWideContent] = useState({ ...wideContent });

  const toggle = () => setIsOpen(!isOpen);
  const toggleLeft = () => {
    setIsToggled(!isToggled);
    if (storeLayout.toggle) {
      setIsWideNav({ ...wideNav });
      setIsWideContent({ ...wideContent });
    } else {
      setIsWideNav({ width: 0, padding: 0 });
      setIsWideContent({ marginLeft: 0 });
    }
    dispatch({
      type: ACTION_TYPES.LAYOUT.TOGGLE,
      toggle: isToggled,
    });
  };

  const props = {
    /* state vars */
    isOpen,
    isToggled,
    /* toggles */
    toggle,
    toggleLeft,
    activeLink,
  };

  return (
    <>
      <NavBar {...props} />
      <Container fluid className="mt-2">
        <Row>
          <Col md lg="1" align="left" className="">
            <NavLeft activeLink={activeLink} />
          </Col>
          <Col md lg="11" className="">
            {children}
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

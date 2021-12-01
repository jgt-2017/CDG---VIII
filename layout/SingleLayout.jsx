import React from "react";
import { Container } from "reactstrap";
//import Image from "next/image";
//import background from "@/public/MAT.jpg";

export default function SingleLayout(props) {
  const { children } = props;

  return (
    <div style={{ backgroundImage: "url(/MAT1.png)" }}>
      <Container fluid className="page-single">
        {children}
      </Container>
    </div>
  );
}

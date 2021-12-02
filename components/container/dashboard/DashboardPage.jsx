//import React, { memo } from 'react';
import Link from "next/link";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Table,
  Media,
  Row,
  Col,
  Button,
  Badge,
} from "reactstrap";
import BarChart from "../charts/BarChart";
//import ProjectCard from "../card/projects";
import TableContainer from "@/components/table/TableContainer";
import ProjectsHorizontal from "@/components/cards/ProjectHorizontal";

export default function DashboardPage() {
  return (
    <div>
      <h4> Hello IKEA! Welcome to your CDG summary! </h4>
      <p>
        {/* Welcome, this is your <code>pages/dashboard.jsx</code>, please continue. */}
      </p>
      <div className="d-flex p-3 my-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
        <img
          className="mr-3"
          src="/MS.png"
          alt="Brand"
          width="48"
          height="48"
        />
        <div className="lh-100">
          <h6 className="mb-0 text-white lh-100">Community Solar CDG</h6>
          <small>MaxSolar</small>
        </div>
        <div className="ml-auto">
          <blockquote className="blockquote text-right p-0 m-0">
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Con Edison Account Number : 700535602500009
            </p>
            {/* <footer className="blockquote-footer text-white">
                Web Administrator, <cite title="Source Title">Web Bot</cite>
              </footer> */}
          </blockquote>
        </div>
      </div>
      <Row>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Billing Statistics
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col xs="" className="d-inline align-items-center">
                  <TableContainer />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                System Production - 2021
              </CardTitle>

              <Row className="mb-2">
                <Col xs="" className="d-inline align-items-center">
                  <BarChart />
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter>
                  <Row>
                    <a href="#" className="float-right">Add new</a>
                  </Row>
                </CardFooter> */}
            </CardBody>
          </Card>
        </Col>

        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Savings & Eco Impact Summary
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2" align="center">
                <Col
                  xs="4"
                  className="d-inline align-items-center text-success"
                >
                  <i className="fas fa-coins fa-3x"></i>
                  {"  "}
                  <span>
                    $10,880
                    <CardText>
                      <Link href="">Total Savings</Link>
                    </CardText>
                  </span>
                </Col>
                <Col xs="4" className="d-inline align-items-center text-info">
                  <i className="fas fa-smog fa-3x"></i>{" "}
                  <span>
                    3.5 tons{"   "}
                    <CardText>
                      <Link href="">Coal Avoided</Link>
                    </CardText>
                  </span>
                </Col>
                <Col
                  xs="4"
                  className="d-inline align-items-center text-primary"
                >
                  <i className="fas fas fa-tree fa-3x"></i>{" "}
                  <span>
                    11 <CardText>Trees Planted</CardText>
                  </span>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        <Col md="12" lg="12" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Project Details
              </CardTitle>

              {/* <CardText></CardText> */}
              <ProjectsHorizontal />
              {/* <Button>Go somewhere</Button> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

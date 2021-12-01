import React, { memo } from "react";
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

import TableContainer from "@/components/table/TableContainer";
import TableSubscriber from "@/components/table/TableSubscriber";

export default function SubscriberPage() {
  return (
    <div>
      <Row>
        <Col md="12" lg="12" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Subscriber List (Matrix 1A)
              </CardTitle>

              {/* <CardText></CardText> */}
              <TableSubscriber />
              {/* <Button>Go somewhere</Button> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

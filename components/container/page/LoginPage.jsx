//import { response } from "express";
import React, { memo } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";

import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export default function LoginPage() {
  //onClick();
  const router = useRouter();
  const href = "/dashboard/dashboard_admin";
  function handleSubmit(e) {
    e.preventDefault();
    const p = document.getElementById("exampleInputPassword3").value;
    const u = document.getElementById("exampleInputEmail3").value;
    if (p === "matrixadmin" && u === "matrixadmin@maxsolar.com") {
      console.log(p);
      router.push(href);
    } else {
      console.log("You got a wrong password.");
    }
    // console.log(p);
    //console.log("You clicked submit.");
  }

  return (
    <Card className="w-25 box-shadow">
      <CardBody>
        <Form
          action="" //Check with ENV variable or Config file
          method=""
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend className="text-primary bg-gradient-primary font-weight-bold uppercase">
              <h3 className="mt-2 ml-3 text-light text-center">Login</h3>
            </legend>
            <FormGroup>
              <Label for="exampleInputEmail3">Email address</Label>
              <Input
                type="email"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                //ref={email}
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </FormGroup>
            <FormGroup>
              <Label for="exampleInputPassword3">Password</Label>
              <Input
                type="password"
                className="form-control"
                id="exampleInputPassword3"
                //ref={password}
              />
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck3"
              />
              <Label check for="exampleCheck3">
                Check me out
              </Label>
            </FormGroup>
          </fieldset>
          <Button
            color="primary"
            block
            size="lg"
            className="mt-2"
            //onClick={handleLogin}
          >
            Submit
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

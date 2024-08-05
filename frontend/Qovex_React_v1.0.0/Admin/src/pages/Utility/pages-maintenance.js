import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { CardBody, Container, Row, Col, Card } from "reactstrap"

//Import Images
import logo from "../../assets/images/logo-dark.png"
import maintenance from "../../assets/images/maintenance.png"

const PagesMaintenance = () => {

  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
     
    </React.Fragment>
  )
}

export default PagesMaintenance

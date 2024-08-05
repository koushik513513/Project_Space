import React, { useEffect } from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"

//Import Images
import errorImage from "../../assets/images/error-img.png"


const Pages500 = () => {
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

export default Pages500

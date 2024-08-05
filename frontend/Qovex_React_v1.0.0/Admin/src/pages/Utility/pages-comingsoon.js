import React, { useEffect } from "react"
import { Container, Row, Col } from "reactstrap"

//Import Countdown
import Countdown from "react-countdown"

//Import Images
import logo from "../../assets/images/logo-dark.png"
import commingsoon from "../../assets/images/maintenance.png"

const PagesComingsoon = () => {
  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>You are good to go!</span>
    } else {
      return (
        <>
          <div className="coming-box">
            {days} <span>Days</span>
          </div>{" "}
          <div className="coming-box">
            {hours} <span>Hours</span>
          </div>{" "}
          <div className="coming-box">
            {minutes} <span>Minutes</span>
          </div>{" "}
          <div className="coming-box">
            {seconds} <span>Seconds</span>
          </div>
        </>
      )
    }
  }

  return (
    <React.Fragment>
      
    </React.Fragment>
  )
}

export default PagesComingsoon

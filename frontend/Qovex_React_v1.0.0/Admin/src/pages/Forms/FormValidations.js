import React, { useState } from "react"

import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Input
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormValidations = () => {
  const [fnm, setfnm] = useState(false)
  const [lnm, setlnm] = useState(false)
  const [unm, setunm] = useState(false)
  const [city, setcity] = useState(false)
  const [stateV, setstateV] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    var fnm = document.getElementById("validationTooltip01").value
    var lnm = document.getElementById("validationTooltip02").value
    var unm = document.getElementById("validationTooltipUsername").value
    var city = document.getElementById("validationTooltip03").value
    var stateV = document.getElementById("validationTooltip04").value

    if (fnm === "") {
      setfnm(false)
    } else {
      setfnm(true)
    }

    if (lnm === "") {
      setlnm(false)
    } else {
      setlnm(true)
    }

    if (unm === "") {
      setunm(false)
    } else {
      setunm(true)
    }

    if (city === "") {
      setcity(false)
    } else {
      setcity(true)
    }

    if (stateV === "") {
      setstateV(false)
    } else {
      setstateV(true)
    }

    var d1 = document.getElementsByName("validate")

    document.getElementById("tooltipForm").classList.add("was-validated")

    for (var i = 0; i < d1.length; i++) {
      d1[i].style.display = "block"
    }
  }

  //for change tooltip display propery
  function changeHandeler(event, eleId) {
    if (event.target.value !== "")
      document.getElementById(eleId).style.display = "none"
    else document.getElementById(eleId).style.display = "block"
  }

  return (
    <React.Fragment>
      
    </React.Fragment>
  )
}

export default FormValidations

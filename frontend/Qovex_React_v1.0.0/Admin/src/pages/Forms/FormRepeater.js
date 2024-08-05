import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  Button,
  CardTitle,
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormRepeater = () => {
  const [rows1, setrows1] = useState([])
  const [rows2, setrows2] = useState([])

  function handleAddRowNested() {
    const item1 = { name1: "" }
    setrows1([...rows1, item1])
  }

  function handleRemoveRow(e, id) {
    if (typeof id != "undefined")
      document.getElementById("addr" + id).style.display = "none"
  }

  function handleRemoveRowNested(e, id) {
    document.getElementById("nested" + id).style.display = "none"
  }

  function handleAddRowNested1() {
    const item2 = { name1: "" }
    setrows2([...rows2, item2])
  }

  return (
    <React.Fragment>
      
    </React.Fragment>
  )
}

export default FormRepeater
import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  Form,
  CardBody,
  CardTitle
} from "reactstrap"
import Dropzone from "react-dropzone"

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import { Link } from "react-router-dom"

const FormUpload = () => {
  const [selectedFiles, setselectedFiles] = useState([])

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <React.Fragment>
     
    </React.Fragment>
  )
}

export default FormUpload

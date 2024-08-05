import React from "react"
import {
  Row,
  Col,
  Form,
  Label,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

// Form Mask
import InputMask from "react-input-mask"
import MaterialInput from "@material-ui/core/Input"

const FormMask = () => {

  const ISBN1 = props => (
    <InputMask
      mask="999-99-999-9999-99-9"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const ISBN2 = props => (
    <InputMask
      mask="999 99 999 9999 99 9"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const ISBN3 = props => (
    <InputMask
      mask="999/99/999/9999/99/9"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const IPV4 = props => (
    <InputMask
      mask="999.999.999.999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const IPV6 = props => (
    <InputMask
      mask="****:****:****:*:***:****:****:****"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => <MaterialInput {...inputProps} disableUnderline />}
    </InputMask>
  )

  const TAX = props => (
    <InputMask
      mask="99-9999999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const Phone = props => (
    <InputMask
      mask="(999) 999-9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const Currency = props => (
    <InputMask
      mask="$ 999,999,999.99"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} prefix="$" type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const Date1 = props => (
    <InputMask
      mask="99/99/9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const Date2 = props => (
    <InputMask
      mask="99-99-9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  return (
    <React.Fragment>
      
    </React.Fragment>
  )
}

export default FormMask

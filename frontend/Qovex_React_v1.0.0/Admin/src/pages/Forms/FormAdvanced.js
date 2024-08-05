import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";

import { SketchPicker } from "react-color";
import ColorPicker from "@vtaits/react-color-picker";
import "@vtaits/react-color-picker/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";
import Select from "react-select";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

const Offsymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2,
      }}
    >
      {" "}
      No
    </div>
  );
};

const OnSymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2,
      }}
    >
      {" "}
      Yes
    </div>
  );
};

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

const FormAdvanced = () => {
  const [sq1, setsq1] = useState(true);
  const [sq2, setsq2] = useState(true);
  const [sq3, setsq3] = useState(true);
  const [color, setcolor] = useState("red");
  const [colorRgb, setcolorRgb] = useState("red");
  const [colorCust, setcolorCust] = useState("red");
  const [colorHor, setcolorHor] = useState("#fffff");
  const [colorRGBA, setcolorRGBA] = useState("rgba(0, 194, 255, 0.78)");
  const [display_RGBA, setdisplay_RGBA] = useState(false);

  //** Datepicker Method */
  const [date, setDate] = useState("");
  const [fromate_date, setFromatDate] = useState("");
  const [current_month, setMonth] = useState("");
  const [current_month_short, setMonthShort] = useState("");
  const [current_day, setDay] = useState("");
  const [current_day_short, setDayShort] = useState("");
  const [current_day_min, setDayMin] = useState("");
  const [pick_date, setPickDate] = useState("");

  const [disbadge, setdisbadge] = useState(true);
  const [disthresh, setdisthresh] = useState(false);
  const [placementbadge, setplacementbadge] = useState(false);
  const [textcount, settextcount] = useState(0);
  const [optioncount, setoptioncount] = useState(0);
  const [placementcount, setplacementcount] = useState(0);
  const [threshhold, setthreshhold] = useState(0);
  const [threshholdcount, setthreshholdcount] = useState(0);
  const [disDefault, setdisDefault] = useState(0);
  const [textareabadge, settextareabadge] = useState(0);
  const [simple_color, setsimple_color] = useState(0);
  const [simple_color1, setsimple_color1] = useState(0);
  const [simple_color2, setsimple_color2] = useState(0);

  const [switch1, setswitch1] = useState(true);
  const [switch2, setswitch2] = useState(true);
  const [switch3, setswitch3] = useState(true);
  const [switch4, setswitch4] = useState(true);
  const [switch5, setswitch5] = useState(true);
  const [switch6, setswitch6] = useState(true);
  const [switch7, setswitch7] = useState(true);
  const [switch8, setswitch8] = useState(true);
  const [switch9, setswitch9] = useState(true);

  const [data_attr, setdata_attr] = useState(56);
  const [postfix, setpostfix] = useState(20);
  const [empty_val, setempty_val] = useState(0);
  const [not_attr, setnot_attr] = useState(15);
  const [explicit_val, setexplicit_val] = useState(33);

  const max_len = 25;

  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedMulti, setselectedMulti] = useState(null);

  const onDrag = (c1) => {
    setcolor(c1);
  };
  const onDragRgb = (c1) => {
    setcolorRgb(c1);
  };
  const onDragCust = (c1) => {
    setcolorCust(c1);
  };
  const handleHor = (color) => {
    setcolorHor(color.hex);
  };

  function handleRGBA() {
    setdisplay_RGBA(!display_RGBA);
  }

  const onSwatchHover_RGBA = (color) => {
    const format =
      "rgba(" +
      color.rgb.r +
      "," +
      color.rgb.g +
      "," +
      color.rgb.b +
      "," +
      color.rgb.a +
      ")";
    setcolorRGBA(format);
  };

  function threshholdchange(event) {
    const count = event.target.value.length;
    const remain_val = max_len - 20;

    if (remain_val <= count) {
      setdisthresh(true);
    } else {
      setdisthresh(false);
    }
    setthreshholdcount(event.target.value.length);
  }

  function threshholdDefault(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setdisDefault(true);
    } else {
      setdisDefault(false);
    }
    setthreshhold(event.target.value.length);
  }

  function optionchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setdisbadge(true);
    } else {
      setdisbadge(false);
    }
    setoptioncount(event.target.value.length);
  }

  function placementchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setplacementbadge(true);
    } else {
      setplacementbadge(false);
    }
    setplacementcount(event.target.value.length);
  }

  function textareachange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      settextareabadge(true);
    } else {
      settextareabadge(false);
    }
    settextcount(event.target.value.length);
  }

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  /*
    get date Method
  **/
  const getDateMethod = () => {
    setDate(new Date());
  };
  const getDateFormateMethod = () => {
    let today = new Date();
    const dd = today.getDate().toString();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const fromate_date = (today = dd + "/" + mm + "/" + yyyy);
    setFromatDate(fromate_date);
  };
  const getMonthMethod = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date();
    const current_month = months[d.getMonth()];
    setMonth(current_month);
  };

  const getMonthShortMethod = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = new Date();
    const current_month_short = months[d.getMonth()];
    setMonthShort(current_month_short);
  };

  const getDayMethod = () => {
    const day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date();
    const current_day = day[d.getDay()];
    setDay(current_day);
  };

  const getDayShort = () => {
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = new Date();
    const current_day_short = day[d.getDay()];
    setDayShort(current_day_short);
  };

  const getDayMin = () => {
    const day = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const d = new Date();
    const current_day_min = day[d.getDay()];
    setDayMin(current_day_min);
  };

  const picks = () => {
    setPickDate(new Date());
  };

  const resentValue = () => {
    setPickDate(" ");
  };

  return (
    <React.Fragment>
     
    </React.Fragment>
  );
};

export default FormAdvanced;

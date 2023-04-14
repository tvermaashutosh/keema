import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import DatePicker from "react-datepicker"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faXmark, faPlus } from "@fortawesome/free-solid-svg-icons"

import Helper from "../helper.js"

export default function () {

  const [currDate, setCurrDate] = useState(new Date())
  const [nameFilter, setNameFilter] = useState("")
  const [dateFilter, setDateFilter] = useState(null)
  const [nameFocused, setNameFocused] = useState(false)

  function onNameChange(e) {
    setNameFilter(e.target.value.toUpperCase())
  }
  function onDateChange(e) {
    setDateFilter(e)
  }
  function onSearchClick() {

  }
  function onClearClick() {
//

    setNameFilter("")
    setDateFilter(null)
  }
  const navigate = useNavigate()
  function onAddPatientClick() {
    navigate("/add_patient")
  }

  useEffect(function () {
    setInterval(function () {
      setCurrDate(new Date())
    }, 1000)
  }, [])

  return <div className="h1">
    <div className="hh1">
      <div className="hhh1" style={{ fontFamily: "monospace", color: "rgb(54, 69, 79)" }}>
        {Helper.formatDateSecond(currDate)}
      </div>

      <div className="hhh2">
        <Form.Control className="hhhh1" style={{ height: "30px", border: nameFocused ? "2px solid" : "1px solid rgb(128, 128, 128)", borderRadius: "2px", boxShadow: "none", outline: "none", paddingLeft: "2px", marginLeft: nameFocused ? "0px" : "1px", marginRight: nameFocused ? "8px" : "9px" }} type="text" placeholder="Search by name" onFocus={() => setNameFocused(true)} onBlur={() => setNameFocused(false)} value={nameFilter} onChange={onNameChange} />

        <DatePicker className="hhhh2"
          dateFormat="dd MMM yyyy"
          placeholderText="Search by date"
          selected={dateFilter}
          onChange={onDateChange}
        />

        <Button className="hhhh3" style={{ display: "block" }} onClick={onSearchClick}>
          <span className="d-flex align-items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} /><span style={{ marginLeft: "5px" }}>Search</span>
          </span>
        </Button>

        <Button className="hhhh4" style={{ display: "block" }} onClick={onClearClick}>
          <span className="d-flex align-items-center">
            <FontAwesomeIcon icon={faXmark} /><span style={{ marginLeft: "5px" }}>Clear</span>
          </span>
        </Button>
      </div>
    </div>

    <div className="hh2">
      <div className="hhh3">
        Total patient entries<span style={{ fontFamily: "monospace", color: "rgb(54, 69, 79)", marginLeft: "10px" }}>100</span>
      </div>
      <Button className="hhh4" onClick={onAddPatientClick}>
        <span className="d-flex align-items-center">
          <FontAwesomeIcon icon={faPlus} /><span style={{ marginLeft: "5px" }}>Add patient</span>
        </span>
      </Button>
    </div>
  </div>
}
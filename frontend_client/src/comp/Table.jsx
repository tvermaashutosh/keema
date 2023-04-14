import { useState } from "react"
import { Card, Table } from "react-bootstrap"

import Modal from "./Modal"
import Helper from "../helper.js"

export default function () {

  const patients = [
    { _id: "1", name: "John Doiiiiiiiiiiiiiiiiiiie", sex: "M", age: 30, address: "123 Main St", _appointment: "2023-10-01T10:00:00Z", _registration: "2023-10-01T10:00:00Z" },
    { _id: "2", name: "Jane Smith", sex: "F", age: 25, address: "456 Elm Stiiiiiiiiiiiiiiiiii", _appointment: "2023-10-02T11:00:00Z", _registration: "2023-10-01T10:00:00Z" }
  ]
  const [selectedPatient, setSelectedPatient] = useState(null)

  function onRowClick(p) {
    setSelectedPatient(p)
  }
  function onModalHide(){
    setSelectedPatient(null)
  }

  return <>
    <Card className="mt-5" style={{ overflow: "hidden", boxShadow: "0 0.1rem 1.5rem rgba(0, 0, 0, 0.4)" }}>
      <Table responsive>
        <thead className="table-responsive-thead" style={{ userSelect: "none" }}>
          <tr>
            <th style={{ backgroundColor: "rgb(129, 133, 137)", color: "rgb(255,255,255)" }}>Patient name</th>
            <th style={{ backgroundColor: "rgb(129, 133, 137)", color: "rgb(255,255,255)" }}>Sex</th>
            <th style={{ backgroundColor: "rgb(129, 133, 137)", color: "rgb(255,255,255)" }}>Age</th>
            <th style={{ backgroundColor: "rgb(129, 133, 137)", color: "rgb(255,255,255)" }}>Address</th>
            <th style={{ backgroundColor: "rgb(129, 133, 137)", color: "rgb(255,255,255)" }}>Next appointment</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => {
            return (
              <tr onClick={() => onRowClick(p)} style={{ cursor: "pointer" }} key={p._id}>
                <td>{Helper.substring18(p.name)}</td>
                <td>{p.sex}</td>
                <td>{p.age}</td>
                <td>{Helper.substring18(p.address)}</td>
                <td style={{fontFamily:"'Roboto Mono', monospace"}}>{Helper.formatDate(p._appointment)}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Card>

    {selectedPatient && <Modal selectedPatient={selectedPatient} onHide={onModalHide} />}
  </>
}
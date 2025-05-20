import { useState } from "react"
import { Card, Form, Row, InputGroup, Button } from "react-bootstrap"
import Select from "react-select"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function () {

  const sexOptions = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
    { value: "O", label: "Other" }
  ]
  function onSexChange(e) {
    setNewPatient({ ...newPatient, sex: e.value })
  }
  function onInputChange(e) {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value.toUpperCase() })
  }

  const [newPatient, setNewPatient] = useState({})

  function onAddPatientClick() {
  }

  return <Card className="p-3" style={{ boxShadow: "0 0.1rem 1.5rem rgba(0, 0, 0, 0.4)" }}>
    <Form>
      <Row>
        <Form.Group className="mb-3 col-lg-6">
          <div className="d-flex">
            <div>
              <Form.Label>Name</Form.Label>
            </div>
            <div style={{ color: "rgb(255, 0, 0)" }}>
              &nbsp;*
            </div>
          </div>
          <Form.Control type="text" name="name" value={newPatient.name} onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6">
          <div className="d-flex">
            <div>
              <Form.Label>Sex</Form.Label>
            </div>
            <div style={{ color: "rgb(255, 0, 0)" }}>
              &nbsp;*
            </div>
          </div>
          <Select options={sexOptions} onChange={onSexChange} />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6">
          <div className="d-flex">
            <div>
              <Form.Label>Age</Form.Label>
            </div>
            <div style={{ color: "rgb(255, 0, 0)" }}>
              &nbsp;*
            </div>
          </div>
          <Form.Control type="number" name="age" value={newPatient.age} onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6">
          <Form.Label>Mobile</Form.Label>
          <InputGroup>
            <InputGroup.Text>+91</InputGroup.Text>
            <Form.Control type="tel" name="mobile" value={newPatient.mobile} onChange={onInputChange} minLength={10} maxLength={10} />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6">
          <div className="d-flex">
            <div>
              <Form.Label>Address</Form.Label>
            </div>
            <div style={{ color: "rgb(255, 0, 0)" }}>
              &nbsp;*
            </div>
          </div>
          <Form.Control type="text" name="address" value={newPatient.address} onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6">
          <Form.Label>Past medical history (PMH)</Form.Label>
          <Form.Control type="text" name="pmh" value={newPatient.pmh} onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6">
          <Form.Label>Work done</Form.Label>
          <Form.Control type="text" name="workDone" value={newPatient._work} onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6">
          <div className="d-flex">
            <div>
              <Form.Label>Payment</Form.Label>
            </div>
            <div style={{ color: "rgb(255, 0, 0)" }}>
              &nbsp;*
            </div>
          </div>
          <Form.Control type="number" name="payment" value={newPatient.payment} onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6">
          <div className="d-flex">
            <div>
              <Form.Label>Balance</Form.Label>
            </div>
            <div style={{ color: "rgb(255, 0, 0)" }}>
              &nbsp;*
            </div>
          </div>
          <Form.Control type="number" name="balance" value={newPatient.balance} onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6">
          <Form.Label>Next appointment</Form.Label>
          <Form.Control type="datetime-local" name="_appointment" value={newPatient._appointment} onChange={onInputChange} />
        </Form.Group>
      </Row>
    </Form>

    <div className="d-flex justify-content-center" style={{ width: "100%" }}>
      <Button variant="primary mt-2 mb-2" disabled={!localStorage.getItem("token") || !(newPatient.name && newPatient.sex && newPatient.age && newPatient.address || !!newPatient.payment || !!newPatient.balance)} onClick={onAddPatientClick}>
        <span className="d-flex align-items-center">
          <FontAwesomeIcon icon={faPlus} /><span style={{ marginLeft: "5px" }}>Add patient</span>
        </span>
      </Button>
    </div>
  </Card >
}
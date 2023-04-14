import { useState } from "react"
import { Modal, Form, Row, InputGroup, Button } from "react-bootstrap"
import Select from "react-select"

import Helper from "../helper.js"

export default function (props) {

  const sexOptions = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
    { value: "O", label: "Other" }
  ]
  function getSexLabel(s) {
    if (s === "M") return "Male"
    if (s === "F") return "Female"
    if (s === "O") return "Other"
  }
  function onSexChange(e) {
    setSelectedPatient({ ...selectedPatient, sex: e.value })
  }
  function onInputChange(e) {
    setSelectedPatient({ ...selectedPatient, [e.target.name]: e.target.value })
  }

  const [showModal, setShowModal] = useState(true)
  const [showHelperModal, setShowHelperModal] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState(props.selectedPatient)
  const [operation, setOperation] = useState(-1)
  const [canEdit, setCanEdit] = useState(false)

  function onModalHide() {
    props.onHide()
    setShowModal(false)
  }
  function onEditClick() {
    setOperation(1)
    setShowHelperModal(true)
  }
  function onDeleteClick() {
    setOperation(2)
    setShowHelperModal(true)
  }
  function onSaveClick() {
    // editPatientFunction(selectedPatient)
    onModalHide()
  }
  function onHelperModalNo() {
    setOperation(-1)
    setShowHelperModal(false)
  }
  function onHelperModalYes() {
    if (operation === 1) {
      setCanEdit(true)
    } else if (operation === 2) {
      // deletePatientFunction(selectedPatient._id)
      onModalHide()
    }
    setOperation(-1)
    setShowHelperModal(false)
  }

  return <>
    <Modal show={showHelperModal} centered animation={false}>
      <Modal.Body style={{ backgroundColor: "rgb(253, 255, 0)", borderRadius: "6px" }}>
        Confirm {operation === 1 ? "editing" : "deleting"} this patient.
        <div className="parent d-flex justify-content-end">
          <div>
            <Button variant="warning" size="sm" onClick={onHelperModalNo} style={{ marginRight: "8px" }}>No</Button>
          </div>
          <div>
            <Button variant="warning" size="sm" onClick={onHelperModalYes}>Yes</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>

    <Modal show={showModal} onHide={onModalHide} backdrop="static" keyboard={false} centered style={{ filter: `contrast(${showHelperModal ? 0.5 : 1})` }}>
      <Modal.Header closeButton>
        <div>
          <Modal.Title>{Helper.substring18(selectedPatient.name)}</Modal.Title>
          <div style={{ fontSize: "small", color: "rgb(105, 105, 105)" }}>Registration date&nbsp;&nbsp;{<span style={{ fontFamily: "monospace" }}>{Helper.formatDate(selectedPatient._registration)}</span>}</div>
        </div>
      </Modal.Header>

      <Modal.Body>
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
              <Form.Control type="text" name="name" value={selectedPatient.name} disabled={!canEdit} onChange={onInputChange} />
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
              {!canEdit ?
                <Form.Control type="text" value={getSexLabel(selectedPatient.sex)} disabled /> :
                <Select options={sexOptions} defaultValue={{ value: selectedPatient.sex, label: getSexLabel(selectedPatient.sex) }} onChange={onSexChange} />}
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
              <Form.Control type="number" name="age" value={selectedPatient.age} disabled={!canEdit} onChange={onInputChange} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Mobile</Form.Label>
              <InputGroup>
                <InputGroup.Text>+91</InputGroup.Text>
                <Form.Control type="tel" name="mobile" value={selectedPatient.mobile} disabled={!canEdit} onChange={onInputChange} minLength={10} maxLength={10} />
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
              <Form.Control type="text" name="address" value={selectedPatient.address} disabled={!canEdit} onChange={onInputChange} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Past medical history (PMH)</Form.Label>
              <Form.Control type="text" name="pmh" value={selectedPatient.pmh} disabled={!canEdit} onChange={onInputChange} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Work done</Form.Label>
              <Form.Control type="text" name="workDone" value={selectedPatient.workDone} disabled={!canEdit} onChange={onInputChange} />
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
              <Form.Control type="number" name="payment" value={selectedPatient.payment} disabled={!canEdit} onChange={onInputChange} />
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
              <Form.Control type="number" name="balance" value={selectedPatient.balance} disabled={!canEdit} onChange={onInputChange} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Next appointment</Form.Label>
              {!canEdit ?
                <Form.Control type="text" value={selectedPatient._appointment/*date format*/} disabled /> :
                <Form.Control type="datetime-local" name="_appointment" value={selectedPatient._appointment/*date format*/} onChange={onInputChange} />}
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        {!canEdit ?
          <div className="d-flex justify-content-between" style={{ width: "100%" }}>
            <Button variant="warning" onClick={onEditClick} disabled={!localStorage.getItem("myauthtoken")}>Edit</Button>
            <Button variant="danger" onClick={onDeleteClick} disabled={!localStorage.getItem("myauthtoken")}>Delete</Button>
          </div> :
          <div className="d-flex justify-content-center" style={{ width: "100%" }}>
            <Button variant="success" onClick={onSaveClick} disabled={!(selectedPatient.name && selectedPatient.sex && selectedPatient.age && selectedPatient.address && !!selectedPatient.payment && !!selectedPatient.balance)}>Save</Button>
          </div>}
      </Modal.Footer>
    </Modal>
  </>
}
import { useState } from "react"
import { Form, Button } from "react-bootstrap"

export default function () {

  const [doctor, setDoctor] = useState({ email: null, password: null })

  function onInputChange(e) {
    setDoctor({ ...doctor, [e.target.name]: e.target.value })
  }
  function onLoginClick() {
    
  }

  return <div className="d-flex justify-content-center">
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={doctor.email} onChange={onInputChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={doctor.password} onChange={onInputChange} />
      </Form.Group>
      <div className="d-flex justify-content-center" style={{ width: "100%" }}>
        <Button onClick={onLoginClick}>Login</Button>
      </div>
    </Form>
  </div>
}
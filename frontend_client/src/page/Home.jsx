import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function () {
  return <div className="d-flex align-items-center justify-content-center hom1">
    <div className="d-flex align-items-center justify-content-center" style={{ width: "50%", height: "100%" }}>
      <img src="logo.png" style={{ width: "100%" }} />
    </div>

    <div>
      <div className="d-flex flex-column justify-content-center align-items-center p-5 pt-3 pb-4">
        <div className="d-flex justify-content-center align-items-center text-center">
          <h1 style={{ fontWeight: "500", fontSize: "50px", color: "rgb(105, 105, 105)", textShadow: "4px 4px 4px rgba(0, 0, 0, 0.4)", fontFamily: "'Poppins', sans-serif", marginBottom: "20px" }}>
            Smile Care Dental Clinic
          </h1>
        </div>

        <div style={{ padding: "15px", textAlign: "center", marginTop: "-10px", marginBottom: "5px" }}>
          Smile Care Dental Clinic, Kushiyara Civil Line Tiraha, Civil Line Road, Bhadohi, Varanasi, Uttar Pradesh
        </div>

        <div className="d-flex justify-content-center align-items-center text-center">
          <h1 style={{ fontWeight: "500", fontSize: "30px", color: "rgba(0, 0, 0, 0.6)", textShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)" }}>
            Patient Records Management Application
          </h1>
        </div>

        <div className="d-flex align-items-center" style={{ padding: "15px", textAlign: "justify" }}>
          <div style={{ marginTop: "-3px" }}>
            Made by &nbsp;— &nbsp;Ashutosh Verma
          </div>
          <a
            href="https://github.com/tvermaashutosh"
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FontAwesomeIcon icon={faGithub} style={{ height: "35px", marginLeft: "10px" }} />
          </a>
        </div>
      </div>
    </div>
  </div >
}
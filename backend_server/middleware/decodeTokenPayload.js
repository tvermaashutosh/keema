import jwt from "jsonwebtoken"

export default function (req, res, next) {
  try {
    const token = req.headers["auth-token"].replace("Bearer ", "")
    if (!token) {
      return res.status(401).send({ error: "Invalid token" })
    }

    const skey = process.env.SECRET_KEY
    const payload = jwt.verify(token, skey)
    req.doctor_id = payload._id

    next()
  }
  catch (e) {
    return res.status(401).send({ error: e.message })
  }
}
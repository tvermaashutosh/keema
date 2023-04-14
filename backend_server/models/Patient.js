import mongoose from "mongoose"

export default mongoose.model("Patient", new mongoose.Schema({
  name: { type: String, required: true },
  sex: { type: String, required: true },
  age: { type: Number, required: true },
  mobile: { type: Number },
  address: { type: String, required: true },
  pmh: { type: String },
  workDone: { type: String },
  payment: { type: Number, required: true },
  balance: { type: Number, required: true },
  nextAppointment: { type: String }, // FIXME: should be Date
  registrationDate: { type: String }, // FIXME: should be Date
  _sex: { type: String, required: true, enum: ["M", "F", "O"] }, // express val change in pat apis
  _work: { type: String }, // express val change in pat apis
  _appointment: { type: Date }, // express val change in pat apis
  _registration: { type: Date, required: true } // express val change in pat apis
}))

// export default mongoose.model("Patient", new mongoose.Schema({
//   name: { type: String, required: true },
//   sex: { type: String, required: true, enum: ["M", "F", "O"] },
//   age: { type: Number, required: true },
//   address: { type: String, required: true },
//   mobile: { type: Number },
//   pmh: { type: String },
//   work: { type: String },
//   payment: { type: Number, required: true },
//   balance: { type: Number, required: true },
//   appointment: { type: Date },
//   registration: { type: Date, required: true }
// }))
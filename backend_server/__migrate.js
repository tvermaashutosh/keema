// migrate.js
import mongoose from "mongoose";
import Patient from "./models/Patient.js"; // adjust path as needed
import dotenv from "dotenv";
dotenv.config();

async function migrate() {
  await mongoose.connect(process.env.DATABASE_URI);
  console.log("🔗 Connected to MongoDB");

  const cursor = Patient.find().cursor();
  let count = 0;

  for await (const doc of cursor) {
    // 1. Map existing `sex` → enum "M"/"F"/"O"
    let newSex = String(doc.sex || "")
      .trim()
      .charAt(0)
      .toUpperCase();
    if (!["M","F","O"].includes(newSex)) newSex = "O";

    // 2. Copy workDone → _work
    const newWork = doc.workDone || "";

    // 3. Convert nextAppointment string → Date
    //    assumes format "YYYY-MM-DDTHH:mm"
    const newAppt = doc.nextAppointment
      ? new Date(doc.nextAppointment)
      : null;

    // 4. Convert registrationDate string → Date
    //    uses JS Date parser on "Sat Apr 15 2023 …" format
    const newReg = doc.registrationDate
      ? new Date(doc.registrationDate)
      : null;

    // 5. Apply updates
    doc._sex           = newSex;
    doc._work          = newWork;
    doc._appointment   = newAppt;
    doc._registration  = newReg;

    await doc.save();

    count++;
    if (count % 100 === 0) console.log(`  → updated ${count} docs`);
  }

  console.log(`✅ Migration complete: ${count} documents updated.`);
  await mongoose.disconnect();
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});
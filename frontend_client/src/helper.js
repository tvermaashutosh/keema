function pad(n) {
  return n.toString().padStart(2, "0")
}

function formatDate(dd) {
  const d = new Date(dd),
    day = d.getDate(),
    mon = d.toLocaleString("default", { month: "short" }),
    yea = d.getFullYear(),
    hou = d.getHours(),
    min = d.getMinutes()

  const apm = hou < 12 ? "AM" : "PM",
    hou1 = (hou % 12) || 12

  return `${day} ${mon} ${yea} — ${pad(hou1)} : ${pad(min)} ${apm}`
}

function formatDateSecond(dd) {
  const d = new Date(dd),
    day = d.getDate(),
    mon = d.toLocaleString("default", { month: "short" }),
    yea = d.getFullYear(),
    hou = d.getHours(),
    min = d.getMinutes(),
    sec = d.getSeconds()

  const apm = hou < 12 ? "AM" : "PM",
    hou1 = (hou % 12) || 12

  function pad(n) {
    return n.toString().padStart(2, "0")
  }

  return `${day} ${mon} ${yea} — ${pad(hou1)} : ${pad(min)} : ${pad(sec)} ${apm}`
}

function substring18(s) {
  return s.length <= 18 ? s : s.slice(0, 15) + "..."
}

export default { formatDate, formatDateSecond, substring18 }
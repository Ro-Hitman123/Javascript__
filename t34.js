function updateTime() {
let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()
let mo = a.getMonth() + 1
let y = a.getFullYear()
document.getElementById("hour").innerText = `${h}`
document.getElementById("minute").innerText = `${m}`
document.getElementById("second").innerText = `${s}`
document.getElementById("date").innerText = `${d}/${mo}/${y}`
}
 updateTime();
setInterval(updateTime, 1000);

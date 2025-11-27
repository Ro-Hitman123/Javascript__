function updateTime() {
let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let p = h >= 12 ? 'PM' : 'AM'
h = h<10 ? '0' + h : h
m = m<10 ? '0' + m : m
s = s<10 ? '0' + s : s
let d = a.getDate()
let mo = a.getMonth() + 1
let y = a.getFullYear()
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = dayNames[a.getDay()];
document.getElementById("hour").innerText = `${h}`
document.getElementById("minute").innerText = `${m}`
document.getElementById("second").innerText = `${s}`
document.getElementById("date").innerText = `${day}, ${d}/${mo}/${y}`
document.getElementById("AP").innerText = `${p}`
}
 updateTime();
setInterval(updateTime, 1000);

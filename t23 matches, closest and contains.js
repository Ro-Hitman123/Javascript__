let id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.matches(".box")); // true
console.log(id1.matches(".box1")); // false
console.log(id1.closest(".box")); 
console.log(sp1.closest("#sp1")); 
console.log(id1.contains(sp1));
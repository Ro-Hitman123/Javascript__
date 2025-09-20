document.write("Welcome to Snake, Water, Gun game! <br>")
document.write("S for Snake, W for Water and G for Gun <br>")
let user = prompt("Enter S, W or G")
let cpuI = Math.floor(Math.random()*3)
let cpu = ["S", "W", "G"][cpuI]

if (user !== "S" && user !== "W" && user !== "G") {
    document.write("Invalid input! Please enter S, W, or G.")
} else {
    const match = (cpu, user) => {
        if (user === cpu) {
            return("It's a tie!")
        } 
        else if (
            (user === "S" && cpu === "W") ||
            (user === "W" && cpu === "G") ||
            (user === "G" && cpu === "S")
        ) {
            return("user")
        } 
        else {
            return("cpu")
        }
    }

    let result = match(cpu, user)
    document.write(`You chose ${user}<br>CPU chose ${cpu}<br>The winner is : ${result}`)
    let color = prompt("Enter a bg color")
    document.body.style.background = color
    document.body.style.fontSize = "20px"
}


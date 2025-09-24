let num = +prompt("Entrer un nombre :");
let diviseurs = "";

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        if (diviseurs === "") {
            diviseurs = i;        
        } else {
            diviseurs += ", " + i; 
        }
    }
}

alert("Les diviseurs de " + num + " :\n" + diviseurs);

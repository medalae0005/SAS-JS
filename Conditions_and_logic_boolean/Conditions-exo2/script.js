let note = prompt("Entrer la note (de 0 à 20) : ");
if (note < 10) {
    alert("Insuffisant");
} else if (note >= 10 && note <= 12) {
    alert("Passable");
} else {
    alert("Bien");
}
let sum = 0; let count = 0; let note;

do {
    note = +prompt("Saisir une note (ou -1 pour arrêter): ");

    if (note === -1) {
        break;
    }

    if (note >= 0 && note <= 20) {
        sum += note;
        count++;
    } else {
        alert(note + " : Note non valide");
    }
} while (true);

if (count > 0) {
    alert(`Nombre de notes = ${count} , Moyenne = ${sum / count}`);
} else {
    alert("Aucune note valide saisie !");
}
let comp = {
    C1:"Maquettage",
    C2:"HTML/CSS",
    C3:"JavaScript",
    C4:"BD",
    C5:"Back-end",
    C6:"Projet",
    C7:"Déploiement",
    C8:"Veille"};

let score = 0;

for(let i=0 ; i<10 ; i++) {
    let k = Object.keys(comp)[Math.floor(Math.random()*8)];
    let r = prompt("Code pour: " + comp[k]);
    
    if (r && r.toUpperCase() == k) {
        alert("Correct");
        score++;
    }
    else alert("Faux, c'était "+k);
}
alert("END ! Your Score is: "+score+"/10");
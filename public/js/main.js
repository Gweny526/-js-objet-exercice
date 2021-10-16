// // exo1
// let mag = {
//     patates: 1.50,
//     pomme: 2,
//     chocolat: 2.00,
//     pain: 2.50,
// };

// console.log(mag);
// let perso = {
//     money: 30.00
// }


// let ask;

// let course = () => {
//     alert("Bienvenue au magasin: ");
//     alert("Nous avons des patates, des pommes, du chocolat et du pain.");
//     alert(`${mag}`)
//     for (let i in mag) {
//         let ask = prompt("Voulez-vous acheter " + i);
//         if (ask == "oui") {
//             perso.money -= mag[i];
//         } else {
//             alert(`D'accord voici un autre element`)
//         };
//         alert(`Il vous reste ${perso.money} €`)
//     };
// };

// course();
// console.log(perso.money);
// console.log(box.money - box.pain - box.choc)
console.log("____");

// Exo2
let oldLady = {
    age : 98,
    nom : "Dupont Germaine",
    moral : "mal",
    objet : "canne",
    se_plaindre (a){
        if (this.moral == "mal"){
            console.log("vous me dérangez " + oldMan.prenom);
        }else if (this.moral == "bien"){
            console.log("bonjour monsieur " + oldMan.prenom);
        }
    },
    se_promener(){
        this.objet = "perdu";
        return this.objet;
    }
};
let oldMan = {
    prenom : "Pierre",
    age : 78,
    saluer(){
        console.log("bonjour " + oldLady.nom);
        oldLady.se_plaindre(this);

    },
    adoucir(){
        return oldLady.moral = "bien"
    }
};

oldLady.se_plaindre(oldMan);

console.log(oldLady.objet);
console.log(oldLady.se_promener());

oldMan.saluer();
oldMan.adoucir();
oldLady.se_plaindre(oldMan);
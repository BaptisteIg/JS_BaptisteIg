const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log("\n# Tous les livres ont-ils été empreinté au moins une fois?")
  var counter = 0
  books.forEach((novel) => {
    if (novel.rented > 0) {
        counter += 1
    }
});
if (counter == 0 ) {
    console.log("Un des livres n'a pas été emprunté"); 
} else {
    console.log("Tous les livres ont été emprunté"); 
}

books.sort((a, b) => a.rented - b.rented)

first = books[0].title
last = books[(books.length) - 1].title

console.log(`\n# Le livre le plus emprumté est : ${last}`)

console.log(`\n# Le livre le moins emprumté est : ${first}`)


const resultat = books.find(book => book.id == '873495').title;
console.log(`\n# Le livre avec l'id 873495 est : ${resultat}`);


let result = books.findIndex(book => book.id == 133712);
books.splice(books[result],1)



console.log(books.sort((a, b) => a.id - b.id))

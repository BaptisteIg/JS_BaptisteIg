const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];


console.log("\n# Voici les entrepreneurs qui sont nés dans les années 70 :")
entrepreneurs.forEach((boss) => {
    if (boss.year > 1969 && boss.year < 1980){
    console.log(boss.first + " " + boss.last);
  }
});

names = []
entrepreneurs.forEach((boss) => {
    names.push(boss.first)
    names.push(boss.last)
});
console.log(names);

console.log("\n# Voici l'age des entrepreneurs :")
entrepreneurs.forEach((boss) => {
    age = 2020 - boss.year
    console.log(boss.first + " " + age);
});


console.log("\n# Voici la liste des entrepreneurs classé par nom en ordre alphabétique:")
console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)))

number = prompt("De quel nombre veux-tu le factorielle?")
console.log(`Ton nombre est ${number}!`)

let num = number

if (num == 0 ) {
    console.log(`Son factorielle est donc 1`);
  } else { while(number > 1) {
    number --
    num *= number
  } 
  console.log(`Son factorielle est donc : ${num}`)
}
  
  

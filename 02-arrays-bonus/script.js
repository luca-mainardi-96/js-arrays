const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// const reversedTeachers = teachers.toReversed()
const reversedTeachers = []
for (let i = 0; i < teachers.length; i++) {
  const index = teachers.length -1 -i
  const element = teachers [index]
  reversedTeachers.push(element)
}

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []
for(i=0; i<teachers.length; i++){
  if (teachers[i].length>=5)
    longNames.push(teachers[i])
}
//longNames = teachers.filter(teachers[i]=>teachers[i].length >=5)

// 3. Rimuovi 'Ed' dall'array teachers
const indexEd = teachers.indexOf("Ed")
if (indexEd !== -1){
  teachers.splice(indexEd, 1)
}
// teachers.splice(5, 1)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
//let isFabioPresent = teachers.includes('Fabio')
const daTrovare = 'Fabio'
let presente = false
for (i=0; i<teachers.length; i++){
if (teachers[i] === daTrovare){
  presente = true}
}
const isFabioPresent = presente;
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// const teachersString = teachers.join(", ");
let teachersString = teachers[0]
separatore = ", "
for (i=1; i<teachers.length; i++){
  const name = teachers[i]
  teachersString += separatore + name
}
console.log(teachersString)
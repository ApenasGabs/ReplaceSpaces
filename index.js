

const myString = prompt('Digite a sua string ')
const resut = myString.replace(/\s/g, '-').toLocaleLowerCase().replace(/[\[\]}\{']/g, '')
console.log(resut)
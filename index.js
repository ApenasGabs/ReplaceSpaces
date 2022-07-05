

const myString = prompt('Digite a sua string ')
const resut = myString.replace(/\s/g, '-').toLocaleLowerCase()
console.log(resut)